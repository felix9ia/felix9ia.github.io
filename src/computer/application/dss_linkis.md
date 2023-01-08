# DSS_LINKIS 整合流程

分为搭建 `DSS_LINKIS` 和 `Schedulis`

## DSS_LINKIS 搭建过程

TBC

### 配置细节

如果编辑模式下的左侧的工具栏的列表请求不回来，需要调整 `/etc/nginx/nginx.conf` 配置。

```
http {
		types_hash_max_size 4096;
}
```



如果要更新 spark 的版本，需要配置`/DSS-Linkis/dss/conf/dss.properties`

```
wds.linkis.spark.engine.version=2.4.8
```

配置环境变量

```
export JAVA_HOME=/usr/java/jdk1.8.0_231-amd64
export PATH=$PATH:$JAVA_HOME/bin
export HADOOP_HOME=/home/hadoop/hadoop-2.7.2
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
export HIVE_HOME=/home/hadoop/hive-2.3.3
export PATH=$PATH:$HIVE_HOME/bin:$HIVE_HOME/conf
export SPARK_HOME=/home/hadoop/spark-2.4.8-bin-hadoop2.7
#export SPARK_HOME=/home/hadoop/spark-2.4.3-bin-without-hadoop
export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop
export YARN_CONF_DIR=$HADOOP_HOME/etc/hadoop
export SPARK_DIST_CLASSPATH=$(hadoop classpath)
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/conf
#export SCALA_HOME=/home/hadoop/scala-2.11.12
export SCALA_HOME=/home/hadoop/scala-2.12.15
export PATH=$PATH:$SCALA_HOME/bin
```

## 启动

- Eureka http://172.15.0.25:20303/
- Hadoop http://172.15.0.25:8088/
- HDFS http://172.15.0.25:50070/
- DSS http://172.15.0.25:8901/

## Schedulis 搭建与配置过程

梳理 [schedulis_deploy_cn.md](https://github.com/WeBankFinTech/Schedulis/blob/master/docs/schedulis_deploy_cn.md) 的步骤中的**普通版部署模式**中的有用的步骤

1. 请基于 Linux 操作系统操作（建议 CentOS）

2. 创建新用户 hadoop， 并为该用户赋予 root 权限,用于部署schedulis

3. 准备好 MySQL（版本5.5+） 的客户端和服务端

   如果你的MySQL在其他的机器，就不用安装了。

4. 请确保已安装并且正确配置 JDK（版本1.8+）

5. 配置集群各节点之间的免密码登录

   如果是单机的话，就没必要了

6. ~~请准备一台已经正确安装和配置 Maven（版本3.3+） 和 Git 的机器，用来编译代码~~

   纯粹没必要，因为不需要编译

7. `hdp_wtss_deploy_script.sql` 在你 MySQL 所在的机器上执行一遍就行了，其他的步骤不需要

8. 去 [release-0.6.1](https://github.com/WeBankFinTech/Schedulis/releases/tag/release-0.6.1) 里下载[schedulis_0.6.1_exec.zip](https://github.com/WeBankFinTech/Schedulis/releases/download/release-0.6.1/schedulis_0.6.1_exec.zip) 和 [schedulis_0.6.1_web.zip](https://github.com/WeBankFinTech/Schedulis/releases/download/release-0.6.1/schedulis_0.6.1_web.zip) 两个 zip 文件，新建  `/appcom/Install/AzkabanInstall` 赋予 775 权限， 把两个 zip 文件复制到里面并解压

9. 把仓库里的`bin/construct`里面的执行依赖包` execute-as-user` 复制到`azkaban-exec-server`的`lib`下，并且更新权限

   ```
   sudo chown root execute-as-user
   sudo chmod 6050 execute-as-user
   ```

10. 配置`plugins/jobtypes/commonprivate.properties`

    此配置文件存放于 ExecServer 安装包下的 plugins/jobtypes 目录下
    此配置文件主要设置程序启动所需要加载的一些 lib 和 classpath

    ```
    hadoop.home=$HADOOP_HOME
    hadoop.conf.dir=$HADOOP_HOME/etc/hadoop
    hive.home=$HIVE_HOME
    spark.home=$SPARK_HOME
    
    #azkaban.native.lib 请修改成ExecServer 安装目录下 lib 的所在绝对路径
    execute.as.user=true
    azkaban.native.lib=/appcom/Install/AzkabanInstall/wtss_exec/bin
    ```

11. 配置`plugins/jobtypes/common.properties`

    需要配置，否则启动不起来

    ```
    #配置集群 Hive 的元数据库（密码用 base64 加密）
    job.datachecker.jdo.option.name="job"
    job.datachecker.jdo.option.url=jdbc:mysql://host:3306/db_name?useUnicode=true&amp;characterEncoding=UTF-8
    job.datachecker.jdo.option.username=username
    job.datachecker.jdo.option.password=password
    
    #配置 Schedulis 的数据库地址（密码用 base64 加密）
    msg.eventchecker.jdo.option.name="msg"
    msg.eventchecker.jdo.option.url=jdbc:mysql://host:3306/db_name?useUnicode=true&characterEncoding=UTF-8
    msg.eventchecker.jdo.option.username=username
    msg.eventchecker.jdo.option.password=password
    
    
    #此部分依赖于第三方脱敏服务mask，暂未开源，将配置写为和job类型一样即可（密码用 base64 加密） 
    
    bdp.datachecker.jdo.option.name="bdp"
    bdp.datachecker.jdo.option.url=jdbc:mysql://host:3306/db_name?useUnicode=true&amp;characterEncoding=UTF-8
    bdp.datachecker.jdo.option.username=username
    bdp.datachecker.jdo.option.password=password
    ```

12. 配置 `conf/azkaban.properties`

    ```
    #项目 MySQL 服务端地址（密码用 base64 加密）
    mysql.port=3306
    mysql.host=
    mysql.database=
    mysql.user=
    mysql.password=
    mysql.numconnections=100
    
    #此 server id 请参考1的 host.properties，改配置会在服务启动的时候自动从host.properties中拉取
    executor.server.id=8
    
    #Web Sever url相关配置， eg: http://localhost:8081
    azkaban.webserver.url=http://webserver_ip:webserver_port
    ```

    

13. 新建 `host.properties`, `vi /appcom/config/wtss-config/host.properties`

    ```
    主机名=ServerId
    ```

14. ~~plugins/alerter/WeBankIMS/conf/plugin.properties~~

15. 配置 `conf/global.properties`

    该配置文件存放在 ExecServer 安装包下的 conf 目录下，该配置文件主要存放一些 Executor 的全局属性

    ```
    #azkaban.native.lib，执行项目的 lib 目录，请修改成本机解压后的 ExecServer 安装包下 lib 的所在路径
    execute.as.user=true
    azkaban.native.lib=/appcom/Install/AzkabanInstall/wtss-exec/lib
    ```

16. 配置 plugins/jobtypes/linkis/private.properties

    下载jobtype插件的依赖和配置，链接：https://pan.baidu.com/s/1FuSBdgdTAHL1PxUXnfbLBw 提取码：0cpo；解压最新版本的zip，该配置文件存放在 ExecServer 安装包下的 plugins/jobtypes/linkis 目录下，主要是设置 jobtype 所需的 lib 所在位置

    ```
    #将该值修改为 ExecServer 安装包目录下的 /plugins/jobtypes/linkis/extlib
    jobtype.lib.dir=/appcom/Install/AzkabanInstall/wtss-exec/plugins/jobtypes/linkis/lib
    ```

17. plugins/jobtypes/linkis/plugin.properties 

    ```
    #将该值修改为 Linkis 的gateway地址
    wds.linkis.gateway.url=http://127.0.0.1:9001
    ```

18. 配置 WebServer

    ```
    #项目 MySQL 配置（密码用 base64 加密）
    database.type=mysql
    mysql.port=
    mysql.host=
    mysql.database=
    mysql.user=
    mysql.password=
    mysql.numconnections=100
    
    #Azkaban jetty server properties
    jetty.port=8081
    ```

19. 新建日志目录

    ` /appcom/logs/azkaban`，把文件所属权转给 `hadoop`用户，赋予775权限



## 启动服务

> 注意事项：启动的时候一定要切换到 bin 的上一层目录，因为上层目录有一些文件是被依赖的。

对数据库进行初始化完毕，以及修改完以上的配置文件后，就可以启动了

进入 ExecutorServer 安装包路径，注意不要进到 `bin` 目录下，执行成功会有 `success` 字样

```
./bin/start-exec.sh
```

进入 WebServer 安装包路径，注意不要进到 bin 目录下，之后访问 http://webserver_ip:8080 即可。在跳出的登陆界面输入默认的用户名和密码 `superadmin: Abcd1234`

```
./bin/start-web.sh
```

## 联动

参考 [SchedulisAppConn插件安装文档.md](https://github.com/WeBankFinTech/DataSphereStudio-Doc/blob/main/zh_CN/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2/SchedulisAppConn%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3.md) 中的 `3. 安装Schedulis AppConn`，执行安装。

```
sh ${DSS_HOME}bin/appconn-install.sh

# 执行appcon-install安装脚本后，输入对应的appconn名称
# 按照提示输入对应schedulis服务对应的IP，和PORT
>> schedulis
>> 127.0.0.1
>> 8089
```



- 

## 参考

[wedatasphere](https://fintech.webank.com/en/wedatasphere/)

[DataSphere Studio v0.8 使用教程](https://www.bookstack.cn/books/DataSphereStudio-0.8-zh)

[Linkis1.0.2 安装及使用指南](https://www.jianshu.com/p/d0e8b605c4ce#31-%E6%B6%89%E5%8F%8A%E7%BB%84%E4%BB%B6%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)

[Linkis1.0常见问题和解决办法](https://docs.qq.com/doc/DWlN4emlJeEJxWlR0)

[DataSphere 常见问题和解决办法](https://docs.qq.com/doc/DSGZhdnpMV3lTUUxq)



[Schedulis](https://github.com/WeBankFinTech/Schedulis)

[Schedulis AppConn安装说明](https://github.com/WeBankFinTech/DataSphereStudio-Doc/blob/main/zh_CN/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2/SchedulisAppConn%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3.md)