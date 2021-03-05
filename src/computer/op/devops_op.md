---
time: 2020-3-5




---

# 

生成ssh

```
ssh-keygen -t rsa
```

添加登录授权

```
sudo vi ~/.ssh/authorized_keys
```

root 免登陆

```
visudo

%sudo   ALL=(ALL:ALL) NOPASSWD:ALL
```

配置静态ip



配置 Git 免密

```
git config --global credential.helper store
git config --global user.name "Mona Lisa"
```

### nginx

```
sudo apt-get install nginx
```







https://www.linuxitellu.com/special-topic/embedded/raspberrypi-set-static-ip-address-in-ubuntu-20-04.html

