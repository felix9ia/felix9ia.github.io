---
time: 2020-10-22



---



# Java 多线程在Spring中的使用方式

记录

## 基本操作

遍历读取 list 的元素，在 list 当中正常创建线程即可，可以参考 [java多线程读取、操作List集合](https://blog.csdn.net/u013514928/article/details/77790636) 。

如果同时操作 list 则需要线程安全的集合，可以参考[多线程场景下如何使用 ArrayList](https://www.cnblogs.com/zjfjava/p/10217720.html) 。

## 如何等待所有的子线程的结果？

使用 [多线程场景下如何使用 ArrayList](https://www.cnblogs.com/zjfjava/p/10217720.html) 的CopyOnWriteArrayList搭配着：[Java获取多线程执行结果方式的归纳与总结](https://www.cnblogs.com/dafanjoy/p/14505058.html)中的 CountDownLatch

示例代码如下：

```java
    public void saveTemplates(String regionId, String appName, BigDecimal aspectRatio, List<LiveTemplate> transcodingTemplateList, List<LiveTemplate> recordTemplateList) {
        String lockKey = appName + aspectRatio.toString();
        RLock appAspectRatioLock = redissonClient.getLock(lockKey);
        try {
            boolean gotLock = appAspectRatioLock.tryLock(200, 2000, TimeUnit.MILLISECONDS);
            if (!gotLock) {
                log.warn("try aspect ratio lock failed, duplicate appName {}. aspectRatio {}", appName, aspectRatio);
                throw new DuplicateRequestException(lockKey);
            }
            List<Boolean> result = new CopyOnWriteArrayList<>();
            CountDownLatch countDownLatch = new CountDownLatch(transcodingTemplateList.size() + recordTemplateList.size());
            // 同步的写入远程以及数据库
            for (LiveTemplate template : transcodingTemplateList) {
                TranscodingTemplateHandler handler = new TranscodingTemplateHandler(countDownLatch, result, regionId, aliyunRequestService, template);
                Thread thread = new Thread(handler);
                thread.start();
            }

            for (LiveTemplate recordTemplate : recordTemplateList) {
                RecordTemplateHandler handler = new RecordTemplateHandler(countDownLatch, result, regionId, aliyunRequestService, recordTemplate);
                Thread thread = new Thread(handler);
                thread.start();
            }
            countDownLatch.await();
            Integer successResultCount = Collections.frequency(result, true);
            transcodingTemplateList.addAll(recordTemplateList);
            if (!successResultCount.equals(transcodingTemplateList.size())) {
                throw new LiveException(LiveExceptionCode.auth_628.getCode());
            }
            templateMapper.batchInsertTemplate(transcodingTemplateList);
        } catch (LiveException e) {
            log.error("got LiveException when save templates: ", e);
            throw new LiveException(e.getCode());
        } catch (Exception e) {
            log.error("got error when save templates: ", e);
            throw new LiveException(LiveExceptionCode.auth_628.getCode());
        } finally {
            appAspectRatioLock.unlockAsync();
        }

    }
    
    private static class TranscodingTemplateHandler implements Runnable {
        private CountDownLatch countDownLatch;
        private List<Boolean> result;
        private String regionId;
        private IAliyunRequestService aliyunRequestService;
        private LiveTemplate template;

    private static class TranscodingTemplateHandler implements Runnable {
        private CountDownLatch countDownLatch;
        private List<Boolean> result;
        private String regionId;
        private IAliyunRequestService aliyunRequestService;
        private LiveTemplate template;

        public TranscodingTemplateHandler(CountDownLatch countDownLatch, List<Boolean> result, String regionId, IAliyunRequestService aliyunRequestService, LiveTemplate template) {
            this.countDownLatch = countDownLatch;
            this.result = result;
            this.regionId = regionId;
            this.aliyunRequestService = aliyunRequestService;
            this.template = template;
        }

        @Override
        public void run() {
            try {
                aliyunRequestService.addCustomLiveStreamTranscode(regionId, template.getTemplateAppName(), template.getSettingsId(), ENCODING_H264, template.getHeight(), template.getWidth(), FPS_30, GOP_30, template.getBitrate(), PROFILE_3, CHANNEL_1);
                result.add(true);
            } catch (Exception e) {
                result.add(false);
            } finally {
                countDownLatch.countDown();
            }
        }
    }
```

## 线程池

[在基于spring体系的业务中正确地关闭线程池](https://www.iflym.com/index.php/code/202004110001.html) 和 [Java中守护线程的总结 thread.setDaemon(true)](https://www.cnblogs.com/kelelipeng/p/11599840.html) 中提到，` thread.setDaemon(true)` 才能够让进程正常的退出。

```
    Thread thread = new Thread(r);
    thread.setName(name + "-" + thread.getId());
    thread.setDaemon(true);
```



## 参考

[java多线程读取、操作List集合](https://blog.csdn.net/u013514928/article/details/77790636)

[线程池有哪些作用](https://zhuanlan.zhihu.com/p/259624983)

