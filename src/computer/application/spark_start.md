# Spark-SQL 查询 ES 大数据量的问题

开发者在[How to scroll through an Elasticsearch index using elasticsearch-spark?](https://discuss.elastic.co/t/how-to-scroll-through-an-elasticsearch-index-using-elasticsearch-spark/144618) 回复的原文是：

```
ES-Hadoop uses the scroll endpoint to collect all the data for processing within Spark. ES-Hadoop performs the multiple scroll requests under the hood on its own, requesting the next scroll entry after the data in the current scroll response is fully consumed. I'm not sure I understand what you're looking for in terms of advancing the scroll request on your own. Could you elaborate on your use case?
```

所以大数据量下，`ES-Hadoop` 是会自己启动 scroll 去查询所有的数据的。所以完全不用担心大数据量的问题。



## 异常

当遇到 kafka 无法存的问题时，去 google 搜索 [java maven Failed to find data source: kafka Structured Streaming + Kafka Integration Guide](https://www.google.com/search?q=java+maven+Failed+to+find+data+source%3A+kafka+Structured+Streaming+%2B+Kafka+Integration+Guide&newwindow=1&sxsrf=ALiCzsaf1uDlMPjK0JZ4PXhmlMazIRbKmg%3A1660114229270&ei=NVXzYtKMEMj8hwOf7JLgCg&ved=0ahUKEwiS-6-317v5AhVI_mEKHR-2BKwQ4dUDCA4&uact=5&oq=java+maven+Failed+to+find+data+source%3A+kafka+Structured+Streaming+%2B+Kafka+Integration+Guide&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBQg8EgE1SgQIQRgASgQIRhgAUIQIWJgqYKAtaAVwAXgBgAHYAogBrRaSAQgwLjEwLjQuMZgBAKABAcgBCMABAQ&sclient=gws-wiz) 得到了[[Why does Spark application fail with “ClassNotFoundException: Failed to find data source: kafka” as uber-jar with sbt assembly?]https://intellipaat.com/community/16747/why-does-spark-application-fail-with-classnotfoundexception-failed-to-find-data-source-kafka-as-uber-jar-with-sbt-assembly](https://intellipaat.com/community/16747/why-does-spark-application-fail-with-classnotfoundexception-failed-to-find-data-source-kafka-as-uber-jar-with-sbt-assembly)

最终通过指定 `.format("org.apache.spark.sql.kafka010.KafkaSourceProvider")` 解决了

```
            mergedAll
                    // .toDF()
                    .selectExpr("CAST(uid AS STRING) AS key", "to_json(struct(*)) AS value")
                    // .selectExpr("CAST(key AS STRING)", "CAST(value) AS STRING")
                    .write()
                    // .format("kafka")
                    .format("org.apache.spark.sql.kafka010.KafkaSourceProvider")
                    .option("kafka.bootstrap.servers", kafkaAddresses)
                    .option("topic", topicMetric)
                    .save();
```



## 参考

[看了这篇博客，你还敢说不会Structured Streaming?](https://cloud.tencent.com/developer/article/1780508)

[[Issue in Spark + kafka Integration](https://stackoverflow.com/questions/58877005/issue-in-spark-kafka-integration)](https://stackoverflow.com/questions/58877005/issue-in-spark-kafka-integration)

