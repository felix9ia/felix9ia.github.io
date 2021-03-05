---
time: 2020-3-5



---

# Go 多模块构建方案

思考：为什么 Golang 没有像 `Maven` 或者 `Cargo` 的构建工具？

个人猜测是遵循了[奥卡姆剃刀](https://zh.wikipedia.org/wiki/%E5%A5%A5%E5%8D%A1%E5%A7%86%E5%89%83%E5%88%80) 的`Do not multiply entities beyond necessity`的设计哲学。

> “切勿浪费多余工夫去做本可以较少工夫完成之事”

> ​	在[自然科学](https://zh.wikipedia.org/wiki/自然科学)中，奥卡姆剃刀被作为[启发法](https://zh.wikipedia.org/wiki/启发法)技巧来使用，更多地作为帮助[科学家](https://zh.wikipedia.org/wiki/科学家)发展理论模型的工具，而不是在已经发表的理论之间充当裁判角色。[[7\]](https://zh.wikipedia.org/wiki/奥卡姆剃刀#cite_note-fn_(100)-7)[[8\]](https://zh.wikipedia.org/wiki/奥卡姆剃刀#cite_note-fn_(101)-8)在[科学方法](https://zh.wikipedia.org/wiki/科学方法)中，奥卡姆剃刀并没有被当做逻辑上不可辩驳的定理或者科学结论。在科学方法中对简单性的偏好，是基于[可证伪性](https://zh.wikipedia.org/wiki/可证伪性)的标准。对于某个现象的所有可接受的解释，都存在无数个可能的、更为复杂的变体：因为你可以把任何解释中的错误归结于[特例假设](https://zh.wikipedia.org/wiki/特例假設)，从而避免该错误的发生。所以，较简单的理论比复杂的理论更好，因为它们更加可检验。

这其实就是师父一直强调的:

> ”把复杂的事情简单化，而不是把简单的事情复杂化”

在我最近的工程实践中，我个人总结出了两种构建方案，而后者我认为是比较优质的

这里主要参考了[dubbo-go-samples](https://github.com/apache/dubbo-go-samples) 提供的构建方案。





