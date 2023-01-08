# 接入 stripe

https://neuvision.yeecall.com:1443/superpay/callback/stripe

## 各个客户端

web

-  [Checkout Session](https://stripe.com/docs/api/checkout/sessions) 为了指定 stripe 确认订单的信息

![image-20220704120058894](/Users/lfcp/Library/Application Support/typora-user-images/image-20220704120058894.png)

ios 



- 点击 Apple Pay 创建 PKPaymentRequest 付款请求，会弹出 Pay 的弹窗，显示公司名称和支付的金额。
- PaymentMethod 指定扣款的卡 https://stripe.com/docs/api/payment_methods/create
- 呈现 Apple Pay 表单
- 服务端创建 PaymentIntent

旧

[在服务器上确认银行卡付款旧版](https://stripe.com/docs/payments/accept-a-payment-synchronously?platform=web)

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3vcrisl80j21pc0tcwht.jpg)

新，需要打招呼使用

[Finalize payments on the server 新版](https://stripe.com/docs/payments/finalize-payments-on-the-server)

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3vcrtngocj21b50u076d.jpg)

## 回调

https://stripe.com/docs/payments/handling-payment-events 在 [webhooks](https://dashboard.stripe.com/webhooks) 中添加回调地址，

重试机制 [提交尝试和重试](https://stripe.com/docs/webhooks/best-practices#events-and-retries)



```
stripe listen --forward-to http://localhost:58081/superpay/callback/stripe

stripe listen --forward-to http://localhost:58081/superpay/callback/stripe --log-level debug
```



### Payment 状态

可以通过 [event_types-payment_intent ](https://stripe.com/docs/api/events/types#event_types-payment_intent.succeeded)查看

## 测试

查看该文档 [处理 webhook 事件](https://stripe.com/docs/payments/handling-payment-events) 以获得支持,涉及到 CLI 则[cli-webhook](https://stripe.com/docs/webhooks/test)

在此页面查看 [测试](https://stripe.com/docs/testing#use-test-cards) 相关流程



```
stripe trigger payment_intent.succeeded
```



## 退款和取消付款

请参考[退款和取消付款](https://stripe.com/docs/refunds?locale=zh-CN)



## 参考

[测试密钥](https://stripe.com/docs/keys)

[Finalize card payments on the server Legacy](https://stripe.com/docs/payments/accept-a-payment-synchronously?platform=ios)

[收款](https://stripe.com/docs/payments/accept-a-payment?platform=web)

[添加收款方式 - Apple Pay](https://stripe.com/docs/apple-pay)