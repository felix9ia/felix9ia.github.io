---
time: 2022-8-4



---
# Json 转 excel

这里需要用到 `pandas`

## 使用

代码如下：

```
import pandas as pd

df = pd.read_json('live_push.json')
nextdf = pd.json_normalize(df.to_dict(), record_path=['hits', 'hits'])

nextdf.to_excel("live_push.xlsx")
```

