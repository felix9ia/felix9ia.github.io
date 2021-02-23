# K8S 实践教程

这里是 k8s 的快速上手教程

## 参考

[kubernetes-basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

## 概念

### Cluster

![https://zhuanlan.zhihu.com/p/53260098](https://pic4.zhimg.com/80/v2-466804fc47bd2e939e0413d9c32170af_1440w.jpg)

集群

### Master

![img](https://pic2.zhimg.com/80/v2-7fa63b292368c8f21bd4582861a6983d_1440w.jpg)

主节点，负责管理和控制。

- API Server

  整个系统对外的接口，供客户端和其他组件调用，相当于营业厅。

- Scheduler

  负责对集群内部的资源进行调度，相当于调度室。

- Controller manager

  负责管理控制器，相当于大总管。

### Node

![img](https://pic4.zhimg.com/80/v2-8cb338cd8923fa0e6857f45facc8f00f_1440w.jpg)

计算节点，工作负载节点，里面放的是具体的容器。包括：

- Docker

  用于创建容器

- kubelet

  负责监视指派到它所在 Node 上的 Pod，包括创建、修改、监控、删除等

- Kube-proxy

  负责为 Pod 对象提供代理。

- Fluentd

  负责日志收集、存储与查询。

- Kube-dns（可选）

- Pod

  Pod 是 k8s 最基本的操作单元。一个 Pod 代表集群中运行的一个进程，内部封装了一个或多个紧密相关的容器。

