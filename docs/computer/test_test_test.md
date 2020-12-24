# 测试学习
记录我在测试上的学习

## 快速起步

当前位置在**单元测试**阶段

![](https://pic4.zhimg.com/80/v2-a3495d64ebf42db53823bb9331e7ed2a_1440w.jpg?source=1940ef5c)

## 用例编写

TODO
- 等价类方法
- 边界值方法
- 因果图
- 判定表
- 状态迁移法
- 正交
- 场景

## 单元测试

以 `Go` 语言为入门

### Mock 使用

适合使用 mock/stub 场景是

- 数据库连接
- 文件I/O

### 注意事项

- 尽量不对 `http` 和 `net`库使用 mock，这样可以覆盖较为真实的场景

## 实践参考

参考 [dubbo-go](https://github.com/apache/dubbo-go) 的单元测试写法

## 相应工具

## 测试流程

## 避雷专区

使用 `sqlmock` 时，遇到的问题。

- 因为在调用过程中，会发生调用栈的问题

```
call to Query 'SQL' with args, was not expected, next expectation is: ExpectedBegin => expecting database transaction Begin
```

## 最终效果


## 参考
[新人如何入门和学习软件测试？ - 源码时代IT培训的回答](https://www.zhihu.com/question/22230085/answer/1363943205)
[Go Test 单元测试简明教程](https://geektutu.com/post/quick-go-test.html)

[Local Unit Testing for Go](https://cloud.google.com/appengine/docs/standard/go111/tools/localunittesting)

