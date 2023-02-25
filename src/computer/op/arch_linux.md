---
time: 2021-3-18




---
# Arch Linux

安装

https://command-not-found.com/mkfs.vfat

配置dns

重启丢失

https://my.oschina.net/xiaominmin/blog/1599741

如果遇到无法安装的问题，试一下下面的办法

```
# 启动 etch0 网卡
ifconfig eth0 up
# 使用dhcpcd后台自己更新DHCP
dhcpcd eth0

pacman -Syu
```



http://www.linuxboy.net/linuxjc/45188.html

```
nano /etc/resolv.conf #编辑配置文件
nameserver 8.8.8.8
nameserver 8.8.4.4
ctrl+o #保存
ctrl+x #退出

```



### dhcp

```
dhcpcd
```





## 参考

https://www.cnblogs.com/ubuntuanzhuang/p/13131138.html

https://www.reddit.com/r/archlinux/comments/3e8bum/wifi_and_ethernet_both_not_working/