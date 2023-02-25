---
time: 2022-9-20



---
# Druid 部署

![img](https://img-blog.csdnimg.cn/20200330134155803.png)



把 [仓库-Docker](https://github.com/apache/druid/tree/master/distribution/docker) 里的 [docker-compose.yml](https://github.com/apache/druid/blob/master/distribution/docker/docker-compose.yml)  和 [environment](https://github.com/apache/druid/blob/master/distribution/docker/environment) 拉取下来之后，

如果想改 UI 的端口，找到`8888`修改为`58888`即可

直接执行：

```
docker-compose -f docker-compose.yml up -d
```

就可以在端口 8888 看到 druid 的后台UI



## 参考

[官方中文文档](http://www.apache-druid.cn/)

https://groups.google.com/g/druid-user/c/ckMRTGo3dZk