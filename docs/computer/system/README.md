# 操作系统



## 学习方法

迭代螺旋法

[Linux内核应该怎么去学习？](https://www.zhihu.com/question/58121772/answer/391633955)

## 文件系统

![svg](https://en.wikipedia.org/wiki/Unix_filesystem#/media/File:Standard-unix-filesystem-hierarchy.svg)

## SimpleKernel
安装依赖

- 安装 `xcode`, [tool 'xcodebuild' requires Xcode](https://github.com/nodejs/node-gyp/issues/569)
- 安装 `xcode-select`
```
sudo xcode-select --install
sudo xcodebuild -license

```
- 安装 `cmake`

之后配置环境变量,去工具栏 `tools` 里面看就行

- 安装各种工具

切换到项目的`tools`目录下面，然后根据执行`run.sh`后的反馈，通过已经写好的脚本，来安装各种插件

```
# 会报没有权限的错，所以需要先执行加权
sudo chmod -R 777 /usr/local/lib/node_modules/yarn 
brew install x86_64-elf-gcc
```




### 参考
[同事自研了一款操作系统—「编程杂感」第 2 期](https://mp.weixin.qq.com/s/aCPWLZ2IplqJYDlKm-yb0g)  
[SimpleKernel](https://github.com/Simple-XX/SimpleKernel.git)

[如何规范你的Git commit？](https://zhuanlan.zhihu.com/p/182553920)