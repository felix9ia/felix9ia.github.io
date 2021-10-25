

# Spring 打包相关

以下是对打包流程的梳理：

## 打包方式：

### 1. spring-boot-maven-plugin

涉及到的插件如下：

```
            <plugin>
                 <groupId>org.springframework.boot</groupId>
                 <artifactId>spring-boot-maven-plugin</artifactId>
                 <executions>
                     <execution>
                         <goals>
                             <goal>repackage</goal>
                         </goals>
                     </execution>
                 </executions>
             </plugin>
```



特点是，将应用程序和相应的依赖都打包到一个独立的jar当中，打出来的是`fat jar`，可以直接运行。

带有以下目录

- lib 目录
- spring boot loader 相关类





### 2. maven-jar-plugin + maven-dependency-plugin



**maven-jar-plugin**：

提供 `manifest` 配置，只包括当前模块的 jar，不包含依赖 jar，无法直接启动。



优点是结合 `maven-assembly-plugin` 打成压缩文件, 以后只需要传送更改项目 jar 包即可。

```

            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
            </plugin>
```

 **maven-dependency-plugin：**

负责拷贝到 lib 目录, 用得最多的几个操作：copy, copy-dependencies

```
  <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-dependency-plugin</artifactId>
                <version>3.1.0</version>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>copy-dependencies</goal>
                        </goals>
                        <configuration>
                            <!--输出位置-->
                                  <outputDirectory>${project.build.directory}/lib</outputDirectory>
                            <overWriteReleases>false</overWriteReleases>
                            <overWriteSnapshots>false</overWriteSnapshots>
                            <overWriteIfNewer>true</overWriteIfNewer>
                            <includeScope>compile</includeScope>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
```





### 3. maven-assembly-plugin：

会把项目中的所有文件全部都放到一个文件当中：

```
     <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>3.1.0</version>
                <configuration>
                    <descriptors>
                        <descriptor>src/main/assembly/assembly.xml</descriptor>
                    </descriptors>
                    <archive>
                        <manifest>
                            <mainClass>ai.neuvision.NvmAdminApplication</mainClass>
                        </manifest>
                    </archive>
                </configuration>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>

                    </execution>
                </executions>
            </plugin>
```



### 4. maven-shade-plugin

生成的 jar 文件包含了所有的依赖，



## 其他相关包

1. maven-dependency-plugin

   复制项目的依赖包到指定目录

2. maven-resources-plugin

还有一些其他环节的包

### maven-compiler-plugin

在 compile 阶段起作用，和 package 无关

## 参考

[Maven打包的三种方式](https://www.cnblogs.com/fnlingnzb-learner/p/11119799.html)

[spring-boot-maven-plugin和maven-jar-plugin的区别](https://blog.csdn.net/weixin_41763571/article/details/117780466)

[spring boot中打包插件spring-boot-maven-plugin和maven-jar-plugin的关联](https://blog.csdn.net/sinat_37729104/article/details/103118911?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control)

[Spring Boot项目使用maven-assembly-plugin根据不同环境打包成tar.gz或者zip](https://www.jianshu.com/p/1580e7220cd3)

