# 大数据入门



## 大数据术语

参考[大数据正当时，理解这几个术语很重要](https://cloud.tencent.com/developer/article/1492923)

01 离线计算 Vs 实时计算

02 实时查询 Vs 即席查询

03  OLTP Vs OLAP

04 行式存储 Vs 列式存储

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h26r8jkcb4j216p0u0n9p.jpg)



```
spark-submit --class org.apache.spark.examples.SparkPi --master yarn --deploy-mode cluster --driver-memory 1G --num-executors 3 --executor-memory 1G --executor-cores 1 /home/hadoop/spark-2.4.3-bin-without-hadoop/examples/jars/spark-examples_2.11-2.4.3.jar
```

之后可以看到：

![](https://tva1.sinaimg.cn/large/008i3skNly1gwrmq5yj4sj329w0es76a.jpg)

如果内存过小，配置`yarn-site.xml`

```
<property>
<name>yarn.nodemanager.pmem-check-enabled</name>
<value>false</value>
</property>

<property>
<name>yarn.nodemanager.vmem-check-enabled</name>
<value>false</value>
</property>
```





```
hadoop jar /usr/local/hadoop/share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.5.jar  wordcount /input/input.txt  /felixcountoutput
```



```
import logging
from operator import add
from pyspark import SparkConf, SparkContext


logging.basicConfig(format='%(message)s', level=logging.INFO)

input_file_name = "hdfs://localhost:9000/input/hadoop/yarn-site.xml"
out_file_name = "hdfs://localhost:9000/test/spark/data-output1.txt"

conf = SparkConf().setMaster("yarn").setAppName("Linkis-EngineConn-Spark_IDE")

sc = SparkContext.getOrCreate(conf = conf)

text_file = sc.textFile(input_file_name)

counts = text_file.flatMap(lambda line: line.split(" ")).map(lambda word: (word,1)).reduceByKey(lambda a,b:a+b)

counts.saveAsTextFile(out_file_name)

```



## OLTP

联机事务处理OLTP（on-line transaction processing），OLTP是传统的关系型数据库的主要应用，主要是基本的、日常的事务处理，例如银行交易



## 即席查询

即席查询（Ad Hoc）是用户根据自己的需求，灵活的选择查询条件，系统能够根据用户的选择生成相应的统计报表。即席查询与普通应用查询最大的不同是普通的应用查询是定制开发的，而即席查询是由用户自定义查询条件的

## OLAP

联机分析处理OLAP（On-Line Analytical Processing）, OLAP是数据仓库系统的主要应用，支持复杂的分析操作，侧重决策支持，并且提供直观易懂的查询结果。



## 数据仓库

ODS、DWD、DWM、DWS、ADS

[详解数仓中的数据分层：ODS、DWD、DWM、DWS、ADS](https://cloud.tencent.com/developer/article/1919798)

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h26uwwtubej20u00uy44l.jpg)

## 工具入门

（1）HDFS集群：负责海量数据的存储，集群中的角色主要有 NameNode / DataNode/SecondaryNameNode。

（2）YARN集群：负责海量数据运算时的资源调度，集群中的角色主要有 ResourceManager /NodeManager

（3）MapReduce：它其实是一个应用程序开发包。

![](https://pic1.zhimg.com/80/v2-2fbb6391206db40675afa8617806a8be_1440w.jpg?source=1940ef5c)

![](https://pic4.zhimg.com/80/v2-d710ed622784fbdf7de7c4933cc076f7_1440w.jpg)



## ETL 工具

### 

## 迁移工具

迁移工具就是将业务数据复制一份到大数据这边

### sqoop

![img](https://pic1.zhimg.com/80/v2-fd3bf7906b0df75e7f022c133d9fadbe_1440w.jpg?source=1940ef5c)



## 时序数据库

关于时序数据库的对比 [Druid vs. ClickHouse vs. InfluxDB](https://db-engines.com/en/system/Apache+Druid%3BClickHouse%3BInfluxDB)，

[阿里巴巴双11千万级实时监控系统技术揭秘](https://www.dandelioncloud.cn/article/details/1492695565308862466)

[阿里云栖开发者沙龙（第六期）时序数据库专场](https://developer.aliyun.com/live/863?accounttraceid=3b8312cfbd3748dd876e08adc7cd8ef0bpus)

[各类数据库使用场景比较](https://blog.csdn.net/SECURE2/article/details/104531545/)

## 工具

### Hadoop

数据存储层：分布式文件存储系统 HDFS，分布式数据库存储 HBase

数据处理层：进行数据处理的 MapReduce，负责集群和资源管理的 YARN

数据访问层：Hive、Pig、Mahout

### Hive

[HBase 和 Hive 的差别是什么，各自适用在什么场景中？](https://www.zhihu.com/question/21677041)

hive是文件的视图，HBASE就是架在Hadoop上的MongoDB，纯kv引擎，没有事务，row key级索引

Hive：Hive是Hadoop[数据仓库](https://www.zhihu.com/search?q=数据仓库&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A185664626})，严格来说，不是数据库，主要是让开发人员能够通过SQL来计算和处理HDFS上的结构化数据，适用于离线的批量数据计算。

### 优缺点

- 并发写入不高
- hive 查询不快

### 场景

离线数据分析

### HBase

Use Apache HBase™ when you need random, realtime read/write access to your Big Data.



hbase是建了索引的key-value表，HBASE就是架在Hadoop上的MongoDB，纯kv引擎，没有事务，row key级索引



Hbase： Hadoop database 的简称，也就是基于Hadoop数据库，是一种NoSQL数据库，主要适用于海量明细数据（十亿、百亿）的随机实时查询，如日志明细、交易清单、轨迹行为等。

### Flink

是一种流式处理

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h26r63hc3nj20u008a3yv.jpg)



### Spark

[官网例子](https://spark.apache.org/examples.html)

Spark 只能代替 Hadoop 的数据处理层的 MapReduce，其余还得依赖 Hadoop

操作如下

- Map
- Filter
- flatMap
- groupByKey
- Union

五个扩展库

- 支持结构化数据的 Spark SQL
- 处理实时数据的 Spark Streaming
- 用于机器学习的 MLlib
- 用于图计算的 GraphX
- 用于统计分析的 SparkR

![](https://tva1.sinaimg.cn/large/008i3skNly1gz4yktyo5mj314e0qegnz.jpg)

RDD

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gz50he4emdj30u013q426.jpg" style="zoom:50%;" />

RDD逻辑上是一个大数组，其特点是：

- 分区

  分区是指存储在系统的不同节点，数组中的每个元素代表一个分区。分区内部不存储具体的数据

  ![](https://tva1.sinaimg.cn/large/008i3skNly1gz4zbu5zcjj312k0l240w.jpg)

- 不可变的

  

- 并能够被并行操作



[Spark术语01-application、job、Stage、task的区别](https://juejin.cn/post/6980114420886143007)

- job

- stage
- task



### Spark-streaming

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h22az5fqa1j20tr06ngm7.jpg)

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h22azhgxuwj20ub0aswff.jpg)

DStream是spark-streaming提供的一个抽象数据类型， 就是按时间切分的一组有序RDD集合。



![img](https://img-blog.csdnimg.cn/20200322144757665.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3NTkyODE0,size_16,color_FFFFFF,t_70)

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h225ubu7j1j21300nataa.jpg)

```
spark-submit --conf "spark.driver.extraJavaOptions=-Dlog4j.configuration=file:log4j.properties" --master local[2] --name xladata-clean --class ai.neuvision.sdk.neudataanalysis.streaming.clean.realtime.XlaDataToIndex ./NeuDataAnalysis-streaming.jar
```

spark-submit --conf "spark.driver.extraJavaOptions=-Dlog4j.configuration=file:log4j.properties" --master local[2] --name calldata-clean --class ai.neuvision.sdk.neudataanalysis.streaming.main.TestMain ./NeuDataAnalysis-streaming.jar

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h26rbqwfpbj21ed0u0tcx.jpg)

### Spark-SQL



### DSS

如果 8901 端口总是报错，接口报`err_incomplete_chunked_encoding`，是因为nginx需要写入缓存没有权限，需要执行` sudo chown -R hadoop:hadoop /var/lib/nginx`



## 批处理

批处理是为了有界离散的数据

hadoop(mapreduce)、hive 是批处理

Flink DataSet 

## 流处理

流处理是为了无界连续的数据

Flink DataStream

Apache Kafka、Apache Flink、Apache Storm、Apache Samza 等，都是流行的流处理架构平台。

## 流批一体

未来主流

- Apache Flink
- Apache Bean

## workflow

- 复制模式

  一个视频数据集被不同的模块同步进行处理

- 过滤模式

  只处理满足条件的

- 分离模式

  数据分组，会员等级

- 合并模式

  将不同的数据合并起来之后再处理

## Lambda架构

- 批处理层
- 速度处理层
- 服务层

![](https://tva1.sinaimg.cn/large/008i3skNly1gz4rsom89bj312u0di0u1.jpg)

## Kappa 架构

依赖于 kafka







## 参考

[Hive Tables](http://spark.apache.org/docs/latest/sql-data-sources-hive-tables.html)

[与 Hadoop 对比，如何看待 Spark 技术？](https://www.zhihu.com/question/26568496)

[运行hadoop提供的示例程序](https://blog.csdn.net/qq279862451/article/details/79253071)

[使用Spring-hadoop小结](https://www.cnblogs.com/flowyourheart/p/shi-yongSpringhadoop-xiao-jie.html)

[Spark2.3.1中用各种模式来跑官方Demo ](https://www.cnblogs.com/puppey/p/9718592.html)

[Submitting Applications](https://spark.apache.org/docs/latest/submitting-applications.html#submitting-applications)

[spark download and install, run the examples (spark a)](https://www.codetd.com/en/article/7303787)

[Linkis](https://gitee.com/WeBank/Linkis)

[Linkis-Doc](https://github.com/WeBankFinTech/Linkis-Doc)

[Linkis1.0.2 安装及使用指南](https://www.jianshu.com/p/d0e8b605c4ce#4-%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)

[scala2.11](http://distfiles.macports.org/scala2.11/)

[Hadoop组成](https://juejin.cn/post/6988458772880588831)

[如何用形象的比喻描述大数据的技术生态？Hadoop、Hive、Spark 之间是什么关系？](https://www.zhihu.com/question/27974418/answer/1862026844)

[Spark Streaming 设计原理](https://zhuanlan.zhihu.com/p/47838090)

[hbase宽表和高表以及优缺点](https://blog.csdn.net/qq_32727095/article/details/114023121)

[有赞数据仓库实践之路，超全面干货！](https://www.fanruan.com/bw/yzsj)

[Java Spark 简单示例（五）Spark Streaming](https://www.jianshu.com/p/c72cc55d7af5)

[Kafka + Spark Streaming +Hive 数据采集入库整合实践（二）](http://lishijia.top/2018/12/13/spark-streaming/spark-streaming-2.html)

[Sparkstreaming读取kafka数据写入hive和es](https://blog.csdn.net/m0_37592814/article/details/105027815)

[使用docker搭建spark(2.3.1)集群](https://www.jianshu.com/p/e0865a2193cc)

[Spark Streaming 编程入门指南](https://www.cnblogs.com/cjsblog/p/12620974.html)

[infoq-硬刚 Apache Iceberg | 技术调研 & 在各大公司的实践应用大总结](https://xie.infoq.cn/article/b0b0f10dc56b973bc838639c5)

[infoq-Spark 比拼 Flink：下一代大数据计算引擎之争，谁主沉浮？](https://www.infoq.cn/article/spark-vs-flink)

[【实时计算】Spark批处理流程图解 + 深入剖析](https://blog.csdn.net/weixin_43788859/article/details/122187190)

[什么是OLAP？主流八大开源OLAP技术架构对比](https://segmentfault.com/a/1190000040428093)

[Spark Streaming的优化之从Receiver到Direct模式](https://juejin.cn/post/6844903865645531143)

[实时计算在有赞的实践——效率提升之路](https://www.infoq.cn/article/zwj_cyplqgeueaztsydr)