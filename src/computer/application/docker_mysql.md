---
time: 2022-9-20



---
# Docker MySQL





```
docker pull mysql:5.7
```



```
sudo docker run -p 53306:3306 --name mysql \
-v /etc/mysql/log:/var/log/mysql \
-v /etc/mysql/data:/var/lib/mysql \
-v /etc/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7
```





