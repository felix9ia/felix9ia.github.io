# ES

记录

## Java

可以参考 [Elasticsearch Java 手册](https://es.quanke.name/aggregations/metrics-aggregations.html)

## 聚合

```
interval(时间间隔)的可用表达式：

year（1y）年
quarter（1q）季度
month（1M）月份
week（1w）星期
day（1d）天
hour（1h）小时
minute（1m）分钟
second（1s）秒
链接：https://www.jianshu.com/p/af9afbd1a722
```



```
间隔有3种，分别为calendar_interval，fixed_interval,interval
calendar_interval: 与日历相关的间隔，因此按照月份的话会存在不同月份天数不同，其单位只能为单倍的时间单位,立即ms，s，m，d，M，q，y等；
fixed_interval: 做为对照，通常是多倍的时间单位，如1m，2h，3d等，由于是固定的间隔，而月年等单位天数不是固定的，因此不可以使用，即fixed模式最大的单位为d；
interval: 容易造成歧义，后续将会被弃用，此处不解释；
————————————————
版权声明：本文为CSDN博主「昕光xg」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u011127242/article/details/108813516
```

各种聚合：

[ElasticSearch 的Bucket Aggregation 桶聚合(包含javaApi)](https://www.cnblogs.com/shenlei-blog/p/13931702.html)

[elasticsearch date_histogram min_doc_count extended_bounds 使用](https://blog.csdn.net/tianshishangxin1/article/details/106497519)



如何创建索引模板

```
boolean putTemplate(Class<T> entityClass, String templateName, String... indexPatterns) {
    IndexOperations ops = elasticsearchRestTemplate.indexOps(entityClass);
    PutTemplateRequest request = PutTemplateRequest.builder(templateName, indexPatterns)
            .withSettings(Document.from(ops.createSettings()))
            .withMappings(Document.from(ops.createMapping()))
            .build();
    return ops.putTemplate(request);
}
```

## 参考

[ES 的跨索引查询有多便利？对比下分库分表、分片更直观](https://www.infoq.cn/article/ekygoihkqifj4kdgso6a)

https://blog.csdn.net/u011127242/article/details/108813516

[es date_histogram](https://www.jianshu.com/p/af9afbd1a722)

[elasticsearch date_histogram min_doc_count extended_bounds 使用](https://blog.csdn.net/tianshishangxin1/article/details/106497519)

[SQL to Java code for Elasticsearch](https://www.cnblogs.com/luxiaoxun/p/6826211.html)

https://github.com/NLPchina/elasticsearch-sql

[用Elasticsearch做Terms聚合计算数据不准的问题](https://www.dongwm.com/post/elasticsearch-terms-agg-is-not-accurate/)

[ES嵌套对象和父子文档](https://blog.csdn.net/chuantanyan5605/article/details/101014280)

[ES嵌套（Nested）文档使用](https://blog.csdn.net/qq_42200163/article/details/113704087)

[ES aggregation详解](https://www.cnblogs.com/candlia/p/11920034.html)

[ES系列之原来ES的聚合统计不准确啊](https://segmentfault.com/a/1190000022025890)

[ElasticsearchRestTemplate 的一些坑](https://h2cone.github.io/post/2021/07/26/elasticsearch_rest_template_pitfall/)

[Elasticsearch(5) --- 基本命令(集群相关命令、索引CRUD命令、文档CRUD命令)](https://www.cnblogs.com/qdhxhz/p/11461174.html)

