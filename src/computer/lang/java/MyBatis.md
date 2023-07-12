---
time: 2023-7-9







---

# Mybatis 学习





根据 example 查询

```
 public Result getFoodSafeCheckInfo(String demoNo) {
        FoodSafetyCheckInfoDTO result = new FoodSafetyCheckInfoDTO();

        Example example = Example.builder(DemoDO.class).where(
                WeekendSqls.<DemoDO>custom()
                        .andEqualTo(DemoDO::getdemoNo, demoNo)
        ).build();
        DemoDO DemoDO = mapper.selectOneByExample(example);
```

## 参考
