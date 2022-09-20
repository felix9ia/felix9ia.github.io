# Keycloak 入门

## 主要功能

参考自 [spring-boot-keycloak](https://github.com/PhenJuly/spring-boot-keycloak)

- 单一登录（SSO）

  –用户通过在Keycloak中输入其凭据（通常为用户名和密码，但也可以使用其他方案）来进行身份验证，并且使用OpenId Connect协议交换有关用户身份和凭据的信息

  - 可自定义的主题为面向用户的页面
  - 不需要编写代码就能够登录Social Broker. Enable Google, Facebook, Yahoo, Twitter

- **一次注销** –注销一个应用程序将导致注销所有集成系统

- 多因素身份验证：

  - 使用多种渠道登录，例如用户/密码+一次性密码，邮箱，手机号码等
  - **支持几种内置的用户身份验证方案，并允许定义自己的方案**
  - **用户联合** –可以同步来自多个来源的用户身份，如自定义一个
  - **身份提供者**（三方登录） –可以使用标准协议在许多可配置的来源之一中对用户进行身份验证，如GitHub，微信授权等

- 灵活的认证和授权机制

- 实现了多种标准协议：OAuth 2，OIDC 1.0，SAML 2.0， Docker Auth

- 开箱即用，提供了基于UI，Restful接口以及Command Line的配置方式



## 概念

参考自 [spring-boot-keycloak](https://github.com/PhenJuly/spring-boot-keycloak)

- Realm : 领域，领域管理着一批用户、角色、应用程序等，一个用户只能属于且能登陆到一个域，域之间是互相独立的，域只能管理在它下面的用户。
- Clients：这里的Clients指的的是被keycloak保护的应用，比如说SSO中，的一个server，一个用户来访问这个server，如果请求中没有认证信息，将被redirect到keycloak，登录成功后再返回原server。
- Roles：对用户的权限管理，添加角色
- Users：就不用多说了，用户管理系统嘛
- Identity-Provider：提供了三方登录的方式，或是其他可以提供OICD等协议的用户系统
- User Federation：提供对接遗留系统的接口(个人理解是提供外部用户存储与keycloak用户存储结构的映射)
- Thems：keycloak提供了一组的用户登录界面，管理员界面注册，同时也支持自定义该界面的（支持自定义UI，即样式）
- client adapters：适配器，用于适配不同的语言，不同环境下整合keycloak

### Clients

关于客户端的访问类型（Access Type）
上面创建的2个客户端的访问类型分别是public、bearer-only，那么为什么分别选择这种类型，实际不同的访问类型有什么区别呢？

事实上，Keycloak目前的访问类型共有3种：

confidential：适用于服务端应用，且需要浏览器登录以及需要通过密钥获取access token的场景。典型的使用场景就是服务端渲染的web系统。

public：适用于客户端应用，且需要浏览器登录的场景。典型的使用场景就是前端web系统，包括采用vue、react实现的前端项目等。

bearer-only：适用于服务端应用，不需要浏览器登录，只允许使用bearer token请求的场景。典型的使用场景就是restful api。

### 

## 配置

### 文件配置

配置 MySQL 数据源：

```
SELECT SCHEMA_NAME 'database', DEFAULT_CHARACTER_SET_NAME 'charset', DEFAULT_COLLATION_NAME 'collation' FROM information_schema.SCHEMATA;
ALTER DATABASE keycloak CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

需要指定数据库驱动

```xml
 <datasources>
    <datasource jndi-name="java:jboss/datasources/KeycloakDS" pool-name="KeycloakDS" enabled="true" use-java-context="true" statistics-enabled="${wildfly.datasources.statistics-enabled:${wildfly.statistics-enabled:false}}">
        <connection-url>jdbc:mysql://10.18.101.12:3306/keycloak?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</connection-url>
        <driver>mysql</driver>
        <security>
            <user-name>KeyCloakWUser</user-name>
            <password>KeyCloakWUser_Neu2022</password>
        </security>
    </datasource>
    <drivers>
        <driver name="mysql" module="com.mysql">
            <xa-datasource-class>com.mysql.cj.jdbc.MysqlXADataSource</xa-datasource-class>
        </driver>
    </drivers>
</datasources>
```



如果要web后台端口为 `58089` 的话，请修改以下：

```xml
 <socket-binding-group name="standard-sockets" default-interface="public" port-offset="${jboss.socket.binding.port-offset:0}">
    <socket-binding name="http" port="${jboss.http.port:58089}"/>
</socket-binding-group>
```

### client 配置

以下截图都是在这个配置下完成的

```
{
  "realm": "neom-superaccountmgr",
  "auth-server-url": "http://172.15.0.26:58099/auth/",
  "ssl-required": "external",
  "resource": "neom-superaccountmgr001",
  "credentials": {
    "secret": "EZEoDfb0fXfBwLf5sYY06IjgBfkppyuG"
  },
  "confidential-port": 0
}
```

配置

![image-20220920152426751](https://tva1.sinaimg.cn/large/e6c9d24egy1h6d3mmb7esj21ek0u0dj6.jpg)

## 使用

配置

[KEYCLOAK SSL-REQUIRED报错问题处理](https://www.freesion.com/article/6504127961/)

EXTERNAL

```
update REALM set ssl_required='NONE' where id = 'ecae792b-c6c1-44ae-8bd9-e7d9cf12db66';
update REALM set ssl_required='NONE' where NAME = 'master';

# 备份

UPDATE `keycloak`.`REALM` SET `ACCESS_CODE_LIFESPAN` = 60, `USER_ACTION_LIFESPAN` = 300, `ACCESS_TOKEN_LIFESPAN` = 60, `ACCOUNT_THEME` = NULL, `ADMIN_THEME` = NULL, `EMAIL_THEME` = NULL, `ENABLED` = b'1', `EVENTS_ENABLED` = b'0', `EVENTS_EXPIRATION` = 0, `LOGIN_THEME` = NULL, `NAME` = 'master', `NOT_BEFORE` = 0, `PASSWORD_POLICY` = NULL, `REGISTRATION_ALLOWED` = b'0', `REMEMBER_ME` = b'0', `RESET_PASSWORD_ALLOWED` = b'0', `SOCIAL` = b'0', `SSL_REQUIRED` = 'EXTERNAL', `SSO_IDLE_TIMEOUT` = 1800, `SSO_MAX_LIFESPAN` = 36000, `UPDATE_PROFILE_ON_SOC_LOGIN` = b'0', `VERIFY_EMAIL` = b'0', `MASTER_ADMIN_CLIENT` = '91280bce-27e3-4f05-a7f7-68c5101834d8', `LOGIN_LIFESPAN` = 1800, `INTERNATIONALIZATION_ENABLED` = b'0', `DEFAULT_LOCALE` = NULL, `REG_EMAIL_AS_USERNAME` = b'0', `ADMIN_EVENTS_ENABLED` = b'0', `ADMIN_EVENTS_DETAILS_ENABLED` = b'0', `EDIT_USERNAME_ALLOWED` = b'0', `OTP_POLICY_COUNTER` = 0, `OTP_POLICY_WINDOW` = 1, `OTP_POLICY_PERIOD` = 30, `OTP_POLICY_DIGITS` = 6, `OTP_POLICY_ALG` = 'HmacSHA1', `OTP_POLICY_TYPE` = 'totp', `BROWSER_FLOW` = '20fce52f-ea0f-4cbe-a9b7-71c8175ecf4f', `REGISTRATION_FLOW` = 'ecae792b-c6c1-44ae-8bd9-e7d9cf12db66', `DIRECT_GRANT_FLOW` = 'c3c3331a-92e5-450c-afa0-900626144347', `RESET_CREDENTIALS_FLOW` = '13164980-038c-4483-b803-6d2d27122a08', `CLIENT_AUTH_FLOW` = 'd8a7c84c-d58e-4c64-97de-65d0f58371f3', `OFFLINE_SESSION_IDLE_TIMEOUT` = 2592000, `REVOKE_REFRESH_TOKEN` = b'0', `ACCESS_TOKEN_LIFE_IMPLICIT` = 900, `LOGIN_WITH_EMAIL_ALLOWED` = b'1', `DUPLICATE_EMAILS_ALLOWED` = b'0', `DOCKER_AUTH_FLOW` = 'c4c1aa91-d885-4a6f-b745-e8a68ce04d7d', `REFRESH_TOKEN_MAX_REUSE` = 0, `ALLOW_USER_MANAGED_ACCESS` = b'0', `SSO_MAX_LIFESPAN_REMEMBER_ME` = 0, `SSO_IDLE_TIMEOUT_REMEMBER_ME` = 0, `DEFAULT_ROLE` = '7507a0b8-8486-46e7-b595-4bbb4f423a61' WHERE `ID` = '84b3f35f-aee5-4de0-96a9-70f0c7be093b';
```

OR

```
<interfaces>
        <interface name="management">
            <inet-address value="${jboss.bind.address.management:0.0.0.0}"/>
        </interface>
        <interface name="private">
            <inet-address value="${jboss.bind.address.private:127.0.0.1}"/>
        </interface>
        <interface name="public">
            <inet-address value="${jboss.bind.address:0.0.0.0}"/>
        </interface>
    </interfaces>
```

换成

```
<interface name="management">
	<any-address/>
</interface>
<interface name="public">
	<any-address/>
</interface>
```

### 添加用户

```
sh bin/add-user-keycloak.sh -u admin
```

### 启动

使用

```
netstat -nuptl
```

### 停止

https://www.baeldung.com/jboss-start-stop

http://www.mastertheboss.com/jbossas/jboss-configuration/how-to-start-stop-and-restart-wildfly/

## 集群部署



## 参考

### 部署

[OpenID Connect Basic Client Implementer's Guide 1.0](https://openid.net/specs/openid-connect-basic-1_0.html)

[ Keycloak 基本概念](https://wukong-doc.redhtc.com/security/solution/keycloak-knowledge/#:~:text=1.%20%E5%8A%9F%E8%83%BD%E4%B8%8E%E6%A6%82%E5%BF%B5,%E4%B8%89%E6%96%B9%E7%99%BB%E5%BD%95%E8%BF%9B%E8%A1%8C%E4%BA%92%E8%81%94%E4%BA%92%E9%80%9A%E3%80%82)

[keycloak-18.0.1- standalone-ha-mode](https://www.keycloak.org/docs/latest/server_installation/#_standalone-ha-mode)

[Keycloak GitBook 文档](https://guo218215-126-com.gitbooks.io/keycloakbook/content/)

[使用编码方式实现keycloak用户注册、登陆、客户端创建、realm创建](https://blog.csdn.net/Mzhen1991/article/details/111921229)

[quarkus 官网](https://quarkus.io/)

[能看懂的keycloak使用文档](https://keycloak.redhtc.com/)

### 配置

[字符的问题[keycloak 9.0.2] mysql Error: Row size too large #](https://github.com/codecentric/helm-charts/issues/213)

[SpringBoot开发Keycloak token的获取以及校验](https://blog.csdn.net/m0_46267097/article/details/106211466)

[keycloak接入Springboot](https://blog.csdn.net/m0_46527847/article/details/113407764)

[快速启动Keycloak](https://blog.csdn.net/luo15242208310/article/details/120471870)

[Setting up Keycloak and Securing Spring Boot Rest APIs](https://systemweakness.com/setting-up-keycloak-and-securing-spring-boot-rest-apis-1765a85f5ac4)

https://github.com/thomasdarimont/spring-boot-admin-keycloak-example/blob/master/admin-service/src/main/java/demo/admin/keycloak/KeycloakConfig.java

[PKCE Verification in Authorization Code Grant](https://www.appsdeveloperblog.com/pkce-verification-in-authorization-code-grant/)

### 集群

[keycloak集群化的思考](https://www.cnblogs.com/flydean/p/14273056.html)

[玩转keycloak集群部署-协议JDBC_PING](https://jishuin.proginn.com/p/763bfbd70c95)
