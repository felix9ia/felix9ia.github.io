---
time: 2021-10-25




---
## SSL 证书

有以下的证书类型：

- cert.pem

  务端证书

- chain.pem

  浏览器需要的所有证书但不包括服务端证书，比如根证书和中间证书

- fullchain.pem

  包括了cert.pem和chain.pem的内容

- privkey.pem

  证书的私钥