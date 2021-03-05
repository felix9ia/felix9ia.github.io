---
time: 2020-3-5




---

# 

# DevOps 方案对比

从 [Gitlab-DevOps Tools Landscape](https://about.gitlab.com/devops-tools/) 中查看市面上错有的 `DevOps` 工具：

![](https://tva1.sinaimg.cn/large/008eGmZEly1go22l56g6dj30u01nhwqk.jpg)

所以，就项目目前已经涉及到的常见的方案进行对比：



| DevOps工具对比 |                         |                |                |
| :------------: | :---------------------: | :------------: | :------------: |
|      角度      | 容器构建（拟定rancher） |    jenkins     |   Gitlab-CI    |
|    代码管理    |            ❌            |       ❌        |       ✅        |
|    自动部署    |            ✅            |       ✅        |       ✅        |
|                |                         |                |                |
|  服务搭建难度  |           高            | 中（各种插件） | 低（自动集成） |
|    最低配置    |                         |                |                |
|   图形化界面   |            ✅            |       ✅        |       ✅        |
|                |                         |                |                |
|  服务依赖跟随  |            ✅            |       ❌        |       ❌        |
|    自动恢复    |            ✅            |       ❌        |       ❌        |
|    弹性扩容    |            ✅            |       ❌        |       ❌        |
|  负载均衡管理  |            ✅            |       ❌        |       ❌        |
|                |                         |                |                |

### 方案1：容器

优点：

缺点：

### 方案2：jenkins

优点：

缺点：

### 方案3  Gitlab-CI

优点：

- 用一个平台，解决了代码提交，发布，构建

缺点：



| 流程            | Gitlab    | Docker |
| --------------- | --------- | ------ |
| 开发 - 代码托管 | Gitlab    |        |
| 单元测试        | Gitlab-CI |        |
| 部署            | Gitlab-CI |        |



## 参考

[Rancher的优点及不足](https://blog.csdn.net/belalds/article/details/81070191)

[Gitlab-DevOps Tools Landscape](https://about.gitlab.com/devops-tools/)



[go module,使用gitlab私有仓库作为项目的依赖包](https://www.jianshu.com/p/ca4404512cf3) 