---
time: 2020-3-5
---

# 运维流程

接下来是具体的步骤：

### 构建

使用根目录下的 `Makefile` 进行构建。

### 添加用户

免密切换 `sudo su -`,可以参考[sudo 免密码](https://suweiwilson.pixnet.net/blog/post/393550657)

```
visudo
```



配置私钥

### 静态 IP 配置

设置静态 IP，[ubuntu 18.04 设置静态ip方法](https://www.cnblogs.com/yaohong/p/11593989.html)



```
#unbuntu

sudo vi /etc/netplan/50-cloud-init.yaml
```

内容是

```
network:
    ethernets:
        eth0:
            dhcp4: no
            addresses: [192.168.1.100/24]
            optional: true
            gateway4: 192.168.1.1
            nameservers:
                    addresses: [223.5.5.5,223.6.6.6]
 
    version: 2
```

然后刷新

```
 sudo netplan apply
 #  check
 ip addr
```

### 开启 SSH

参考自 [ubuntu开启SSH服务远程登录](https://blog.csdn.net/jackghq/article/details/54974141)，步骤是

```
dpkg -l | grep ssh
sudo apt-get install openssh-server
dpkg -l | grep ssh
ps -e | grep ssh
```



### Nginx 配置



### 域名配置

