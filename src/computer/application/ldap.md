---
time: 2021-7-27




---

# 用 Java 将 LdapTemplate 二次封装为 maven 公共工具包

原定为两种方案

- 使用 Apache 的 [Apache LDAP Java API](https://directory.apache.org/api/java-api.html) 

- 集成 spring 中 ldap 相关的包

主要参考了 [Spring LDAP的使用](https://blog.csdn.net/ljheee/article/details/78749026)，将 `LdapTemplate` 进行二次封装。

```
<dependency>
            <groupId>org.springframework.ldap</groupId>
            <artifactId>spring-ldap-core</artifactId>
            <version>2.3.2.RELEASE</version>
</dependency>
```

然后将这个累使用单例模式进行单例化，最终的代码如下：

```
package ai.neuvision.sdk.logserver.auth.ldap;

import ai.neuvision.sdk.logserver.auth.entity.AxztLdapUser;
import ai.neuvision.sdk.logserver.auth.ldap.exception.AxztLdapAuthException;
import ai.neuvision.sdk.logserver.auth.ldap.mapper.AxztUserAttributeMapper;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.ldap.filter.AndFilter;
import org.springframework.ldap.filter.EqualsFilter;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * ladp 校验器
 *
 * @author jiapengfei
 */
public class AxztLdapKeeper {

    private static LdapTemplate ldapTemplate;
    // TODO 写到配置文件当中
    public static final String LDAP_URL = "ldap://x.x.x.x:389";
    public static final String BASE = "dc=xxxx,dc=xxx";
    public static final String LDAP_USERDN = "cn=xxx,dc=xxxx,dc=xxx";
    public static final String LDAP_PASSWORD = "xxxxxx";


    /**
     * 私有的静态内部类，用于持有一个静态 final 实例
     */
    private static class LdapKeeperClassInstance {
        private static final AxztLdapKeeper instance = new AxztLdapKeeper();
    }

    static {
        LdapContextSource contextSource = new LdapContextSource();
        contextSource.setUrl(LDAP_URL);
        contextSource.setBase(BASE);
        contextSource.setUserDn(LDAP_USERDN);
        contextSource.setPassword(LDAP_PASSWORD);
        contextSource.setPooled(true);
        Map<String, Object> config = new HashMap();
        //  解决 乱码 的关键一句
        config.put("java.naming.ldap.attributes.binary", "objectGUID");
        contextSource.setBaseEnvironmentProperties(config);
        contextSource.afterPropertiesSet();

        ldapTemplate = new LdapTemplate(contextSource);
    }

    // 私有化构造函数,禁止外部构建
    private AxztLdapKeeper() {
    }

    public static AxztLdapKeeper getInstance() {
        return LdapKeeperClassInstance.instance;
    }

    /**
     * 查找所有的用户
     *
     * @return .
     */
    public List<AxztLdapUser> findAll() {
        AndFilter filter = new AndFilter();
        filter.and(new EqualsFilter("objectClass", "person"));

        //查询所有内部人员
        List<AxztLdapUser> users = ldapTemplate.search("ou=People", filter.encode(), new AxztUserAttributeMapper());
        return users;
    }

    /**
     * 查找用户
     *
     * @return
     */
    public AxztLdapUser findByUsername() {
        return null;
    }

    /**
     * 校验用户
     *
     * @param user
     * @return
     */
    public boolean authenticate(AxztLdapUser user) {
        if (StringUtils.isEmpty(user.getUsername()) || StringUtils.isEmpty(user.getPassword())) {
            throw new AxztLdapAuthException("you must set username and password together");
        }

        try {
            AndFilter filter = new AndFilter();
            filter.and(new EqualsFilter("objectClass", "person")).and(new EqualsFilter("cn", user.getUsername()));
            return ldapTemplate.authenticate("", filter.encode(), user.getPassword());
        } catch (Exception e) {
            throw new AxztLdapAuthException("got exception when call authenticate: " + e);
        }

    }


}
```



## 参考

[openldap介绍和使用](https://www.cnblogs.com/woshimrf/p/ldap.html)

[线程池工具类（单例模式）](https://tuonioooo-notebook.gitbook.io/java-concurrent/di-er-zhang-java-xian-cheng-chi-yu-kuang-jia/xian-cheng-chi-gong-ju-lei)

