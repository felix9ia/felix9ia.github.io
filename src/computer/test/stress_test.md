# 压力测试

关注的指标

- 吞吐量（TPS）
- 响应时间
- 错误数量

## 详解

以下是对指标的详解

### Main Statistics

| Name    | highest 10sec mean | lowest 10sec mean | Highest Rate | Mean Rate    | Mean      | Count  |
| :------ | :----------------- | :---------------- | :----------- | :----------- | :-------- | :----- |
| connect | 9.98 msec          | 2.29 msec         | 1416.1 / sec | 110.03 / sec | 2.97 msec | 105705 |
| page    | 10mn 0sec          | 2.08 sec          | 1719.7 / sec | 93.45 / sec  | 29.91 sec | 89724  |
| request | 10mn 0sec          | 2.08 sec          | 1719.7 / sec | 93.45 / sec  | 29.91 sec | 89724  |
| session | 10mn 0sec          | 1.88 sec          | 1679 / sec   | 119.16 / sec | 1mn 47sec | 114395 |

### Transactions Statistics

| Name | highest 10sec mean | lowest 10sec mean | Highest Rate | Mean Rate | Mean | Count |
| :--- | :----------------- | :---------------- | :----------- | :-------- | :--- | :---- |
|      |                    |                   |              |           |      |       |

### Network Throughput

| Name      | Highest Rate   | Total    |
| :-------- | :------------- | :------- |
| size_rcv  | 4.38 Mbits/sec | 32.03 MB |
| size_sent | 2.41 Mbits/sec | 22.48 MB |

### Counters Statistics

| Name | Highest Rate | Mean Rate | Total number |
| :--- | :----------- | :-------- | :----------- |
|      |              |           |              |



| Name               | Max    |
| :----------------- | :----- |
| connected          | 28227  |
| finish_users_count | 114396 |
| newphase           | 5      |
| users              | 28285  |
| users_count        | 114396 |



### Errors

| Name                         | Highest Rate | Total number |
| :--------------------------- | :----------- | :----------- |
| error_abort_max_conn_retries | 220.8 / sec  | 8691         |
| error_connect_eaddrinuse     | 896.9 / sec  | 39585        |
| error_timeout                | 192.6 / sec  | 15981        |

- error_abort_max_conn_retries

  

- error_connect_eaddrinuse

  系统的可用端口不够用，创建与压测服务器连接数超出可用段限制

### Server monitoring

| Name                                         | highest 10sec mean | lowest 10sec mean |
| :------------------------------------------- | :----------------- | :---------------- |
| cpu:os_mon@10.123.2.16                       | 12.30 %            | 2.40 %            |
| cpu:os_mon@10.123.2.17                       | 12.90 %            | 2.40 %            |
| cpu:os_mon@tsung_controller@e6e7b8dcbb08     | 95.56 %            | 1.48 %            |
| cpu_idle:os_mon@10.123.2.16                  | 99.00 / sec        | 97.00 / sec       |
| cpu_idle:os_mon@10.123.2.17                  | 99.00 / sec        | 98.00 / sec       |
| cpu_load_average_1:os_mon@10.123.2.16        | 0.28 / sec         | 0.00 / sec        |
| cpu_load_average_1:os_mon@10.123.2.17        | 0.27 / sec         | 0.00 / sec        |
| freemem:os_mon@10.123.2.16                   | 362.01 MB          | 205.70 MB         |
| freemem:os_mon@10.123.2.17                   | 358.98 MB          | 203.96 MB         |
| freemem:os_mon@tsung_controller@e6e7b8dcbb08 | 6281.14 MB         | 4611.99 MB        |
| load:os_mon@10.123.2.16                      | 0.28               | 0.00              |
| load:os_mon@10.123.2.17                      | 0.27               | 0.00              |
| load:os_mon@tsung_controller@e6e7b8dcbb08    | 2.89               | 0.00              |
| total_ram_free:os_mon@10.123.2.16            | 44.19 / sec        | 25.11 / sec       |
| total_ram_free:os_mon@10.123.2.17            | 43.82 / sec        | 24.90 / sec       |

### HTTP return code

| Code | Highest Rate | Mean Rate    | Total number |
| :--- | :----------- | :----------- | :----------- |
| 200  | 6.4 / sec    | 2.68 / sec   | 2584         |
| 502  | 1714.8 / sec | 114.42 / sec | 86960        |
| 504  | 4.6 / sec    | 0.27 / sec   | 180          |



## 参考

[Tsung学习笔记（WebSocket篇）](https://blog.csdn.net/chigang8732/article/details/100722168)

[关于学习TSUNG压力测试](https://updateweb.cn/zwfec/item-202.html)

[使用jemeter进行压力测试关注的指标](https://blog.csdn.net/ningmengbu_suan/article/details/107146646)

[Tsung笔记之监控数据收集篇](http://www.blogjava.net/yongboy/archive/2016/07/29/431367.html)

[TCP服务器端口数，最大连接数以及MaxUserPort的关系辨真](https://blog.csdn.net/dodod2012/article/details/83894603)

