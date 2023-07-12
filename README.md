# sloth

回归到当下，当下的每一刻决定了你的将来。所以，不积跬步无以至千里，不集细流无已成江河。

使用 [VuePress](https://vuepress.vuejs.org/) 构建

> ⚠ 请在 [主仓库](https://github.com/vuepress-theme-hope/vuepress-theme-hope) 发起讨论或反馈 bug。

- 安装依赖:

如果无法编译的话，就试一下`node 12.22.12`


  运行 `npm install` 或者 `yarn install`

- 测试环境:

  运行 `npm run serve` 或者 `yarn run serve`

- 生产环境(构建文件):

  运行 `npm run build` 或者 `yarn run build`

QA
Q: 为什么 `sh deploy.sh` 报错 `error: src refspec main does not match any`

```

hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
```

本地默认的 是 master，远程是用的 main ，所以冲突了，把线上改成 master


