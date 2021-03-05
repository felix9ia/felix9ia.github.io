---
time: 2020-3-5




---

# 

# SSH 使用注意事项

这里用于记录如何使用 `ssh`



## 步骤

### 通用配置

无需特殊配置，一路回车。
```
# 生成
ssh-keygen

# 上传
scp -v  ~/.ssh/id_rsa.pub felix@124.156.137.131:~/.ssh/authorized_keys/
```

### 客户端


```
# 复制下面的输出的文本
cat ~/.ssh/id_rsa.pub
```

### 服务端

```
# 

```






## 注意事项

- 报 `Permission denied (publickey,gssapi-keyex,gssapi-with-mic).`

应该是服务器没有相应的配置项。


- 