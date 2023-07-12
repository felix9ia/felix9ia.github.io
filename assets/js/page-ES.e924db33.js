(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{521:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es"}},[e._v("#")]),e._v(" ES")]),e._v(" "),a("p",[e._v("记录")]),e._v(" "),a("h2",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[e._v("#")]),e._v(" Java")]),e._v(" "),a("p",[e._v("可以参考 "),a("a",{attrs:{href:"https://es.quanke.name/aggregations/metrics-aggregations.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch Java 手册"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"聚合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[e._v("#")]),e._v(" 聚合")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("interval(时间间隔)的可用表达式：\n\nyear（1y）年\nquarter（1q）季度\nmonth（1M）月份\nweek（1w）星期\nday（1d）天\nhour（1h）小时\nminute（1m）分钟\nsecond（1s）秒\n链接：https://www.jianshu.com/p/af9afbd1a722\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("间隔有3种，分别为calendar_interval，fixed_interval,interval\ncalendar_interval: 与日历相关的间隔，因此按照月份的话会存在不同月份天数不同，其单位只能为单倍的时间单位,立即ms，s，m，d，M，q，y等；\nfixed_interval: 做为对照，通常是多倍的时间单位，如1m，2h，3d等，由于是固定的间隔，而月年等单位天数不是固定的，因此不可以使用，即fixed模式最大的单位为d；\ninterval: 容易造成歧义，后续将会被弃用，此处不解释；\n————————————————\n版权声明：本文为CSDN博主「昕光xg」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/u011127242/article/details/108813516\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("各种聚合：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/shenlei-blog/p/13931702.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticSearch 的Bucket Aggregation 桶聚合(包含javaApi)"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/tianshishangxin1/article/details/106497519",target:"_blank",rel:"noopener noreferrer"}},[e._v("elasticsearch date_histogram min_doc_count extended_bounds 使用"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("如何创建索引模板")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("boolean putTemplate(Class<T> entityClass, String templateName, String... indexPatterns) {\n    IndexOperations ops = elasticsearchRestTemplate.indexOps(entityClass);\n    PutTemplateRequest request = PutTemplateRequest.builder(templateName, indexPatterns)\n            .withSettings(Document.from(ops.createSettings()))\n            .withMappings(Document.from(ops.createMapping()))\n            .build();\n    return ops.putTemplate(request);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.infoq.cn/article/ekygoihkqifj4kdgso6a",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES 的跨索引查询有多便利？对比下分库分表、分片更直观"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("https://blog.csdn.net/u011127242/article/details/108813516")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/af9afbd1a722",target:"_blank",rel:"noopener noreferrer"}},[e._v("es date_histogram"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/tianshishangxin1/article/details/106497519",target:"_blank",rel:"noopener noreferrer"}},[e._v("elasticsearch date_histogram min_doc_count extended_bounds 使用"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/luxiaoxun/p/6826211.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL to Java code for Elasticsearch"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("https://github.com/NLPchina/elasticsearch-sql")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.dongwm.com/post/elasticsearch-terms-agg-is-not-accurate/",target:"_blank",rel:"noopener noreferrer"}},[e._v("用Elasticsearch做Terms聚合计算数据不准的问题"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/chuantanyan5605/article/details/101014280",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES嵌套对象和父子文档"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_42200163/article/details/113704087",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES嵌套（Nested）文档使用"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/candlia/p/11920034.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES aggregation详解"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000022025890",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES系列之原来ES的聚合统计不准确啊"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://h2cone.github.io/post/2021/07/26/elasticsearch_rest_template_pitfall/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticsearchRestTemplate 的一些坑"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/qdhxhz/p/11461174.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch(5) --- 基本命令(集群相关命令、索引CRUD命令、文档CRUD命令)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);