# CI/CD实践

这里是 [构建应用流程](./构建应用流程.md) 环节当中的一部分，示例代码放在了 [ci_demo](https://gitlab.com/felix9ia/ci_demo) 当中



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

主要参考了[Golang基于Gitlab CI/CD部署方案](https://www.jianshu.com/p/8655f1ef26ee) 以及 [基于GitLab CI搭建Golang自动构建环境](https://www.cnblogs.com/wilburxu/p/11051948.html)一文, 以及 Bilibili 之前泄露过的[open-bilibili-go-common](https://gitee.com/felix9ia/open-bilibili-go-common.git)。

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

[GitLab-CI与GitLab-Runner](https://www.jianshu.com/p/2b43151fb92e) 里描述了两者之间的关系

安装 gitlab-ci-multi-runner

```
# https://www.cnblogs.com/wilburxu/p/11051948.html
# For Debian/Ubuntu
$ curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.deb.sh | sudo bash
$ sudo apt-get install gitlab-ci-multi-runner

$ curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh | sudo bash
$ sudo yum install gitlab-ci-multi-runner
yum remove gitlab-ci-multi-runner
```



是 Gitlab-CI 配置下的一个 Runner

```
gitlab-ci-multi-runner register
sudo gitlab-ci-multi-runner list
```

注意：会有权限的问题：

```
# https://www.cnblogs.com/wu-wu/p/13426658.html
在runner执行过程中大多数是文件夹不存在，无权限。

sudo gitlab-runner uninstall # 删除gitlab-runner

gitlab-runner install --working-directory /home/gitlab-runner --user root   # 安装并设置--user(设置为root)

sudo service gitlab-runner restart  # 重启gitlab-runner

ps aux|grep gitlab-runner  # 查看当前runner用户
```



如果 你是 centos8，上面可能跑不通,要用下面的：

```
# https://gitlab.com/gitlab-org/gitlab-runner/-/issues/25554
# For CentOS
yum clean all
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh | sudo bash
yum install gitlab-runner
gitlab-runner register

gitlab-runner install --working-directory /home/gitlab-runner --user root
git 

gitlab-runner run --user root
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



## 构建与 Jenkins 部署

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