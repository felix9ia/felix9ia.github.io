# 大数据入门



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



## 入门

（1）HDFS集群：负责海量数据的存储，集群中的角色主要有 NameNode / DataNode/SecondaryNameNode。

（2）YARN集群：负责海量数据运算时的资源调度，集群中的角色主要有 ResourceManager /NodeManager

（3）MapReduce：它其实是一个应用程序开发包。

![](https://pic1.zhimg.com/80/v2-2fbb6391206db40675afa8617806a8be_1440w.jpg?source=1940ef5c)

![](https://pic4.zhimg.com/80/v2-d710ed622784fbdf7de7c4933cc076f7_1440w.jpg)

## Spark

[官网例子](https://spark.apache.org/examples.html)

## DSS

如果 8901 端口总是报错，接口报`err_incomplete_chunked_encoding`，是因为nginx需要写入缓存没有权限，需要执行` sudo chown -R hadoop:hadoop /var/lib/nginx`

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