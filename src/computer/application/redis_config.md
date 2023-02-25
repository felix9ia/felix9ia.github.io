---
time: 2021-10-25




---
### Redis 配置解释

如果连接数超过了minIdle，那么继续建立连接，但是不超时maxIdle

### maxActive

连接池的最大数据库连接数。设为0表示无限制。

一般把maxActive设置成可能的并发量就行了

### maxIdle



### minIdle

至少需要保持的空闲连接数



## RedisTemplate 反序列化的问题

反序列化的过程中会模糊掉泛型。



## 参考

[Redis之minIdle参数讲解](https://www.jianshu.com/p/dd4a5bb52f49)

[小家Spring Redis序列化、RedisTemplate序列化方式大解读，介绍Genericjackson2jsonredisserializer序列化器的坑](https://blog.51cto.com/u_3631118/3121370)
