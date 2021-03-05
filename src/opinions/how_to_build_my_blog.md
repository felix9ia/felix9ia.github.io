---
time: 2020-3-5





---



# 如何搭建博客系统



最终要的就是数据可迁移，而 git 已经做到了。

所有的`UI`都只是一个`View`方式，这只是一个壳子，就像是`iPhone`的硬件只是用来承载其真正的大脑 - 操作系统。而这个操作系统只不是摸不着的思维实体化到`UI` 上的结果。

## 缘由

所有的笔记软件都是一个壳子或者是一个View，而不应该作存储的事情。



讲一讲我在笔记类软件的探索历程

大学期间，

我一直都是使用锤子便签和 ios 的备忘录。但是他们还是太过局限。

刚刚工作的时候

本想选择印象笔记，但是印象笔记收费，抠门的我最终放弃了。

最终选择用的是有道云笔记。但是他不能做概念的关联。我很不爽。



之后就用了 oneNote, 它很强大，但是它强大到没有秩序。没有秩序在我这里也是不能接受的。



之后我就学会使用 `markdown` ，于是我学会利用 `Typora` 和  `OneDrive`



之后就选择使用 `Notion`



 Notion 是记录零碎的想法，而输出观点则使用 `Typora`搭配 `GitHub` 和`VuePress` ,

## 过程



这是我的仓库[Slot](https://github.com/felix9ia/sloth.git)，然后依靠[vuePress](https://vuepress.vuejs.org/)

### 部署

TODO

### 自定义域名

1. 配置项目

   在项目的 `deploy.sh`中，将自定义的`domain`开启：

   ```
   echo 'blog.medalwall.top' > CNAME
   ```

   之后就会在 `github` 的`github.com/felix9ia/felix9ia.github.io`仓库中的`setting`中的`Custom domain` 看到。然后将 `Enforce HTTPS `勾选

2. 配置域名解析

   ![](https://tva1.sinaimg.cn/large/008eGmZEly1gnskenda6uj31sw0ac75f.jpg)

之后就可以用自定义的域名访问了 [https://blog.medalwall.top/](https://blog.medalwall.top/)