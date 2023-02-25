---
time: 2022-8-4



---
# 记一次线上调优

- 优化代码
- 先后观察线上日志
- 看线上 OOM 日志
- 看 ES 相关 bulk 配置，分片存储

## es 一次性存储多少？

和 **max_content_length** 相关（默认为 100M）

[**es - max_content_length**](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-network.html)

生成 hprof

```
java -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/data/tmp/heapdump.hprof -jar MyApp.jar
```

服务完整运行指令

```
java -Dname_monitor=uc-axzt-bj2b-neu-op-zip-prod01:clientlogfilemgr-dataserver-1.0-SNAPSHOT.jar:2022-01-19:bin:work:/home/work/clientlogfilemgr:/home/work/clientlogfilemgr:/home/work/clientlogfilemgr/logs/ -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=10053 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=10.10.24.56 -Xmx1500m -Xms1500m -XX:PermSize=8M -XX:MaxPermSize=128M -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -verbose:gc -Xloggc:logs/gc.log -XX:GCLogFileSize=800M -XX:-OmitStackTraceInFastThrow -XX:+HeapDumpOnOutOfMemoryError -Dio.netty.leakDetectionLevel=advanced -Dio.netty.noPreferDirect=true -cp .:clientlogfilemgr-dataserver-1.0-SNAPSHOT.jar:lib/:lib/AccountMgr-backstagemgr-api-1.0.9-SNAPSHOT.jar:lib/aggs-matrix-stats-client-7.9.3.jar:lib/attoparser-2.0.5.RELEASE.jar:lib/audience-annotations-0.5.0.jar:lib/bson-4.1.2.jar:lib/byte-buddy-1.10.22.jar:lib/cache-api-1.1.1.jar:lib/commons-codec-1.9.jar:lib/commons-collections4-4.4.jar:lib/commons-io-2.6.jar:lib/commons-lang-2.6.jar:lib/commons-lang3-3.9.jar:lib/commons-math3-3.6.1.jar:lib/commons-pool2-2.9.0.jar:lib/compiler-0.9.6.jar:lib/curator-client-4.0.1.jar:lib/curator-framework-4.0.1.jar:lib/curator-recipes-4.0.1.jar:lib/curator-x-discovery-4.0.1.jar:lib/dataserver-api-1.0.86.jar:lib/dubbo-2.7.4.1.jar:lib/dubbo-spring-boot-autoconfigure-2.7.4.1.jar:lib/dubbo-spring-boot-autoconfigure-compatible-2.7.4.1.jar:lib/dubbo-spring-boot-starter-2.7.4.1.jar:lib/ecj-3.18.0.jar:lib/elasticsearch-7.9.3.jar:lib/elasticsearch-cli-7.9.3.jar:lib/elasticsearch-core-7.9.3.jar:lib/elasticsearch-geo-7.9.3.jar:lib/elasticsearch-rest-client-7.9.3.jar:lib/elasticsearch-rest-high-level-client-7.9.3.jar:lib/elasticsearch-secure-sm-7.9.3.jar:lib/elasticsearch-x-content-7.9.3.jar:lib/fastjson-1.2.56.jar:lib/fst-2.57.jar:lib/gson-2.8.6.jar:lib/guava-20.0.jar:lib/HdrHistogram-2.1.8.jar:lib/hppc-0.8.1.jar:lib/httpasyncclient-4.1.4.jar:lib/httpclient-4.5.13.jar:lib/httpcore-4.4.14.jar:lib/httpcore-nio-4.4.14.jar:lib/jackson-annotations-2.11.4.jar:lib/jackson-core-2.10.0.jar:lib/jackson-core-asl-1.9.13.jar:lib/jackson-databind-2.10.0.jar:lib/jackson-dataformat-cbor-2.11.4.jar:lib/jackson-dataformat-smile-2.11.4.jar:lib/jackson-dataformat-yaml-2.11.4.jar:lib/jackson-datatype-jdk8-2.11.4.jar:lib/jackson-datatype-jsr310-2.11.4.jar:lib/jackson-mapper-asl-1.9.13.jar:lib/jackson-module-parameter-names-2.11.4.jar:lib/jakarta.activation-1.2.2.jar:lib/jakarta.annotation-api-1.3.5.jar:lib/jakarta.el-3.0.3.jar:lib/jakarta.mail-1.6.7.jar:lib/javassist-3.20.0-GA.jar:lib/javax.servlet-api-4.0.1.jar:lib/jedis-3.3.0.jar:lib/jline-0.9.94.jar:lib/jna-5.5.0.jar:lib/joda-time-2.10.4.jar:lib/jodd-bean-5.0.13.jar:lib/jodd-core-5.0.13.jar:lib/jopt-simple-5.0.2.jar:lib/jstl-1.2.jar:lib/jul-to-slf4j-1.7.30.jar:lib/kafka-clients-2.6.0.jar:lib/lang-mustache-client-7.9.3.jar:lib/LatencyUtils-2.0.3.jar:lib/lettuce-core-6.0.4.RELEASE.jar:lib/log4j-1.2.17.jar:lib/log4j-api-2.13.3.jar:lib/log4j-to-slf4j-2.13.3.jar:lib/logback-classic-1.2.3.jar:lib/logback-core-1.2.3.jar:lib/lombok-1.18.2.jar:lib/lucene-analyzers-common-8.6.2.jar:lib/lucene-backward-codecs-8.6.2.jar:lib/lucene-core-8.6.2.jar:lib/lucene-grouping-8.6.2.jar:lib/lucene-highlighter-8.6.2.jar:lib/lucene-join-8.6.2.jar:lib/lucene-memory-8.6.2.jar:lib/lucene-misc-8.6.2.jar:lib/lucene-queries-8.6.2.jar:lib/lucene-queryparser-8.6.2.jar:lib/lucene-sandbox-8.6.2.jar:lib/lucene-spatial3d-8.6.2.jar:lib/lucene-spatial-extras-8.6.2.jar:lib/lucene-suggest-8.6.2.jar:lib/lz4-java-1.7.1.jar:lib/mapper-extras-client-7.9.3.jar:lib/mongodb-driver-core-4.1.2.jar:lib/mongodb-driver-sync-4.1.2.jar:lib/netty-all-4.1.51.Final.jar:lib/netty-buffer-4.1.63.Final.jar:lib/netty-codec-4.1.63.Final.jar:lib/netty-codec-dns-4.1.63.Final.jar:lib/netty-codec-http-4.1.63.Final.jar:lib/netty-common-4.1.63.Final.jar:lib/netty-handler-4.1.63.Final.jar:lib/netty-resolver-4.1.63.Final.jar:lib/netty-resolver-dns-4.1.63.Final.jar:lib/netty-transport-4.1.63.Final.jar:lib/objenesis-3.1.jar:lib/parent-join-client-7.9.3.jar:lib/poi-4.1.2.jar:lib/rank-eval-client-7.9.3.jar:lib/reactive-streams-1.0.3.jar:lib/reactor-core-3.4.5.jar:lib/redisson-3.11.4.jar:lib/redisson-spring-boot-starter-3.11.4.jar:lib/redisson-spring-data-21-3.11.4.jar:lib/rxjava-2.2.21.jar:lib/sdk-common-3.1.12.RELEASE.jar:lib/slf4j-api-1.7.30.jar:lib/snakeyaml-1.27.jar:lib/snappy-java-1.1.7.3.jar:lib/SparseBitSet-1.2.jar:lib/spring-aop-5.3.6.jar:lib/spring-beans-5.3.6.jar:lib/spring-boot-2.4.5.jar:lib/spring-boot-autoconfigure-2.4.5.jar:lib/spring-boot-starter-2.4.5.jar:lib/spring-boot-starter-data-elasticsearch-2.4.5.jar:lib/spring-boot-starter-data-mongodb-2.4.5.jar:lib/spring-boot-starter-data-redis-2.4.5.jar:lib/spring-boot-starter-json-2.4.5.jar:lib/spring-boot-starter-logging-2.4.5.jar:lib/spring-boot-starter-mail-2.4.5.jar:lib/spring-boot-starter-thymeleaf-2.4.5.jar:lib/spring-boot-starter-tomcat-2.4.5.jar:lib/spring-boot-starter-web-2.4.5.jar:lib/spring-context-5.3.6.jar:lib/spring-context-support-5.3.6.jar:lib/spring-core-5.3.6.jar:lib/spring-data-commons-2.4.8.jar:lib/spring-data-elasticsearch-4.1.8.jar:lib/spring-data-keyvalue-2.4.8.jar:lib/spring-data-mongodb-3.1.8.jar:lib/spring-data-redis-2.4.8.jar:lib/spring-expression-5.3.6.jar:lib/spring-jcl-5.3.6.jar:lib/spring-kafka-2.6.7.jar:lib/spring-messaging-5.3.6.jar:lib/spring-oxm-5.3.6.jar:lib/spring-retry-1.3.1.jar:lib/spring-tx-5.3.6.jar:lib/spring-web-5.3.6.jar:lib/spring-webmvc-5.3.6.jar:lib/t-digest-3.2.jar:lib/thymeleaf-3.0.12.RELEASE.jar:lib/thymeleaf-extras-java8time-3.0.4.RELEASE.jar:lib/thymeleaf-spring5-3.0.12.RELEASE.jar:lib/tomcat-embed-core-9.0.45.jar:lib/tomcat-embed-el-9.0.45.jar:lib/tomcat-embed-jasper-9.0.45.jar:lib/tomcat-embed-websocket-9.0.45.jar:lib/transport-netty4-client-7.9.3.jar:lib/unbescape-1.1.6.RELEASE.jar:lib/zookeeper-3.4.13.jar:lib/zstd-jni-1.4.4-7.jar ai.neuvision.sdk.logserver.DataServerApplication -jar clientlogfilemgr-dataserver-1.0-SNAPSHOT.jar
```





## 参考

[using_and_sizing_bulk_requests](https://www.elastic.co/guide/en/elasticsearch/guide/current/indexing-performance.html#_using_and_sizing_bulk_requests)

[Why Elastic search bulk operation failing for large size of data](https://stackoverflow.com/questions/54199437/why-elastic-search-bulk-operation-failing-for-large-size-of-data)

[ Allow maximum bulk request size to be configured](https://gitlab.com/gitlab-org/gitlab/-/issues/12375)