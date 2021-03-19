---
time: 2020-3-5
---

# Docker 教程

请参考教程 [Docker 从入门到实践](https://yeasy.gitbook.io/docker_practice/)

以对 `zookeeper`进行使用为例

## 调研

- VMware
- KVM
- Docker

[docker - trust_sandbox](https://docs.docker.com/engine/security/trust/trust_sandbox/)

[Making Containers More Isolated: An Overview of Sandboxed Container Technologies](https://unit42.paloaltonetworks.com/making-containers-more-isolated-an-overview-of-sandboxed-container-technologies/)



## 参考

参考了以下教程

- [阮一峰 - Docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
- [Building a Golang Docker image](https://bitfieldconsulting.com/golang/docker-image)



## 概念

### 镜像（Image）

特殊的文件系统，程序、库、资源、配置文件

### 容器（Container）

### 仓库（Repository）



## 安装环境

- [Mac](https://docs.docker.com/docker-for-mac/install/)
- [Windows](https://docs.docker.com/docker-for-windows/install/)
- [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [Debian](https://docs.docker.com/install/linux/docker-ce/debian/)
- [CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)
- [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)
- [其他 Linux 发行版](https://docs.docker.com/install/linux/docker-ce/binaries/)

把用户加入 Docker 用户组。

```
sudo groupadd docker          #添加docker用户组
sudo gpasswd -a $XXX docker   #检测当前用户是否已经在docker用户组中，其中XXX为用户名，例如我的，liangll
sudo gpasswd -a $USER docker  #将当前用户添加至docker用户组
newgrp docker                 #更新docker用户组
```

查看状态

```
# 启动
systemctl start docker

# 列出本机的所有 image 文件
docker image ls
```



## 基础

#### 搜索镜像

```shell
docker search zookeeper
```

#### 安装镜像

```shell
docker pull zookeeper
```

#### 将镜像放到容器中

```shell
# 下面可以一整行的内容
docker run --privileged=true -d --name zookeeper --publish 2181:2181 -d zookeeper:latest
```

#### 查看镜像

```shell
docker ps
-a # 查看所有的容器
```

#### 启动和停止容器

```shell
docker start name
docker stop name
```

#### 进入 `zookeeper`的运行环境

```
docker exec -it 45850daa6b9b bash
```

#### 执行应用的命令

[ZooKeeper客户端 zkCli.sh 节点的增删改查](https://www.cnblogs.com/sherrykid/p/5813148.html)  

下面是使用相应的命令：

```shell
# 运行 zkCli
./bin/zkCli.sh

# 重启
./bin/zkServer.sh restart
```

### 查看日志

```
docker logs --tail 50 --follow --timestamps xxx
```

### 进入容器

```
docker exec -it gitlab-runner /bin/bash
```

## 进阶

#### 重命名

```shell
docker rename old_name new_name
```

#### 删除镜像

```
docker rm zookeeper
```



#### 构建

```
docker build
docker-compose
```



#### 打标签

```
docker tag httpd:test fedora/httpd:version1.0.test
```



#### 推送



```
docker tag articleapp_app azimshaik/articleapp_app

docker push azimshaik/articleapp_app


docker tag lfcp_srv_local_sms-service 192.168.50.108:8686/library/lfcp_srv_local_sms-service:latest

docker  push 192.168.50.108:8686/library/lfcp_srv_local_sms-service  
```



## 参考

[docker tag](https://docs.docker.com/engine/reference/commandline/tag/)

[清理Docker的container，image与volume](https://note.qidong.name/2017/06/26/docker-clean/#:~:text=%E6%95%B0%E6%8D%AE%E5%8D%B7%E7%9A%84%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A4,%E5%8F%AF%E5%88%A0%E9%99%A4%E6%89%80%E6%9C%89%E6%97%A0%E7%94%A8%E5%8D%B7%E3%80%82)

[停止、删除所有的docker容器和镜像](https://colobu.com/2018/05/15/Stop-and-remove-all-docker-containers-and-images/)

