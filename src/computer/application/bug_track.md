# 问题跟踪技巧

无法上传专票的问题已得到暂时解决，后续待优化。望悉知



问题发生频率：概率性出现

涉及范围：增值税专用发票

问题结论：初步定位问题时给出的，**供应商系统的验证码问题的结论是错误的**，是由于依赖的财务系统中的**第三方接口的校验不稳定**等导致的。



当前解决方案：无需更新代码，让供应商页面多次重试保存

计划优化方案：供应商系统通过代码层面多次重试财务系统

理想优化方案：方案需要财务系统给出

问题持续时间：该问题从 **7 月 10 日**出现一直持续到现在( 8 月 9 日)，在优化之前将一直持续下去

后续加强：

- 供应商系统会做好系统巡检和主动异常自动化报警，降低这种问题的出现的概率。



内部

后续加强：

- 确定 bug 影响范围，bug 复现后再给出结论，不提前做任何的主观判断
- 加强对业务流程的熟悉，更准确的定义系统边界
- 做好系统的每日线上巡检以及关键流程的异常自动化报警，做到研发比业务早一步发现问题。

