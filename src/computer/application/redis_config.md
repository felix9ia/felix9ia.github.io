### Redis 配置解释

如果连接数超过了minIdle，那么继续建立连接，但是不超时maxIdle

### maxActive

连接池的最大数据库连接数。设为0表示无限制。

一般把maxActive设置成可能的并发量就行了

### maxIdle



### minIdle

至少需要保持的空闲连接数







## 参考

[Redis之minIdle参数讲解](https://www.jianshu.com/p/dd4a5bb52f49)