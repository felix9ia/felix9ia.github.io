---
time: 2020-3-5




---

# 

# CI/CD实践

这里是 [构建应用流程](./构建应用流程.md) 环节当中的一部分，示例代码放在了 [ci_demo](https://gitlab.com/felix9ia/ci_demo) 当中

[](https://meigit.readthedocs.io/en/latest/gitlab_ci_.gitlab-ci.yml_detail.html#artifacts-paths)

## CI/CD

这里的 CI/CD 是总称，代表了持续集成、持续交付和持续部署。可以参考[Introduction to CI/CD with GitLab](https://docs.gitlab.com/ee/ci/introduction/)

![https://sean22492249.medium.com/gitlab-ci-cd-%E4%BB%8B%E7%B4%B9%E8%88%87-runner-%E7%9A%84%E6%9E%B6%E8%A8%AD-afdbde9f22aa](https://miro.medium.com/max/1400/0*SY75sciWGOk7ruik.png)

### 持续集成

持续集成（continuous Integration），简称 CI，是一种软件开始实践，是指每个成员在一天当中会不断的集成到主干分支，并且在提交、合并代码时对项目进行构建、编译和测试，每次集成都通过自动化的构建。测试不通过，不能进行集成。

![](https://qcdn.xueyuanjun.com/wp-content/uploads/2019/04/069e09bfc30ba6ef9b890975676b0d69.jpg)

### 持续交付

持续交付（Continuous Delivery）将集成到主干的软件新版本，手动部署到准生产环境（测试环境）

![](https://qcdn.xueyuanjun.com/wp-content/uploads/2019/04/ec92ab317c3e22a2fe180de4d01df48a.jpg)

### 持续部署

持续部署（Continuous Deployment）在持续交付的基础上，部署到生产环境的过程自动化。

![https://laravelacademy.org/post/19615](https://qcdn.xueyuanjun.com/wp-content/uploads/2019/04/0fdf7af30fedd9ef473d3f148757a7d3.jpg)

## 方案对比

主要在以下方案中进行选择，自己想的原则是：

- 不冗余服务

  能用一个服务搞定的，就不用多个服务。

- 坑大小

  此方案是否足够完善，有足够的文档生态支持踩坑。

### Gitlab CI

在`Gitlab 8.0`之后就默认集成，并且自动开启。 

### Jenkins

市面上比较成熟的方案，可以完整的实现 CI 和 CD

### 其他

- Travis CI
- CircleCI

### 结论

选择 Gitlab 做  CI 部分， Jenkins 做 deploy 的部分, 可以参考 [基于GitLab CI搭建Golang自动构建环境](https://www.cnblogs.com/wilburxu/p/11051948.html)，而中间的桥梁可以 `git tag` 成为 `Release` 来实现。

![https://www.cnblogs.com/wilburxu/p/11051948.html](https://img2020.cnblogs.com/blog/1062001/202004/1062001-20200420104303539-1990871526.png)

## Gitlab-CI 搭建环境

主要参考了[Golang基于Gitlab CI/CD部署方案](https://www.jianshu.com/p/8655f1ef26ee) 以及 [基于GitLab CI搭建Golang自动构建环境](https://www.cnblogs.com/wilburxu/p/11051948.html)一文。

集成的流程包括以下：

- lint 校验
- 单元测试
- 构建

### 基础概念

[Markfile]() 是Linux 的构建工具，具体教程可以参考 [阮一峰：Make 命令教程](https://www.ruanyifeng.com/blog/2015/02/make.html)当中所说的。

[用 GitLab CI 进行持续集成](https://segmentfault.com/a/1190000006120164) 文章中，对一些概念的梳理：

```
+------------------+           +----------------+
|                  |  trigger  |                |
|   Commit / MR    +---------->+    Pipeline    |
|                  |           |                |
+------------------+           +----------------+

+--------------------------------------------------------+
|                                                        |
|  Pipeline                                              |
|                                                        |
|  +-----------+     +------------+      +------------+  |
|  |  Stage 1  |---->|   Stage 2  |----->|   Stage 3  |  |
|  +-----------+     +------------+      +------------+  |
|                                                        |
+--------------------------------------------------------+

+------------------------------------------+
|                                          |
|  Stage 1                                 |
|                                          |
|  +---------+  +---------+  +---------+   |
|  |  Job 1  |  |  Job 2  |  |  Job 3  |   |
|  +---------+  +---------+  +---------+   |
|                                          |
+------------------------------------------+
```



里面有很多变量：[GitLab CI/CD Variables 中文文档](http://www.ttlsa.com/auto/gitlab-cicd-variables-zh-document/)



### 安装和运行 Gitlab Runner

具体的常用命令可以参考： [GitLab Runner安装注册配置管理](https://cloud.tencent.com/developer/article/1624837)

运行命令时全部使用 `sudo` 前缀

使用 docker 安装 runner，[install runner by docker](https://docs.gitlab.com/runner/install/docker.html)

自己梳理的流程是：

 register(注册) -> run（启动） -> install（服务管理）

```
以普通用户身份注册的 Gitlab 服务不会在后台运行，此时需要手动执行 gitlab-runner run 命令

如果是超级用户用 sudo gitlab-runner register 注册的服务，会在后台运行，不需要执行上述命令。
```



[GitLab-CI与GitLab-Runner](https://www.jianshu.com/p/2b43151fb92e) 里描述了两者之间的关系

https://docs.gitlab.com/runner/install/linux-manually.html

\# Replace ${arch} with any of the supported architectures, e.g. amd64, arm, arm64 # A full list of architectures can be found here https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html curl -LJO "https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_arm64.deb"

#### 拉取镜像

这里需要注意平台的问题，是 amd64 还是 arm64

[yobasystems-gitlab-runner](https://github.com/yobasystems/gitlab-runner)

[ulm0-gitlab-runner](https://github.com/ulm0/gitlab-runner)

#### 启动

```
docker run -d --name arm-runner \
-v $(pwd)/.runner:/etc/gitlab-runner -v /server:/server \
--restart=always \
klud/gitlab-runner
```

#### 注册

```
docker exec -it arm-runner /bin/sh
```

```
docker exec -it arm-runner gitlab-runner register
```

#### 其他操作

可以细节参考：[搭建一个使用 GitLab CI 的项目](https://segmentfault.com/a/1190000023117085)

```
# 停止服务
sudo gitlab-runner stop
# 卸载服务
sudo gitlab-runner uninstall
# 重新安装服务，指定工作目录和用户
sudo gitlab-runner install --working-directory /home/gitlab-runner --user root
# 完整配置
# sudo gitlab-runner install --working-directory /home/gitlab-runner --config /etc/gitlab-runner/config.toml --service gitlab-runner --syslog --user gitlab-runner
# 注册
 sudo gitlab-runner register
# 校验
sudo gitlab-runner verify
# 启动服务
sudo gitlab-runner start
# 查看状态
sudo gitlab-runner status
```

WARN: 如何遇到没有权限调用 install 时，请调用

```
kill -TERM 1
```

#### 构建问题

[Cannot connect to the Docker daemon at tcp://localhost:2375. Is the docker daemon running?](https://stackoverflow.com/questions/61105333/cannot-connect-to-the-docker-daemon-at-tcp-localhost2375-is-the-docker-daem)



[dial tcp: lookup thedockerhost on 183.60.82.98:53: no such hos](https://devops.stackexchange.com/questions/9359/gitlab-ci-error-during-connect-get-http-docker2375-v1-40-containers-jsonall)

如果说没有权限之类的，就添加下面的：

```
privileged = true
```



### 安装相关相关依赖

- Go

  [Centos Linux 使用Yum安装Go和配置环境](https://www.jianshu.com/p/b2222fc04f47)

  ```
  yum install golang
  ```

- `golint`

  ```
  # 换镜像
  # 启用 Go Modules 功能
  $env:GO111MODULE="on"
  
  # 配置 GOPROXY 环境变量，以下三选一
  
  # 1. 七牛 CDN
  $env:GOPROXY="https://goproxy.cn,direct"
  
  # 2. 阿里云
  $env:GOPROXY="https://mirrors.aliyun.com/goproxy/,direct"
  
  # 3. 官方
  $env:GOPROXY="https://goproxy.io,direct"
  
  # 安装 golint
  go get -u golang.org/x/lint/golint
  ```



## 构建 pipeline

### lint

使用 `golint`，对整个项目进行扫描



### unit_test

使用 `go test`

### coverage

测试覆盖率

[Gitlab CI for Go projects](https://ronniegane.kiwi/blog/2019/06/18/go-gitlab/)

[Golang Multi Package Test Coverage in Gitlab](https://penkovski.com/post/gitlab-golang-test-coverage/)

### 徽章

最后的配置解析

```
^coverage:\s(\d+(?:\.\d+)?%)
```

### 结果

最后形成的的结果是：



### build

 以及 Bilibili 之前泄露过的[open-bilibili-go-common](https://gitee.com/felix9ia/open-bilibili-go-common.git),整体思路是采用 `Merge Request`。

```
[Pull request vs Merge request](https://stackoverflow.com/questions/22199432/pull-request-vs-merge-request)

[阮一峰：Merge Request 的命令行管理](http://www.ruanyifeng.com/blog/2017/07/pull_request.html)
```

而各自的 `fork` 仓库则使用 `tag` 和类似 `Jenkins`的构建工具通过 `tag`的版本管理进行打包部署。

构建主要参考了 [Go 多模块构建方案](./go_mutil_module.md) 对项目进行。

部署可以参考 [Jenkins基于gitlab中的Tag进行构建](https://blog.csdn.net/weixin_43840640/article/details/100597073) ，以及 [使用Jenkins Git参数实现分支标签动态选择](https://blog.51cto.com/11064706/2511340) 来进行构建。



## 其他尝试

如何在pre-commit 运行 lint？

[利用git hook规范你的代码与commit message](https://razeencheng.com/post/golang-and-git-commit-message-pre-commit)

[pre-commit-golang](https://github.com/TekWizely/pre-commit-golang)



## 参考

[有赞 GO 项目单测、集成、增量覆盖率统计与分析](https://tech.youzan.com/you-zan-go-xiang-mu-dan-ce-ji-cheng-zeng-liang-fu-gai-lu-tong-ji-yu-fen-xi/)

[gitlab-ci配置详解(二)](https://segmentfault.com/a/1190000011890710)

[持续集成的定义和常用 CI 系统对比](https://laravelacademy.org/post/19615)

[Gitlab CI/CD 介紹與 Runner 的架設](https://sean22492249.medium.com/gitlab-ci-cd-%E4%BB%8B%E7%B4%B9%E8%88%87-runner-%E7%9A%84%E6%9E%B6%E8%A8%AD-afdbde9f22aa)

[golang-pre-commit](https://gist.github.com/kolotaev/9d9f7e1e0cfbdaf88dd91d615613a977#file-golang-pre-commit)