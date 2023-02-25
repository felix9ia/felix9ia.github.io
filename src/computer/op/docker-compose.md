---
time: 2021-3-9




---
# Docker-compose 教程

用于单机的容器编排

## 版本

一下是具体版本的配置

### 3.9

```
services:
  zookeeper:
    image: zookeeper:latest
    ports:
      - 2181:2181
    restart: always
    healthcheck: # 两次健康检查的周期
      test: ["CMD", "curl", "-f", "http://localhost:2181"]
      interval: 30s
      timeout: 10s # test 指令运行超时时间
      retries: 3 # 连续重试的次数
      start_period: 40s # 
```



## 参考

[docker-compose push](https://docs.docker.com/compose/reference/push/)

https://devdojo.com/bobbyiliev/how-to-install-docker-and-docker-compose-on-raspberry-pi

Env_file 和 .env 的区别

[docker-compose not recognizing env_file file/location, and still tries to use the default .env](https://stackoverflow.com/questions/39542905/docker-compose-not-recognizing-env-file-file-location-and-still-tries-to-use-th)

