---
time: 2020-3-5




---

# 

# 制作 CLI 教程

记录自己制作 CLI 的过程。

## 环境

以下是依赖环境：

```
# nvm alias default v12
```



## 搭建私有 npm 仓库

使用 Nexus 的 npm 仓库

```shell
docker run -d --restart=unless-stopped  --name nexus \
-p 8081:8081 -p 6000:6000 -p 6001:6001 -p 6002:6002 -p 6003:6003 -p 6004:6004 \
--ulimit nofile=90000:90000 \
-v /usr/local/nexus-data \
-e INSTALL4J_ADD_VM_PARAMS="-Xms2g -Xmx2g" \
sonatype/nexus3:3.8.0
```



## 参考

以下是参考

### 主要

[oclif-Quickstart](https://oclif.io/docs/introduction)

[npm 私有模块的3种方法](https://www.jianshu.com/p/a9540d9f8d9c)

### 其他

