# 单元测试

以 `Go` 语言为入门

### 参考

[Golang 单元测试：有哪些误区和实践？](https://developer.aliyun.com/article/778487)

[你懂SOLID原则吗？](https://mp.weixin.qq.com/s/JOVSkcC48qwoaByxUtgcFA)

### 类型

[TDD]()

[BDD]()，Behavior-Driven Development，行为测试框架，目前主流的有：

-  [Ginkgo](https://blog.gmem.cc/ginkgo-study-note)

相关的实践有 [dbtest](https://github.com/dche423/dbtest.git)

- 

### Mock 使用

数据需要隔离，所以使用 `sqlmock` 来实现，比如 [sqlmock-blog-demo](https://github.com/DATA-DOG/go-sqlmock/tree/master/examples/blog)



适合使用 mock/stub 场景是

- 数据库连接
- 文件I/O

### 注意事项

- 尽量不对 `http` 和 `net`库使用 mock，这样可以覆盖较为真实的场景

## 实践参考

参考 [dubbo-go](https://github.com/apache/dubbo-go) 的单元测试写法

## 避雷专区

使用 `sqlmock` 时，遇到的 [事务导致异常的ISSUE](https://github.com/DATA-DOG/go-sqlmock/issues/210) 的问题

- 因为在调用过程中，会发生调用栈的问题

```
call to Query 'SQL' with args, was not expected, next expectation is: ExpectedBegin => expecting database transaction Begin
```

## 

