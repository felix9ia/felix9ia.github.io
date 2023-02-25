---
time: 2022-8-4




---
# 支付入门

对 apple pay 和 Google Pay 进行了接入的调研，以下是汇总信息。

| 前置认知                  |                                  | Apple Pay                               | Google Pay |
| ------------------------- | -------------------------------- | --------------------------------------- | ---------- |
| 接入方式                  | ✅通过支付供应商的 SDK 接入       | 通过支付供应商的 SDK 接入               |            |
| 通过支付供应商的 API 接入 | 通过支付供应商的 API 接入        |                                         |            |
| 支付供应商                | ✅ 国内 - 银联                    | 无                                      |            |
| 国外 - 待定               | 国外 - 待定                      |                                         |            |
| 前置条件                  | 商户号申请                       | 1、生成 Merchant ID 证书（API方式接入） | TODO       |
|                           | 2、申请支付供应商商户            | TODO                                    |            |
| 开发                      | 测试                             | ✅沙盒支持                               | TODO       |
| 线上                      | 国外环境是否支持国内银联支付待定 | TODO                                    |            |

## TODO

目前需要选择当地具体的支付供应商，才能进行下一步推进和开发

 Apple Pay 支付服务商列表

https://developer.apple.com/cn/apple-pay/payment-platforms/

Google Pay  支付服务商列表

 https://developers.google.com/pay/api

## 内购与 Pay 的区别

内购是指你购买的商品，是在本app中使用和消耗的，如：订阅，打赏，游戏币，在线书籍，app中使用的道具等虚拟产品。

- 商品维护在人家的服务器之上

- **内购是要收取手续费的**，苹果是收 30%。

Pay 简单说是一种“支付工具”，是指购买普通商品等。

## **Apple Pay**

以下是 apple pay 相关的调研

### 接入方式

接入方式有两种，以下：

- #### 支付供应商的 API 接入

- -  优点：

  - SDK 不需要集成，不占用总包的大小
  - 灵活，证书和密钥都由接入商户自己管理
  - iOS 开发者需要自己控制和处理 Apple Pay 的 UI 展示和交互
  -  缺点：

  - 流程变长，取消支付带来的一些重复支付的异常
  - ![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzoa0jnvj20kz0jowfb.jpg)

#### 支付供应商的 SDK 接入**（推荐）**

- 苹果建议直接接入支付供应商的 SDK 来完成支付交互。

- ![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzozm1m0j20nz05bjrw.jpg)

- - ![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzosg3dzj20g00degm0.jpg)

  -  优点：

  - 接入容易，证书和密钥都是由银联生成，APP 开发用银联提供的 CSR 文件生成 Apple Pay 证书并绑定。
  -  缺点

  - 证书和密钥更新麻烦
  - Apple Pay 的页面展示完全由银联 SDK 控制，当需要增加展示项时，需要向外部寻求银联 SDK 的支持。
  -  以[银联的 SDK](https://open.unionpay.com/tjweb/acproduct/list?apiSvcId=460&index=2) 为例：

  - ![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzphn3l1j20u10pa775.jpg)

### 国内外支付供应商

目前调研结果以国内为主，国外供应商如何接入待定。

#### 国内供应商

[国内的支付供应商](https://developer.apple.com/cn/apple-pay/payment-platforms/)有以下：

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzq5d26vj20zk0rpwg6.jpg)

而在这几家中，国内大部分都选择接入银联。

**银联** **SDK****（推荐）**

银联支持两种方式，[银联 Apple Pay SDK 接入](https://open.unionpay.com/tjweb/acproduct/list?apiSvcId=460&index=2)，[银联 Apple Pay API 接入](https://open.unionpay.com/tjweb/acproduct/APIList?acpAPIId=680&apiservId=460&version=V2.2&bussType=0)，推荐前者。

#### 国外供应商

而国外，是根据不同国家来细分的，具调研材料当中提到的有以下：

- Adyen 

-  SoftBank 

### 前置流程

前置流程如下：

#### 申请商户号

- 去苹果申请
  -  生成 Merchant ID 证书，[ Setting Up Apple Pay](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay)

  - ![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzqqehimj20zk0f0di2.jpg)

- 去银联申请
  -  要去到[商户服务电子化入网平台](https://merchant.unionpay.com/join/help/director)去申请商户

### 开发

如果接入银联，可以参考[ApplePay 接入教程及开发过程需要注意的点](https://www.jianshu.com/p/8691d9bfb8ad)

### 测试

苹果支持在[沙盒](https://developer.apple.com/cn/apple-pay/sandbox-testing/)中进行测试

### 待确定问题

- 银联能否在国外环境当中使用？

## **Google Pay**

以下是 Google Pay 的接入调研

### 接入方式

同 Apple Pay 相同，也是通过支付供应商的两种方式

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzr18nt8j20fk0hiaaj.jpg)

以下以 [noonpayments](https://docs.noonpayments.com/payment-method/googlepay/hosted) 为例，

#### 支付供应商的 API 接入

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzr736ekj20uq0mm0ub.jpg)

#### 支付供应商的 SDK 接入**（推荐）**

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wzre5trgj20r70qaq4t.jpg)



## 小程序支付

以下是 [小程序支付开发指引](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_2.shtml) 所



![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3wziseflej20u0151mzq.jpg)

[支付回调和查单实现指引](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Practices/chapter1_1_1.shtml) 以及 [查询订单API](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_1_2.shtml)

## 账单查询

参考阿里的 [账户流水收支明细查询接口](https://help.aliyun.com/document_detail/118472.html)

| 名称                 | 类型    | 是否必选 | 示例值                   | 描述                                                         |
| :------------------- | :------ | :------- | :----------------------- | :----------------------------------------------------------- |
| Action               | String  | 是       | QueryAccountTransactions | 系统规定参数。取值：**QueryAccountTransactions**。           |
| TransactionNumber    | String  | 否       | 133314076                | 交易编号。                                                   |
| RecordID             | String  | 否       | 20200302                 | 订单/账单号。                                                |
| TransactionChannelSN | String  | 否       | 12342134                 | 交易渠道流水号。                                             |
| CreateTimeStart      | String  | 否       | 2020-03-05T01:46:09Z     | 创建时间段起，格式例：2018-01-01T00:00:00Z。                 |
| CreateTimeEnd        | String  | 否       | 2020-03-06T01:55:00Z     | 创建时间段止，默认查询时间往前一个月。格式例：2018-01-01T00:00:00Z。 |
| PageNum              | Integer | 否       | 1                        | 页码。                                                       |
| PageSize             | Integer | 否       | 10                       | 每页显示条数。                                               |
| TransactionType      | String  | 否       | Payment                  | 交易类型。传入以下交易类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。充值：Payment。提现：Withdraw。退款：Refund。消费：Consumption。转账：Transfer。调账：Adjust。 |
| TransactionFlow      | String  | 否       | Income                   | 收支类型。传入以下收支类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。收入：Income。支出：Expense。 |
| TransactionChannel   | String  | 否       | AccountBalance           | 交易渠道。传入以下交易渠道类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。用户余额：AccountBalance。银行转账： BankTransfer。支付宝：Alipay。支付宝花呗：AntCreditPay。线下汇款：OfflineRemittance。信控额度退款：RegularBankCreditRefund。信用卡：CreditCard。网商银行信任付：MyBankCredit。华夏银行分期付：HuaxiaBankCInstallment。苹果支付：ApplePay |

## **参考**



[为 Apple Pay 做好规划](https://developer.apple.com/cn/apple-pay/planning/)

[关于Apple Pay接入和开发，看这一篇就够了](https://juejin.cn/post/6844903657427697672)

[ApplePay 接入教程及开发过程需要注意的点](https://www.jianshu.com/p/8691d9bfb8ad)

[iOS Apple Pay开发流程](https://zhuanlan.zhihu.com/p/270188563)

[银联 Apple Pay SDK 接入](https://open.unionpay.com/tjweb/acproduct/list?apiSvcId=460&index=2)

[银联 Apple Pay API 接入](https://open.unionpay.com/tjweb/acproduct/APIList?acpAPIId=680&apiservId=460&version=V2.2&bussType=0)

[Google Pay for Payments](https://developers.google.com/pay/api)

[Google Pay接入流程](https://juejin.cn/post/6844903858615894023)

[Android接入Google Play和Pay流程和踩坑](https://blog.csdn.net/Ycocol/article/details/121630714)

