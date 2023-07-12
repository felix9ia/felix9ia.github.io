(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{519:function(e,s,a){"use strict";a.r(s);var n=a(1),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dss-linkis-整合流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dss-linkis-整合流程"}},[e._v("#")]),e._v(" DSS_LINKIS 整合流程")]),e._v(" "),a("p",[e._v("分为搭建 "),a("code",[e._v("DSS_LINKIS")]),e._v(" 和 "),a("code",[e._v("Schedulis")])]),e._v(" "),a("h2",{attrs:{id:"dss-linkis-搭建过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dss-linkis-搭建过程"}},[e._v("#")]),e._v(" DSS_LINKIS 搭建过程")]),e._v(" "),a("p",[e._v("TBC")]),e._v(" "),a("h3",{attrs:{id:"配置细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置细节"}},[e._v("#")]),e._v(" 配置细节")]),e._v(" "),a("p",[e._v("如果编辑模式下的左侧的工具栏的列表请求不回来，需要调整 "),a("code",[e._v("/etc/nginx/nginx.conf")]),e._v(" 配置。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http {\n\t\ttypes_hash_max_size 4096;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("如果要更新 spark 的版本，需要配置"),a("code",[e._v("/DSS-Linkis/dss/conf/dss.properties")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wds.linkis.spark.engine.version=2.4.8\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("配置环境变量")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export JAVA_HOME=/usr/java/jdk1.8.0_231-amd64\nexport PATH=$PATH:$JAVA_HOME/bin\nexport HADOOP_HOME=/home/hadoop/hadoop-2.7.2\nexport PATH=$PATH:$HADOOP_HOME/bin\nexport PATH=$PATH:$HADOOP_HOME/sbin\nexport HIVE_HOME=/home/hadoop/hive-2.3.3\nexport PATH=$PATH:$HIVE_HOME/bin:$HIVE_HOME/conf\nexport SPARK_HOME=/home/hadoop/spark-2.4.8-bin-hadoop2.7\n#export SPARK_HOME=/home/hadoop/spark-2.4.3-bin-without-hadoop\nexport HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop\nexport YARN_CONF_DIR=$HADOOP_HOME/etc/hadoop\nexport SPARK_DIST_CLASSPATH=$(hadoop classpath)\nexport PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/conf\n#export SCALA_HOME=/home/hadoop/scala-2.11.12\nexport SCALA_HOME=/home/hadoop/scala-2.12.15\nexport PATH=$PATH:$SCALA_HOME/bin\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),a("ul",[a("li",[e._v("Eureka http://172.15.0.25:20303/")]),e._v(" "),a("li",[e._v("Hadoop http://172.15.0.25:8088/")]),e._v(" "),a("li",[e._v("HDFS http://172.15.0.25:50070/")]),e._v(" "),a("li",[e._v("DSS http://172.15.0.25:8901/")])]),e._v(" "),a("h2",{attrs:{id:"schedulis-搭建与配置过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulis-搭建与配置过程"}},[e._v("#")]),e._v(" Schedulis 搭建与配置过程")]),e._v(" "),a("p",[e._v("梳理 "),a("a",{attrs:{href:"https://github.com/WeBankFinTech/Schedulis/blob/master/docs/schedulis_deploy_cn.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("schedulis_deploy_cn.md"),a("OutboundLink")],1),e._v(" 的步骤中的"),a("strong",[e._v("普通版部署模式")]),e._v("中的有用的步骤")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("请基于 Linux 操作系统操作（建议 CentOS）")])]),e._v(" "),a("li",[a("p",[e._v("创建新用户 hadoop， 并为该用户赋予 root 权限,用于部署schedulis")])]),e._v(" "),a("li",[a("p",[e._v("准备好 MySQL（版本5.5+） 的客户端和服务端")]),e._v(" "),a("p",[e._v("如果你的MySQL在其他的机器，就不用安装了。")])]),e._v(" "),a("li",[a("p",[e._v("请确保已安装并且正确配置 JDK（版本1.8+）")])]),e._v(" "),a("li",[a("p",[e._v("配置集群各节点之间的免密码登录")]),e._v(" "),a("p",[e._v("如果是单机的话，就没必要了")])]),e._v(" "),a("li",[a("p",[a("s",[e._v("请准备一台已经正确安装和配置 Maven（版本3.3+） 和 Git 的机器，用来编译代码")])]),e._v(" "),a("p",[e._v("纯粹没必要，因为不需要编译")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("hdp_wtss_deploy_script.sql")]),e._v(" 在你 MySQL 所在的机器上执行一遍就行了，其他的步骤不需要")])]),e._v(" "),a("li",[a("p",[e._v("去 "),a("a",{attrs:{href:"https://github.com/WeBankFinTech/Schedulis/releases/tag/release-0.6.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("release-0.6.1"),a("OutboundLink")],1),e._v(" 里下载"),a("a",{attrs:{href:"https://github.com/WeBankFinTech/Schedulis/releases/download/release-0.6.1/schedulis_0.6.1_exec.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("schedulis_0.6.1_exec.zip"),a("OutboundLink")],1),e._v(" 和 "),a("a",{attrs:{href:"https://github.com/WeBankFinTech/Schedulis/releases/download/release-0.6.1/schedulis_0.6.1_web.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("schedulis_0.6.1_web.zip"),a("OutboundLink")],1),e._v(" 两个 zip 文件，新建  "),a("code",[e._v("/appcom/Install/AzkabanInstall")]),e._v(" 赋予 775 权限， 把两个 zip 文件复制到里面并解压")])]),e._v(" "),a("li",[a("p",[e._v("把仓库里的"),a("code",[e._v("bin/construct")]),e._v("里面的执行依赖包"),a("code",[e._v("execute-as-user")]),e._v(" 复制到"),a("code",[e._v("azkaban-exec-server")]),e._v("的"),a("code",[e._v("lib")]),e._v("下，并且更新权限")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo chown root execute-as-user\nsudo chmod 6050 execute-as-user\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("配置"),a("code",[e._v("plugins/jobtypes/commonprivate.properties")])]),e._v(" "),a("p",[e._v("此配置文件存放于 ExecServer 安装包下的 plugins/jobtypes 目录下\n此配置文件主要设置程序启动所需要加载的一些 lib 和 classpath")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hadoop.home=$HADOOP_HOME\nhadoop.conf.dir=$HADOOP_HOME/etc/hadoop\nhive.home=$HIVE_HOME\nspark.home=$SPARK_HOME\n\n#azkaban.native.lib 请修改成ExecServer 安装目录下 lib 的所在绝对路径\nexecute.as.user=true\nazkaban.native.lib=/appcom/Install/AzkabanInstall/wtss_exec/bin\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("配置"),a("code",[e._v("plugins/jobtypes/common.properties")])]),e._v(" "),a("p",[e._v("需要配置，否则启动不起来")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#配置集群 Hive 的元数据库（密码用 base64 加密）\njob.datachecker.jdo.option.name="job"\njob.datachecker.jdo.option.url=jdbc:mysql://host:3306/db_name?useUnicode=true&amp;characterEncoding=UTF-8\njob.datachecker.jdo.option.username=username\njob.datachecker.jdo.option.password=password\n\n#配置 Schedulis 的数据库地址（密码用 base64 加密）\nmsg.eventchecker.jdo.option.name="msg"\nmsg.eventchecker.jdo.option.url=jdbc:mysql://host:3306/db_name?useUnicode=true&characterEncoding=UTF-8\nmsg.eventchecker.jdo.option.username=username\nmsg.eventchecker.jdo.option.password=password\n\n\n#此部分依赖于第三方脱敏服务mask，暂未开源，将配置写为和job类型一样即可（密码用 base64 加密） \n\nbdp.datachecker.jdo.option.name="bdp"\nbdp.datachecker.jdo.option.url=jdbc:mysql://host:3306/db_name?useUnicode=true&amp;characterEncoding=UTF-8\nbdp.datachecker.jdo.option.username=username\nbdp.datachecker.jdo.option.password=password\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("配置 "),a("code",[e._v("conf/azkaban.properties")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#项目 MySQL 服务端地址（密码用 base64 加密）\nmysql.port=3306\nmysql.host=\nmysql.database=\nmysql.user=\nmysql.password=\nmysql.numconnections=100\n\n#此 server id 请参考1的 host.properties，改配置会在服务启动的时候自动从host.properties中拉取\nexecutor.server.id=8\n\n#Web Sever url相关配置， eg: http://localhost:8081\nazkaban.webserver.url=http://webserver_ip:webserver_port\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("新建 "),a("code",[e._v("host.properties")]),e._v(", "),a("code",[e._v("vi /appcom/config/wtss-config/host.properties")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("主机名=ServerId\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[a("s",[e._v("plugins/alerter/WeBankIMS/conf/plugin.properties")])])]),e._v(" "),a("li",[a("p",[e._v("配置 "),a("code",[e._v("conf/global.properties")])]),e._v(" "),a("p",[e._v("该配置文件存放在 ExecServer 安装包下的 conf 目录下，该配置文件主要存放一些 Executor 的全局属性")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#azkaban.native.lib，执行项目的 lib 目录，请修改成本机解压后的 ExecServer 安装包下 lib 的所在路径\nexecute.as.user=true\nazkaban.native.lib=/appcom/Install/AzkabanInstall/wtss-exec/lib\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("配置 plugins/jobtypes/linkis/private.properties")]),e._v(" "),a("p",[e._v("下载jobtype插件的依赖和配置，链接：https://pan.baidu.com/s/1FuSBdgdTAHL1PxUXnfbLBw 提取码：0cpo；解压最新版本的zip，该配置文件存放在 ExecServer 安装包下的 plugins/jobtypes/linkis 目录下，主要是设置 jobtype 所需的 lib 所在位置")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#将该值修改为 ExecServer 安装包目录下的 /plugins/jobtypes/linkis/extlib\njobtype.lib.dir=/appcom/Install/AzkabanInstall/wtss-exec/plugins/jobtypes/linkis/lib\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("plugins/jobtypes/linkis/plugin.properties")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#将该值修改为 Linkis 的gateway地址\nwds.linkis.gateway.url=http://127.0.0.1:9001\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("配置 WebServer")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#项目 MySQL 配置（密码用 base64 加密）\ndatabase.type=mysql\nmysql.port=\nmysql.host=\nmysql.database=\nmysql.user=\nmysql.password=\nmysql.numconnections=100\n\n#Azkaban jetty server properties\njetty.port=8081\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("新建日志目录")]),e._v(" "),a("p",[a("code",[e._v("/appcom/logs/azkaban")]),e._v("，把文件所属权转给 "),a("code",[e._v("hadoop")]),e._v("用户，赋予775权限")])])]),e._v(" "),a("h2",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[e._v("#")]),e._v(" 启动服务")]),e._v(" "),a("blockquote",[a("p",[e._v("注意事项：启动的时候一定要切换到 bin 的上一层目录，因为上层目录有一些文件是被依赖的。")])]),e._v(" "),a("p",[e._v("对数据库进行初始化完毕，以及修改完以上的配置文件后，就可以启动了")]),e._v(" "),a("p",[e._v("进入 ExecutorServer 安装包路径，注意不要进到 "),a("code",[e._v("bin")]),e._v(" 目录下，执行成功会有 "),a("code",[e._v("success")]),e._v(" 字样")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./bin/start-exec.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("进入 WebServer 安装包路径，注意不要进到 bin 目录下，之后访问 http://webserver_ip:8080 即可。在跳出的登陆界面输入默认的用户名和密码 "),a("code",[e._v("superadmin: Abcd1234")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./bin/start-web.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"联动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联动"}},[e._v("#")]),e._v(" 联动")]),e._v(" "),a("p",[e._v("参考 "),a("a",{attrs:{href:"https://github.com/WeBankFinTech/DataSphereStudio-Doc/blob/main/zh_CN/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2/SchedulisAppConn%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SchedulisAppConn插件安装文档.md"),a("OutboundLink")],1),e._v(" 中的 "),a("code",[e._v("3. 安装Schedulis AppConn")]),e._v("，执行安装。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sh ${DSS_HOME}bin/appconn-install.sh\n\n# 执行appcon-install安装脚本后，输入对应的appconn名称\n# 按照提示输入对应schedulis服务对应的IP，和PORT\n>> schedulis\n>> 127.0.0.1\n>> 8089\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ul",[a("li")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://fintech.webank.com/en/wedatasphere/",target:"_blank",rel:"noopener noreferrer"}},[e._v("wedatasphere"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.bookstack.cn/books/DataSphereStudio-0.8-zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataSphere Studio v0.8 使用教程"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/d0e8b605c4ce#31-%E6%B6%89%E5%8F%8A%E7%BB%84%E4%BB%B6%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linkis1.0.2 安装及使用指南"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.qq.com/doc/DWlN4emlJeEJxWlR0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linkis1.0常见问题和解决办法"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.qq.com/doc/DSGZhdnpMV3lTUUxq",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataSphere 常见问题和解决办法"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/WeBankFinTech/Schedulis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schedulis"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/WeBankFinTech/DataSphereStudio-Doc/blob/main/zh_CN/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2/SchedulisAppConn%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schedulis AppConn安装说明"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);