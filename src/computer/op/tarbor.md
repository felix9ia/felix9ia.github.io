# Tarbor 搭建

### 下载



## 配置

修改 `harbor.yml` 的 `hostname` 和 `http.port` 

```
hostname: cp.wingchain.cn

# http related config
http:
  # port for http, default is 80. If https enabled, this port will redirect to https port
  port: 8686

```

## 运行

分初始化运行和再次运行

### 初始化运行

第一次要构建容器

```
sh ./install.sh
```

### 再次运行

这次就只需要运行即可

```
docker-compose up
```

## 推送

需要先登录

```
docker login cp.xxx.cn:8686
```

输入账号和密码，之后会显示`login success`即可。

## 参考



[使用harbor代理缓存docker hub](https://www.lishuai.fun/2020/11/05/harbor-proxy/)

