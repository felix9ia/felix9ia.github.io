(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{530:function(n,s,a){"use strict";a.r(s);var e=a(1),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"用-java-将-ldaptemplate-二次封装为-maven-公共工具包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-java-将-ldaptemplate-二次封装为-maven-公共工具包"}},[n._v("#")]),n._v(" 用 Java 将 LdapTemplate 二次封装为 maven 公共工具包")]),n._v(" "),a("p",[n._v("原定为两种方案")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("使用 Apache 的 "),a("a",{attrs:{href:"https://directory.apache.org/api/java-api.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Apache LDAP Java API"),a("OutboundLink")],1)])]),n._v(" "),a("li",[a("p",[n._v("集成 spring 中 ldap 相关的包")])])]),n._v(" "),a("p",[n._v("主要参考了 "),a("a",{attrs:{href:"https://blog.csdn.net/ljheee/article/details/78749026",target:"_blank",rel:"noopener noreferrer"}},[n._v("Spring LDAP的使用"),a("OutboundLink")],1),n._v("，将 "),a("code",[n._v("LdapTemplate")]),n._v(" 进行二次封装。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("<dependency>\n            <groupId>org.springframework.ldap</groupId>\n            <artifactId>spring-ldap-core</artifactId>\n            <version>2.3.2.RELEASE</version>\n</dependency>\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("p",[n._v("然后将这个累使用单例模式进行单例化，最终的代码如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('package ai.neuvision.sdk.logserver.auth.ldap;\n\nimport ai.neuvision.sdk.logserver.auth.entity.AxztLdapUser;\nimport ai.neuvision.sdk.logserver.auth.ldap.exception.AxztLdapAuthException;\nimport ai.neuvision.sdk.logserver.auth.ldap.mapper.AxztUserAttributeMapper;\nimport org.springframework.ldap.core.LdapTemplate;\nimport org.springframework.ldap.core.support.LdapContextSource;\nimport org.springframework.ldap.filter.AndFilter;\nimport org.springframework.ldap.filter.EqualsFilter;\nimport org.springframework.util.StringUtils;\n\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\n/**\n * ladp 校验器\n *\n * @author jiapengfei\n */\npublic class AxztLdapKeeper {\n\n    private static LdapTemplate ldapTemplate;\n    // TODO 写到配置文件当中\n    public static final String LDAP_URL = "ldap://x.x.x.x:389";\n    public static final String BASE = "dc=xxxx,dc=xxx";\n    public static final String LDAP_USERDN = "cn=xxx,dc=xxxx,dc=xxx";\n    public static final String LDAP_PASSWORD = "xxxxxx";\n\n\n    /**\n     * 私有的静态内部类，用于持有一个静态 final 实例\n     */\n    private static class LdapKeeperClassInstance {\n        private static final AxztLdapKeeper instance = new AxztLdapKeeper();\n    }\n\n    static {\n        LdapContextSource contextSource = new LdapContextSource();\n        contextSource.setUrl(LDAP_URL);\n        contextSource.setBase(BASE);\n        contextSource.setUserDn(LDAP_USERDN);\n        contextSource.setPassword(LDAP_PASSWORD);\n        contextSource.setPooled(true);\n        Map<String, Object> config = new HashMap();\n        //  解决 乱码 的关键一句\n        config.put("java.naming.ldap.attributes.binary", "objectGUID");\n        contextSource.setBaseEnvironmentProperties(config);\n        contextSource.afterPropertiesSet();\n\n        ldapTemplate = new LdapTemplate(contextSource);\n    }\n\n    // 私有化构造函数,禁止外部构建\n    private AxztLdapKeeper() {\n    }\n\n    public static AxztLdapKeeper getInstance() {\n        return LdapKeeperClassInstance.instance;\n    }\n\n    /**\n     * 查找所有的用户\n     *\n     * @return .\n     */\n    public List<AxztLdapUser> findAll() {\n        AndFilter filter = new AndFilter();\n        filter.and(new EqualsFilter("objectClass", "person"));\n\n        //查询所有内部人员\n        List<AxztLdapUser> users = ldapTemplate.search("ou=People", filter.encode(), new AxztUserAttributeMapper());\n        return users;\n    }\n\n    /**\n     * 查找用户\n     *\n     * @return\n     */\n    public AxztLdapUser findByUsername() {\n        return null;\n    }\n\n    /**\n     * 校验用户\n     *\n     * @param user\n     * @return\n     */\n    public boolean authenticate(AxztLdapUser user) {\n        if (StringUtils.isEmpty(user.getUsername()) || StringUtils.isEmpty(user.getPassword())) {\n            throw new AxztLdapAuthException("you must set username and password together");\n        }\n\n        try {\n            AndFilter filter = new AndFilter();\n            filter.and(new EqualsFilter("objectClass", "person")).and(new EqualsFilter("cn", user.getUsername()));\n            return ldapTemplate.authenticate("", filter.encode(), user.getPassword());\n        } catch (Exception e) {\n            throw new AxztLdapAuthException("got exception when call authenticate: " + e);\n        }\n\n    }\n\n\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/woshimrf/p/ldap.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("openldap介绍和使用"),a("OutboundLink")],1)]),n._v(" "),a("p",[a("a",{attrs:{href:"https://tuonioooo-notebook.gitbook.io/java-concurrent/di-er-zhang-java-xian-cheng-chi-yu-kuang-jia/xian-cheng-chi-gong-ju-lei",target:"_blank",rel:"noopener noreferrer"}},[n._v("线程池工具类（单例模式）"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);