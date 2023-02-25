---
time: 2022-8-4




---
# PostgreSQL

以下是使用

## Docker

如果使用 docker 部署

```
docker run -p 3306:3306 --name mysql_inst -e MYSQL_ROOT_PASSWORD=treenewbee  -d mysql:5.7

    
docker pull postgres

docker run --name mypostgres -d -p 5432:5432 -e POSTGRES_PASSWORD=123456 postgres

docker exec -it mypostgres bash

create database db_name;

\list
```



### 参考

[]()