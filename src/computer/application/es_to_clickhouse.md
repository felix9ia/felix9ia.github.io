---
time: 2022-9-20



---
# 质量实时数仓从 Elasticsearch 到 ClickHouse

Elasticsearch 其实不太满足我们 OLAP 的业务场景了，所以想趁着重构的机会，将存储引擎替换掉 ，目前备选有 Druid 和 ClickHouse，但更倾向于 ClickHouse，目前正在实际使用对比评估中。

[ClickHouse ](https://clickhouse.com/) 更加符合我们实时查询和范围聚合两种高频使用场景，且能够满足后期的多维度分析场景，具备而更好的扩展性。以下是对存储引擎切换方案的梳理。

## 总结

质量重构的理想目标是，在提供可以更加复杂的分析场景下，能更提前预警与提供决策。向一个更加智能的 OLAP 系统进行迭代。**而存储的选择是这一切的开始与基石，需要谨慎选择。**

### 选型 ClickHouse 的收益

针对我们目前系统的使用场景。

一旦我们选择调整到 ClickHouse，可以收获：

- 低延迟的实时大数据存储与查询

  Elasticsearch 在性能上要求更高。

- 更快的聚合

  这在 Elasticsearch 依赖更多的内存，查询条件有门槛比较困难且废人工。

  而 ClickHouse 为列式存储并提供物化视图，  SQL 查询更加容易上手

- 更复杂的多维度分析

  Elasticsearch 基无能为力，或者需要大量冗余来实现。而列式存储的 ClickHouse 是天生的优势。

### 选型 ClickHouse 的代价

当然选择新服务一定会带来一定的代价：

- 需要搭建 ClickHouse 的集群

  但选择任何非 Elasticsearch 的存储都需要搭建，逃不过.

- 学习 ClickHouse 的使用

  本身是类 SQL 的，所以学习门槛较低，代价不高

**从未来的收益和代价来看，ClickHouse 值得**。以下是对此次存储选型方案的调研与梳理。

## 背景

如果把重构分为以下三个阶段的话：

1. 数据分析

   Spark 只是一个分析工具，并没有提供存储和检索的相应解决方案

2. 数据存储

3. 数据查询

**现阶段，使用 Spark 进行第 1 阶段 -- 数据分析，基本度过了阵痛期，后面就是完善细节。**

但是对于存储和查询流程的实现还是有些许迟疑。

**如果我们路径依赖的继续选用 Elasticsearch 进行存储，会面临系统后续迭代的种种分析挑战，甚至会导致再一轮的重构。**具体分析如下：

### 我们在做的是 OLAP

我们的质量分析系统**是一个：**

**联机分析处理 OLAP（On-Line Analytical Processing）, OLAP是数据仓库系统的主要应用，支持复杂的分析操作，侧重决策支持，并且提供直观易懂的查询结果。**

~~**而不是：**~~

~~联机事务处理OLTP（on-line transaction processing），OLTP是传统的关系型数据库的主要应用，主要是基本的、日常的事务处理，例如银行交易。~~

在我们系统是 OLAP 的大前提下，当前的质量只是做到了数据的呈现，**并没有支持复杂的分析操作，更别提决策支持**。

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h4s85ljhdvj22dc0u0jym.jpg)

而目前我们的存储 - Elasticsearch 是不太符合 OLAP 系统的使用场景的。在 Druid 官网进行了对比  [druid-vs-elasticsearch](https://druid.apache.org/docs/latest/comparisons/druid-vs-elasticsearch.html) ，译文如下：



<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h4s862rjtyj21am0j0dld.jpg" style="zoom:44%;" />

 所以，既然我们是在做 OLAP 的事情，当然要选择 OLAP 的产品，而在 OLAP 领域的存储方案是相对成熟的。

### OLAP分类

先尝试分清 OLAP 的分类。

<img src="https://ask.qcloudimg.com/http-save/yehe-1088682/bfrl9e14yv.png?imageView2/2/w/1620" alt="img" style="zoom:70%;" />

#### 多维OLAP ( MOLAP )

Multi-dimensional OLAP，多维OLAP

![img](https://ask.qcloudimg.com/http-save/yehe-1088682/npdw4tfibt.png?imageView2/2/w/1620)

MOLAP的优点和缺点都来自于其数据预处理 ( pre-processing ) 环节。数据预处理，将原始数据按照指定的计算规则预先做聚合计算，这样避免了查询过程中出现大量的临时计算，提升了查询性能，同时也为很多复杂的计算提供了支持。

但是这样的预聚合处理，需要预先定义维度，会限制后期数据查询的灵活性；如果查询工作涉及新的指标，需要重新增加预处理流程，损失了灵活度，存储成本也很高；同时，这种方式不支持明细数据的查询。

#### 关系型OLAP ( ROLAP )

 Relational OLAP 

![img](https://ask.qcloudimg.com/http-save/yehe-1088682/rbf10a4rfh.png?imageView2/2/w/1620)

#### 混合OLAP

Hybrid OLAP

### 市面上 OLAP 存储方案

而在 OLAP 数仓方案中，分为：

所以，我们对比了市面上的解决方案，想从中选择出适合我们的存储引擎，如下是我们梳理出的关注点。可以查看 [Apache Druid vs. Apache Kylin vs. Apache Pinot vs. ClickHouse vs. InfluxDB](https://db-engines.com/en/system/Apache+Druid%3BApache+Kylin%3BApache+Pinot%3BClickHouse%3BInfluxDB) 查看具体的对比。

![image-20220804112601059](https://tva1.sinaimg.cn/large/e6c9d24ely1h4uklznmylj218o0e2q76.jpg)

以及 [ClickHouse 在有赞的实践之路](https://tech.youzan.com/clickhouse-zai-you-zan-de-shi-jian-zhi-lu/) 的：

![img](https://tva1.sinaimg.cn/large/e6c9d24ely1h4ul98t8mej20zc0hy417.jpg)

以及我们整理出来的:

| 特性/名称  | InfluxDB | Elasticsearch | Kylin | Druid        | ClickHouse   | Persto        | Impala | Pinot | Snowflake |
| ---------- | -------- | :------------ | ----- | ------------ | ------------ | ------------- | ------ | ----- | --------- |
| 分类       |          |               | MOLAP | MOLAP        | ROLAP        | MPP           |        |       |           |
| 实现语言   | Go       | Java          | Java  | Java         | C++          |               |        |       |           |
| 场景       |          | 实时          | 实时  | 实时         | 实时         | 离线          | 离线   |       |           |
| 数据库模型 | 时序     | 搜索引擎      |       | 关系型、时序 | 关系型、时序 |               |        |       |           |
| 社区成熟度 | 中       | 高            |       | 中           | 中           |               |        |       |           |
| 是否开源   | ✅        | ✅             | ✅     | ✅            | ✅            |               |        |       |           |
| 集群模式   | 收费     | ✅             |       | ✅            | ✅            |               |        |       |           |
| 写入并发   |          | 低            |       | 高           | 高           |               |        |       |           |
| 查询速度   |          | 中            |       | 高           | 高           |               |        |       |           |
| **实时性** |          | **中**        |       | **高**       | **中**       |               |        |       |           |
| 支持预聚合 |          | ❌             |       | ✅            | ✅            |               |        |       |           |
| SQL 支持   |          | ❌             |       | ✅            | ✅            | SQL on Hadoop |        |       |           |
| 大批量查询 |          | ❌             |       | ✅            | ✅            |               |        |       |           |
| 多维查询   |          | ❌             |       | 低维度       | 高维度       |               |        |       |           |
| 明细查询   |          | ✅             |       | ❌            | ✅            |               |        |       |           |
| 数据压缩   |          | ❌             |       | ✅            | ✅            |               |        |       |           |
| 数据量级   |          |               |       | PB级别       | PB级别       |               |        |       |           |

综合对比，ClickHouse 相对更加适合。

## 为什么拥抱 ClickHouse ？

原因如下：

### 高频使用场景

首先，我们现阶段的系统，存在两种重要的使用场景。

- 实时统计

  ![image-20220802105736060](https://tva1.sinaimg.cn/large/e6c9d24ely1h4s8jt81dej22920soq8z.jpg)

- 特定时间窗口下的聚合结果

  ![image-20220802105831004](https://tva1.sinaimg.cn/large/e6c9d24ely1h4s8krd8tgj21hf0u0gpw.jpg)

针对这两种方案，我们现在的做法是

- 依靠 Elasticsearch 进行聚合
- 使用 Java 代码进行聚合操作

该两种做法在大数据量涌入的情况下，会有很高的内存性能要求，同时也存在瓶颈。而且需要依靠人工的大量编码，还得承担学习 Elasticsearch 聚合查询的学习成本。

其次，我们在多维度的分析能力上基本缺失，也是待提高的部分。

###  ClickHouse 特性

![image-20220804115647220](https://tva1.sinaimg.cn/large/e6c9d24ely1h4uli01ekgj211v0dpdi1.jpg)

而 ClickHouse 是一个时序性的列式存储数据库，恰恰满足了我们的分析场景需求。

- 更快的查询

  列式存储， SQL 语句查询，这使得我们的在事件窗口内进行指标聚合更加高效。

- 其支持多维度分析能力

  目前我们的系统并没有涉及到多维度分析，但 OLAP 系统始终逃不过这个特性。而如果我们是用 Elasticsearch 就需要冗余每一个分析维度来实现多维度的支持。

## 总结

**综上所述，选择 ClickHouse 对将来的扩展性是有极大的帮助**，遂提出以上请求供评估。

即使以上方案都不合适，**选择一个合适的 OLAP 存储引擎替换掉 Elasticsearch ，让后期迭代走在正确的道路上，势在必行。**

也希望大家能够帮着集思广益，多多益善。

相关对 Druid 和 ClickHouse 的实际上手，已经在验证过程中。

## 参考

[什么是OLAP？主流八大开源OLAP技术架构对比](https://segmentfault.com/a/1190000040428093)

[ClickHouse 的实践之路](https://xie.infoq.cn/article/ebfe0a6b0d6bdbbb4eae642ff)

[ClickHouse 在有赞的实践之路](https://tech.youzan.com/clickhouse-zai-you-zan-de-shi-jian-zhi-lu/)

[各类数据库使用场景比较](https://blog.csdn.net/SECURE2/article/details/104531545/)

[Kylin、Druid、ClickHouse 核心技术对比](https://www.infoq.cn/article/ufwbpmcf9bnxn38zkaxo)

[Apache Druid vs. ClickHouse](https://www.modb.pro/db/323274)

[Apach Druid与Clickhouse对比分析](https://www.modb.pro/db/433160)

[OLAP演进实战，Druid对比ClickHouse输在哪里？](https://dbaplus.cn/news-73-3649-1.html)

[多款OLAP选型对比，不上ClickHouse就糟蹋了](https://www.sohu.com/a/504824543_411876)

[字节-ES和Druid搞不定的实时场景，我们用ClickHouse摆平了](https://toutiao.io/posts/fcp7dvf/preview)

[聊聊另外一个Druid（很全）](https://www.modb.pro/db/150271)

[适用于大数据的开源OLAP系统的比较：Druid，ClickHouse和Pinot](https://www.cnblogs.com/029zz010buct/p/12674287.html)

[看完了这篇实时数仓建设，才发现以前的都白看了（内有美团案例）](https://www.51cto.com/article/617634.html)

[Apache Flink OLAP引擎性能优化及应用](https://cloud.tencent.com/developer/article/1798011)

[OLAP的简单总结](https://zhuanlan.zhihu.com/p/361154368)