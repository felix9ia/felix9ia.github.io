(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{523:function(t,v,_){"use strict";_.r(v);var e=_(1),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"质量实时数仓从-elasticsearch-到-clickhouse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#质量实时数仓从-elasticsearch-到-clickhouse"}},[t._v("#")]),t._v(" 质量实时数仓从 Elasticsearch 到 ClickHouse")]),t._v(" "),_("p",[t._v("Elasticsearch 其实不太满足我们 OLAP 的业务场景了，所以想趁着重构的机会，将存储引擎替换掉 ，目前备选有 Druid 和 ClickHouse，但更倾向于 ClickHouse，目前正在实际使用对比评估中。")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://clickhouse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ClickHouse "),_("OutboundLink")],1),t._v(" 更加符合我们实时查询和范围聚合两种高频使用场景，且能够满足后期的多维度分析场景，具备而更好的扩展性。以下是对存储引擎切换方案的梳理。")]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("质量重构的理想目标是，在提供可以更加复杂的分析场景下，能更提前预警与提供决策。向一个更加智能的 OLAP 系统进行迭代。"),_("strong",[t._v("而存储的选择是这一切的开始与基石，需要谨慎选择。")])]),t._v(" "),_("h3",{attrs:{id:"选型-clickhouse-的收益"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#选型-clickhouse-的收益"}},[t._v("#")]),t._v(" 选型 ClickHouse 的收益")]),t._v(" "),_("p",[t._v("针对我们目前系统的使用场景。")]),t._v(" "),_("p",[t._v("一旦我们选择调整到 ClickHouse，可以收获：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("低延迟的实时大数据存储与查询")]),t._v(" "),_("p",[t._v("Elasticsearch 在性能上要求更高。")])]),t._v(" "),_("li",[_("p",[t._v("更快的聚合")]),t._v(" "),_("p",[t._v("这在 Elasticsearch 依赖更多的内存，查询条件有门槛比较困难且废人工。")]),t._v(" "),_("p",[t._v("而 ClickHouse 为列式存储并提供物化视图，  SQL 查询更加容易上手")])]),t._v(" "),_("li",[_("p",[t._v("更复杂的多维度分析")]),t._v(" "),_("p",[t._v("Elasticsearch 基无能为力，或者需要大量冗余来实现。而列式存储的 ClickHouse 是天生的优势。")])])]),t._v(" "),_("h3",{attrs:{id:"选型-clickhouse-的代价"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#选型-clickhouse-的代价"}},[t._v("#")]),t._v(" 选型 ClickHouse 的代价")]),t._v(" "),_("p",[t._v("当然选择新服务一定会带来一定的代价：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("需要搭建 ClickHouse 的集群")]),t._v(" "),_("p",[t._v("但选择任何非 Elasticsearch 的存储都需要搭建，逃不过.")])]),t._v(" "),_("li",[_("p",[t._v("学习 ClickHouse 的使用")]),t._v(" "),_("p",[t._v("本身是类 SQL 的，所以学习门槛较低，代价不高")])])]),t._v(" "),_("p",[_("strong",[t._v("从未来的收益和代价来看，ClickHouse 值得")]),t._v("。以下是对此次存储选型方案的调研与梳理。")]),t._v(" "),_("h2",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),_("p",[t._v("如果把重构分为以下三个阶段的话：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("数据分析")]),t._v(" "),_("p",[t._v("Spark 只是一个分析工具，并没有提供存储和检索的相应解决方案")])]),t._v(" "),_("li",[_("p",[t._v("数据存储")])]),t._v(" "),_("li",[_("p",[t._v("数据查询")])])]),t._v(" "),_("p",[_("strong",[t._v("现阶段，使用 Spark 进行第 1 阶段 -- 数据分析，基本度过了阵痛期，后面就是完善细节。")])]),t._v(" "),_("p",[t._v("但是对于存储和查询流程的实现还是有些许迟疑。")]),t._v(" "),_("p",[t._v("**如果我们路径依赖的继续选用 Elasticsearch 进行存储，会面临系统后续迭代的种种分析挑战，甚至会导致再一轮的重构。**具体分析如下：")]),t._v(" "),_("h3",{attrs:{id:"我们在做的是-olap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#我们在做的是-olap"}},[t._v("#")]),t._v(" 我们在做的是 OLAP")]),t._v(" "),_("p",[t._v("我们的质量分析系统"),_("strong",[t._v("是一个：")])]),t._v(" "),_("p",[_("strong",[t._v("联机分析处理 OLAP（On-Line Analytical Processing）, OLAP是数据仓库系统的主要应用，支持复杂的分析操作，侧重决策支持，并且提供直观易懂的查询结果。")])]),t._v(" "),_("p",[_("s",[_("strong",[t._v("而不是：")])])]),t._v(" "),_("p",[_("s",[t._v("联机事务处理OLTP（on-line transaction processing），OLTP是传统的关系型数据库的主要应用，主要是基本的、日常的事务处理，例如银行交易。")])]),t._v(" "),_("p",[t._v("在我们系统是 OLAP 的大前提下，当前的质量只是做到了数据的呈现，"),_("strong",[t._v("并没有支持复杂的分析操作，更别提决策支持")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h4s85ljhdvj22dc0u0jym.jpg",alt:""}})]),t._v(" "),_("p",[t._v("而目前我们的存储 - Elasticsearch 是不太符合 OLAP 系统的使用场景的。在 Druid 官网进行了对比  "),_("a",{attrs:{href:"https://druid.apache.org/docs/latest/comparisons/druid-vs-elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("druid-vs-elasticsearch"),_("OutboundLink")],1),t._v(" ，译文如下：")]),t._v(" "),_("img",{staticStyle:{zoom:"44%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h4s862rjtyj21am0j0dld.jpg"}}),t._v(" "),_("p",[t._v("所以，既然我们是在做 OLAP 的事情，当然要选择 OLAP 的产品，而在 OLAP 领域的存储方案是相对成熟的。")]),t._v(" "),_("h3",{attrs:{id:"olap分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#olap分类"}},[t._v("#")]),t._v(" OLAP分类")]),t._v(" "),_("p",[t._v("先尝试分清 OLAP 的分类。")]),t._v(" "),_("img",{staticStyle:{zoom:"70%"},attrs:{src:"https://ask.qcloudimg.com/http-save/yehe-1088682/bfrl9e14yv.png?imageView2/2/w/1620",alt:"img"}}),t._v(" "),_("h4",{attrs:{id:"多维olap-molap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多维olap-molap"}},[t._v("#")]),t._v(" 多维OLAP ( MOLAP )")]),t._v(" "),_("p",[t._v("Multi-dimensional OLAP，多维OLAP")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/yehe-1088682/npdw4tfibt.png?imageView2/2/w/1620",alt:"img"}})]),t._v(" "),_("p",[t._v("MOLAP的优点和缺点都来自于其数据预处理 ( pre-processing ) 环节。数据预处理，将原始数据按照指定的计算规则预先做聚合计算，这样避免了查询过程中出现大量的临时计算，提升了查询性能，同时也为很多复杂的计算提供了支持。")]),t._v(" "),_("p",[t._v("但是这样的预聚合处理，需要预先定义维度，会限制后期数据查询的灵活性；如果查询工作涉及新的指标，需要重新增加预处理流程，损失了灵活度，存储成本也很高；同时，这种方式不支持明细数据的查询。")]),t._v(" "),_("h4",{attrs:{id:"关系型olap-rolap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关系型olap-rolap"}},[t._v("#")]),t._v(" 关系型OLAP ( ROLAP )")]),t._v(" "),_("p",[t._v("Relational OLAP")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/yehe-1088682/rbf10a4rfh.png?imageView2/2/w/1620",alt:"img"}})]),t._v(" "),_("h4",{attrs:{id:"混合olap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#混合olap"}},[t._v("#")]),t._v(" 混合OLAP")]),t._v(" "),_("p",[t._v("Hybrid OLAP")]),t._v(" "),_("h3",{attrs:{id:"市面上-olap-存储方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#市面上-olap-存储方案"}},[t._v("#")]),t._v(" 市面上 OLAP 存储方案")]),t._v(" "),_("p",[t._v("而在 OLAP 数仓方案中，分为：")]),t._v(" "),_("p",[t._v("所以，我们对比了市面上的解决方案，想从中选择出适合我们的存储引擎，如下是我们梳理出的关注点。可以查看 "),_("a",{attrs:{href:"https://db-engines.com/en/system/Apache+Druid%3BApache+Kylin%3BApache+Pinot%3BClickHouse%3BInfluxDB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Druid vs. Apache Kylin vs. Apache Pinot vs. ClickHouse vs. InfluxDB"),_("OutboundLink")],1),t._v(" 查看具体的对比。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h4uklznmylj218o0e2q76.jpg",alt:"image-20220804112601059"}})]),t._v(" "),_("p",[t._v("以及 "),_("a",{attrs:{href:"https://tech.youzan.com/clickhouse-zai-you-zan-de-shi-jian-zhi-lu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ClickHouse 在有赞的实践之路"),_("OutboundLink")],1),t._v(" 的：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h4ul98t8mej20zc0hy417.jpg",alt:"img"}})]),t._v(" "),_("p",[t._v("以及我们整理出来的:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("特性/名称")]),t._v(" "),_("th",[t._v("InfluxDB")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("Elasticsearch")]),t._v(" "),_("th",[t._v("Kylin")]),t._v(" "),_("th",[t._v("Druid")]),t._v(" "),_("th",[t._v("ClickHouse")]),t._v(" "),_("th",[t._v("Persto")]),t._v(" "),_("th",[t._v("Impala")]),t._v(" "),_("th",[t._v("Pinot")]),t._v(" "),_("th",[t._v("Snowflake")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("分类")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",[t._v("MOLAP")]),t._v(" "),_("td",[t._v("MOLAP")]),t._v(" "),_("td",[t._v("ROLAP")]),t._v(" "),_("td",[t._v("MPP")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("实现语言")]),t._v(" "),_("td",[t._v("Go")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),_("td",[t._v("Java")]),t._v(" "),_("td",[t._v("Java")]),t._v(" "),_("td",[t._v("C++")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("场景")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("实时")]),t._v(" "),_("td",[t._v("实时")]),t._v(" "),_("td",[t._v("实时")]),t._v(" "),_("td",[t._v("实时")]),t._v(" "),_("td",[t._v("离线")]),t._v(" "),_("td",[t._v("离线")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("数据库模型")]),t._v(" "),_("td",[t._v("时序")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("搜索引擎")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("关系型、时序")]),t._v(" "),_("td",[t._v("关系型、时序")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("社区成熟度")]),t._v(" "),_("td",[t._v("中")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("中")]),t._v(" "),_("td",[t._v("中")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("是否开源")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("集群模式")]),t._v(" "),_("td",[t._v("收费")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("写入并发")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("低")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("高")]),t._v(" "),_("td",[t._v("高")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("查询速度")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("中")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("高")]),t._v(" "),_("td",[t._v("高")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("实时性")])]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("中")])]),t._v(" "),_("td"),t._v(" "),_("td",[_("strong",[t._v("高")])]),t._v(" "),_("td",[_("strong",[t._v("中")])]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("支持预聚合")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("❌")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("SQL 支持")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("❌")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("SQL on Hadoop")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("大批量查询")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("❌")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("多维查询")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("❌")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("低维度")]),t._v(" "),_("td",[t._v("高维度")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("明细查询")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("数据压缩")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("❌")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("数据量级")]),t._v(" "),_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td"),t._v(" "),_("td",[t._v("PB级别")]),t._v(" "),_("td",[t._v("PB级别")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("p",[t._v("综合对比，ClickHouse 相对更加适合。")]),t._v(" "),_("h2",{attrs:{id:"为什么拥抱-clickhouse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么拥抱-clickhouse"}},[t._v("#")]),t._v(" 为什么拥抱 ClickHouse ？")]),t._v(" "),_("p",[t._v("原因如下：")]),t._v(" "),_("h3",{attrs:{id:"高频使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高频使用场景"}},[t._v("#")]),t._v(" 高频使用场景")]),t._v(" "),_("p",[t._v("首先，我们现阶段的系统，存在两种重要的使用场景。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("实时统计")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h4s8jt81dej22920soq8z.jpg",alt:"image-20220802105736060"}})])]),t._v(" "),_("li",[_("p",[t._v("特定时间窗口下的聚合结果")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h4s8krd8tgj21hf0u0gpw.jpg",alt:"image-20220802105831004"}})])])]),t._v(" "),_("p",[t._v("针对这两种方案，我们现在的做法是")]),t._v(" "),_("ul",[_("li",[t._v("依靠 Elasticsearch 进行聚合")]),t._v(" "),_("li",[t._v("使用 Java 代码进行聚合操作")])]),t._v(" "),_("p",[t._v("该两种做法在大数据量涌入的情况下，会有很高的内存性能要求，同时也存在瓶颈。而且需要依靠人工的大量编码，还得承担学习 Elasticsearch 聚合查询的学习成本。")]),t._v(" "),_("p",[t._v("其次，我们在多维度的分析能力上基本缺失，也是待提高的部分。")]),t._v(" "),_("h3",{attrs:{id:"clickhouse-特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse-特性"}},[t._v("#")]),t._v(" ClickHouse 特性")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h4uli01ekgj211v0dpdi1.jpg",alt:"image-20220804115647220"}})]),t._v(" "),_("p",[t._v("而 ClickHouse 是一个时序性的列式存储数据库，恰恰满足了我们的分析场景需求。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("更快的查询")]),t._v(" "),_("p",[t._v("列式存储， SQL 语句查询，这使得我们的在事件窗口内进行指标聚合更加高效。")])]),t._v(" "),_("li",[_("p",[t._v("其支持多维度分析能力")]),t._v(" "),_("p",[t._v("目前我们的系统并没有涉及到多维度分析，但 OLAP 系统始终逃不过这个特性。而如果我们是用 Elasticsearch 就需要冗余每一个分析维度来实现多维度的支持。")])])]),t._v(" "),_("h2",{attrs:{id:"总结-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[_("strong",[t._v("综上所述，选择 ClickHouse 对将来的扩展性是有极大的帮助")]),t._v("，遂提出以上请求供评估。")]),t._v(" "),_("p",[t._v("即使以上方案都不合适，"),_("strong",[t._v("选择一个合适的 OLAP 存储引擎替换掉 Elasticsearch ，让后期迭代走在正确的道路上，势在必行。")])]),t._v(" "),_("p",[t._v("也希望大家能够帮着集思广益，多多益善。")]),t._v(" "),_("p",[t._v("相关对 Druid 和 ClickHouse 的实际上手，已经在验证过程中。")]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://segmentfault.com/a/1190000040428093",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是OLAP？主流八大开源OLAP技术架构对比"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://xie.infoq.cn/article/ebfe0a6b0d6bdbbb4eae642ff",target:"_blank",rel:"noopener noreferrer"}},[t._v("ClickHouse 的实践之路"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://tech.youzan.com/clickhouse-zai-you-zan-de-shi-jian-zhi-lu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ClickHouse 在有赞的实践之路"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/SECURE2/article/details/104531545/",target:"_blank",rel:"noopener noreferrer"}},[t._v("各类数据库使用场景比较"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.infoq.cn/article/ufwbpmcf9bnxn38zkaxo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kylin、Druid、ClickHouse 核心技术对比"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.modb.pro/db/323274",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Druid vs. ClickHouse"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.modb.pro/db/433160",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apach Druid与Clickhouse对比分析"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://dbaplus.cn/news-73-3649-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OLAP演进实战，Druid对比ClickHouse输在哪里？"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.sohu.com/a/504824543_411876",target:"_blank",rel:"noopener noreferrer"}},[t._v("多款OLAP选型对比，不上ClickHouse就糟蹋了"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://toutiao.io/posts/fcp7dvf/preview",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节-ES和Druid搞不定的实时场景，我们用ClickHouse摆平了"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.modb.pro/db/150271",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊另外一个Druid（很全）"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/029zz010buct/p/12674287.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("适用于大数据的开源OLAP系统的比较：Druid，ClickHouse和Pinot"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.51cto.com/article/617634.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("看完了这篇实时数仓建设，才发现以前的都白看了（内有美团案例）"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1798011",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Flink OLAP引擎性能优化及应用"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/361154368",target:"_blank",rel:"noopener noreferrer"}},[t._v("OLAP的简单总结"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);