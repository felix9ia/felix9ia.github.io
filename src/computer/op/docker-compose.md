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

