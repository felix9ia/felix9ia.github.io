---
time: 2021-11-11





---

# Docker-compose 共享卷的细节

我们拿前端的镜像编排来举例：

```
version: '3.5'

volumes:
  dist:
services:
  die-web_build:
    image: "${REPO_HOST}/die_web:latest"
    volumes:
      - dist:/usr/src/app
    build:
      context: .
      dockerfile: ./Dockerfile


  die-web_web:
    image: nginx
    ports:
      - 58081:58081
    container_name: 'die_nginx_web'
    restart: unless-stopped
    volumes:
      - dist:/usr/share/nginx/html
      - /etc/nginx/docker_config:/etc/nginx/conf.d
```



当你有一个命名卷 `dist` 的时候，你会产生的疑惑是：

服务 `die-web_build` 的 `/usr/src/app` 下面会有打包出来的一些文件们 A:

```
├── index.html
├── umi.css
└── umi.js

```

而服务 `die-web_web`的 `/usr/share/nginx/html` 下面因为是 `Nginx`，所以会有一些默认的文件们 B：

```
├── index.html
└── 50x.html
```

那此时，你就会有疑问，共享卷是会把这些文件 `merge` 到一起呢，还是某一个覆盖某一个呢？

答案都不是。

在参考 [Docker stack deploy with compose-file results in invalid mount config for type "bind": bind source path does not exist:](https://stackoverflow.com/questions/58165759/docker-stack-deploy-with-compose-file-results-in-invalid-mount-config-for-type)后，经过测试，正确的答案是：第一个挂载该命名卷的容器的文件，会被映射到命名卷当中，当前的例子，自然是 A 们入驻共享卷，而 B 挂载的目录则会出现 A 们。

那么如何控制共享卷下到底由谁先入驻？只需要在不想被拷贝的`service` 上加上`nocopy: true`。

现在虽然依然是 A 们入驻，但已经不仅仅是因为它是第一个挂载，而是因为命名卷`dist`只有这一个可以挂载的点。

```
version: '3.5'

volumes:
  dist:
services:
  die-web_build:
    image: "${REPO_HOST}/die_web:latest"
    volumes:
      - source: dist
        type: volume
        target: /usr/src/app
    build:
      context: .
      dockerfile: ./Dockerfile


  die-web_web:
    image: nginx
    ports:
      - 58081:58081
    container_name: 'die_nginx_web'
    restart: unless-stopped
    volumes:
      - source: dist
        type: volume
        target: /usr/share/nginx/html
        volume:
          nocopy: true
      - /etc/nginx/docker_config:/etc/nginx/conf.d

```







