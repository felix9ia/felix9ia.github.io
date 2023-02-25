---
time: 2023-1-8




---
# 各类服务安装



### JDK

参考自[JDK](https://segmentfault.com/a/1190000039693252)

```apache
yum install -y java-1.8.0-openjdk
java -version
```

### MySQL

参考自[MySQL](https://juejin.cn/post/7056265988673568781) 以及 [MySQL创建用户与授权](https://www.jianshu.com/p/d7b9c468f20d)

```
--nogpgcheck

-- 下面这两步，不需要什么刷新之类的
CREATE USER 'medal_op'@'%' IDENTIFIED BY '*5Pg76p**3D4';
GRANT ALL ON *.* TO 'medal_op'@'%';

```

### Redis

参考自[Redis](https://zhuanlan.zhihu.com/p/34527270)

```

sudo sed -i -e "s|mirrorlist=|#mirrorlist=|g" /etc/yum.repos.d/CentOS-*
sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*

sudo tail -f /var/log/redis/redis.log
```

