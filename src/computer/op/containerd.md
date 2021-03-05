---
time: 2020-3-5




---

# 

# Containerd 实践落地

如果最终的目标要上 k8s，而既然 Docker 已经贡献了 containerd，并且有了 CRI 接口， 就没有必要落地 Docker，直接实践 containerd 至落地。

docker 的结构：

![img](https://static.studygolang.com/191115/e88dc43c744c1988bc81f76c656898c1.png)

这是使用bucketbench对 `Docker`、`crio` 和 `Containerd` 的性能测试结果，包括启动、停止和删除容器，以比较它们所耗的时间：

![](https://tva1.sinaimg.cn/large/008eGmZEly1gny7uy7mtlj30u00f0gmq.jpg)



Containerd 的架构：

![img](https://tva1.sinaimg.cn/large/008eGmZEly1gny6zhr24cj31di0u0dit.jpg)

## 参考

[Getting started with containerd](https://containerd.io/docs/getting-started/)

[Github - containerd](https://github.com/containerd/containerd/)

[Containerd到底是干啥的？](https://studygolang.com/articles/24697?fr=sidebar)

[Containerd 使用教程](https://fuckcloudnative.io/posts/getting-started-with-containerd/)

### 其他

[Kubernetes弃用Docker后怎么办？](https://mp.weixin.qq.com/s?__biz=MzIyMTUwMDMyOQ==&mid=2247495062&idx=1&sn=055adc9b434b6255e3d87c8e3d26d0db&chksm=e8396b50df4ee24616fbd4b10f0c485c4e2dc06713e2f8dbcd9250cc8fb62fc66c23de47a95e&mpshare=1&scene=1&srcid=1205FS1hHdOWT1WJdkIOwAW9&sharer_sharetime=1607149503745&sharer_shareid=942119afdfbc37ad9eb04201dfe5b060&key=81a6468567c4ca9471fd81dfa6b5c4bb1116e69c7eaac999aa60599106b7563ac9e4839b81765b306a7758c46abdde2a7cc378f1ead8984924de7ee01c0b894f6222c4867a5b2070e18da55d9241df651b476861663e6372360388aa65d3a4154439e1c3790845ad8b06da4113bd5aa0b123a30e7838a8b5cfb43f373aa6b8b9&ascene=1&uin=NDY1Mzg4MTg4&devicetype=Windows+10+x64&version=63000039&lang=zh_CN&exportkey=A6RQ20TdUVHWa2bIpojAVBM%3D&pass_ticket=SDZTACfaynkyzZdchvC0lVuBNOxy0gbIc4xvr4raR7kSPu%2Fq8XIgEqgQRC2QE670&wx_header=0)

[K8S 弃用 Docker 了？Docker 不能用了？别逗了！](https://segmentfault.com/a/1190000038420933)

