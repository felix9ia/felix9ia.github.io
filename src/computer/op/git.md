# Git 使用

以下记录一些不容易操作的流程。

## Git 子仓库

如果想要从已经存在的仓库将 `build` 目录独立出子仓库。

在 `build` 目录下执行`git init`、`git add . `、`git commit`

```
.
├── app
│   ├── api
│   ├── kit
│   └── service
└── build
    ├── docker
    ├── root
    └── scripts

```

然后执行

```
 git rm -r build
 # 记得提交一下
 git submodule add git@gitlab.rawpool.com:cloudphone/lfcp-compile.git build
```





## 参考

[Git submodule 子模块的管理和使用](https://www.jianshu.com/p/9000cd49822c)

