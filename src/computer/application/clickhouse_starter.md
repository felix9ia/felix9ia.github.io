# Clickhouse 起步

## 

### 配置启动

编辑 `/etc/clickhouse-server/config.xml`,取消下面的注释

```
<listen_host>::</listen_host>
```

然后重启

```

service clickhouse-server restart 

```

### Docker

```
docker run -it --rm -p 8123:8123 --name clickhouse-server-house-ops yandex/clickhouse-server
```

# 连接

TCP：`9000`

HTTP： `8123`

## 创建

```
create database if not exists neu_metric; 
# or
create database if not exists neu_metric ON CLUSTER default; 
```

### Kafka

[输入和输出数据的格式](https://clickhouse.tech/docs/en/interfaces/formats/)

1. 创建 kafka 同步消费表

   此步骤用于接收

   ```
   CREATE TABLE neu_metric.kafka_quality_metric
   (
     id Int32,
     reportAt DateTime64(3, 'Asia/Shanghai'),
     reportAtOfMin DateTime64(3, 'Asia/Shanghai'),
     createdAt DateTime64(3, 'Asia/Shanghai'),
     idxCode String,
     idxAvgValue Float64,
     provider String,
     aggGranularity String,
     appid String,
     uid String,
     platform String,
     sdkVersion String,
     sessionId String,
     sessionEndTime DateTime64(3, 'Asia/Shanghai'),
     sessionStartTime DateTime64(3, 'Asia/Shanghai'),
     phoneName String,
     phoneVersion String,
     appVersion String,
     audioCoding String,
     countrycode String,
     network String,
     videoCoding String,
     screenSize String,
     denoiseLevel Int32,
     os String,
     gpu1 String,
     reportAtByClient DateTime64(3, 'Asia/Shanghai'),
     codeOfSessionAndUid String,
     codeOfSessionAndPeerUid String
   ) ENGINE = Kafka()
   SETTINGS
       kafka_broker_list = '10.18.101.5:9092',
       kafka_topic_list = 'topic-metric-index',
       kafka_group_name = 'click_house_group',
       kafka_format = 'JSONEachRow',
       kafka_row_delimiter = '\n',
       input_format_import_nested_json = 1
   
   ```

2. 创建目标表 MergeTree

   ```
   create table neu_metric.quality_metric (
     id Int32,
     reportAt DateTime64(3, 'Asia/Shanghai'),
     reportAtOfMin DateTime64(3, 'Asia/Shanghai'),
     createdAt DateTime64(3, 'Asia/Shanghai'),
     idxCode String,
     idxAvgValue Float64,
     provider String,
     aggGranularity String,
     appid String,
     uid String,
     platform String,
     sdkVersion String,
     sessionId String,
     sessionEndTime DateTime64(3, 'Asia/Shanghai'),
     sessionStartTime DateTime64(3, 'Asia/Shanghai'),
     phoneName String,
     phoneVersion String,
     appVersion String,
     audioCoding String,
     countrycode String,
     network String,
     videoCoding String,
     screenSize String,
     denoiseLevel Int32,
     os String,
     gpu1 String,
     reportAtByClient DateTime64(3, 'Asia/Shanghai'),
     codeOfSessionAndUid String,
     codeOfSessionAndPeerUid String
   ) ENGINE = MergeTree()
       ORDER BY (id)
   ```

3. 创建前两者的物化桥梁

   ```
   CREATE MATERIALIZED VIEW neu_metric.consumer  TO neu_metric.quality_metric AS SELECT * FROM neu_metric.kafka_quality_metric
   ```

4. Kafka 生产并查询数据

   ```
   select *
   from quality_metric
   ```


5. 停止解析

   ```
   DETACH TABLE  neu_metric.consumer
   ```

6. 开启解析

   ```
   ATTACH TABLE neu_metric.consumer
   ```


7. 删除表

   ```
   DROP TABLE neu_metric.kafka_quality_metric
   ```

   



删除脏数据步骤：

1、执行```DETACH TABLE sync_kafka_u0```, 下线kafka引擎表。

2、重置Kafka对应的Offset

kafka-consumer-groups --bootstrap-server 172.30.xxx.xxx:9092 \

--topic ck.t0 --group t0.g1 \

--reset-offsets --to-earliest --execute

也可通过kafka-consumer-groups.sh命令查看具体的offset，然后通过重置功能重置到具体的offset（具体指定忽略多少条记录）。

3、执行```ATTACH TABLE data_source```, 上线该表。



作者：淡淡的小番茄
链接：https://www.jianshu.com/p/745531f7650e
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 分区和TTL



## 参考

以下是上面流程的参考引用。

### 工具

[在线JSON转ClickHouse数据表工具](https://tooltt.com/json2clickhouse/)

### 官网

[数据类型](https://clickhouse.com/docs/zh/sql-reference/data-types/)

[输入和输出数据的格式](https://clickhouse.tech/docs/en/interfaces/formats/)

### 阿里云文档

[从Spark导入数据至ClickHouse](https://help.aliyun.com/document_detail/212277.html)

[从Kafka同步](https://help.aliyun.com/document_detail/146007.html)

[从Kafka导入数据至ClickHouse](https://help.aliyun.com/document_detail/299949.html)

### 腾讯云

[腾讯云-ClickHouse SQL 语法参考](https://cloud.tencent.com/document/product/1299/49847)

### 其他

[ClickHouse-Kafka引擎，kafka to clickhouse详细教程](https://cpp.la/603.html)

[ClickHouse实战-ClickHouse整合Kafka](https://cloud.tencent.com/developer/article/1762843)

[用Docker快速上手Clickhouse](https://sineyuan.github.io/post/clickhouse-docker-quick-start/)

[clickvisual - ClickHouse 常用 SQL](https://clickvisual.gocn.vip/clickvisual/03funcintro/clickHouse-commonly-used-sql.html#今日-pv)

