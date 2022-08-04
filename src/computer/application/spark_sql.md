# Spark-SQL 查询 ES 大数据量的问题

开发者在[How to scroll through an Elasticsearch index using elasticsearch-spark?](https://discuss.elastic.co/t/how-to-scroll-through-an-elasticsearch-index-using-elasticsearch-spark/144618) 回复的原文是：

```
ES-Hadoop uses the scroll endpoint to collect all the data for processing within Spark. ES-Hadoop performs the multiple scroll requests under the hood on its own, requesting the next scroll entry after the data in the current scroll response is fully consumed. I'm not sure I understand what you're looking for in terms of advancing the scroll request on your own. Could you elaborate on your use case?
```

所以大数据量下，`ES-Hadoop` 是会自己启动 scroll 去查询所有的数据的。所以完全不用担心大数据量的问题。





```
   
```