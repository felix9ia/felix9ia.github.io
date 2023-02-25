---
time: 2022-8-4




---
# OLAP 入门

OLAP（On-line Analytical Processing，联机分析处理）是在基于数据仓库多维模型的基础上实现的面向分析的各类操作的集合。与传统的OLTP（On-line Transaction Processing，联机事务处理）有区别。

## 概念

没有任何一个框架能够完美兼顾。

![img](https://ask.qcloudimg.com/http-save/yehe-4501479/qslkyon0sz.png?imageView2/2/w/1620)

## 框架对比

如下是几大框架的对比：



![](https://tva1.sinaimg.cn/large/e6c9d24ely1h38ynowtmuj20jm0gg76j.jpg)

下面是美团 16 年的报告

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h38yrhq2a9j20k009ajsd.jpg)



## 类型

有以下三种：

### 多维 OLAP( Multi-dimensional OLAP )

**MOLAP**，提前算，预聚合代表有

- Druid
- Kylin

### 关系型 OLAP(Relational OLAP)

**ROLAP**， 实时聚合 ，耗费计算资源，其代表有：

- Presto
- Impala
- GreenPlum
- Clickhouse
- Elasticsearch
- Hive
- Spark SQL
- Flink SQL

### 混合 OLAP(Hybrid OLAP )

**当查询聚合数据时，使用 MOLAP；**

**当查询明细数据时，使用 ROLAP；**

## 执行模型

有以下三种：

### Scatter-Gather执行模型

相当于MapReduce中的一趟Map和Reduce，没有多轮的迭代，而且中间计算结果往往存储在内存中，通过网络直接交换。

代表有

- Elasticsearch
- Druid
- Kylin

### MapReduce

代表有

- Hive

### MPP

MPP学名叫大规模并行计算，代表有

- Presto
- Impala
- Clickhouse
- Spark SQL
- Flink SQL

## Spark 和 Druid

[Apache Druid 与 Spark](https://druid.apache.org/docs/latest/comparisons/druid-vs-spark.html)

## 参考

[什么是OLAP？主流八大开源OLAP技术架构对比](https://segmentfault.com/a/1190000040428093)

[大数据OLAP框架对比](https://www.jianshu.com/p/1cc980bcf533)