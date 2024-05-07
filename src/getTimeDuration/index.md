---
title: getTimeDuration
nav: 方法
group: 普通方法
---

# getTimeDuration

获取某个时间和当前时间的时长

- 大于 7 天显示日期
- 大于 1 天小于 7 天显示 N 天前/后
- 小于 1 天大于 1 个小时显示 N 小时前/后
- 小于 1 个小时大于 1 分钟显示分钟前/后
- 小于 1 分钟显示 N 秒前/后

## 基本使用

<code src="./demo.tsx" ></code>

## API

```typescript
getTimeDuration(time);
```

## Params

| 参数 | 说明   | 类型            | 是否必填 | 默认值 |
| ---- | ------ | --------------- | -------- | ------ |
| time | 时间戳 | `string number` | 是       | -      |

## Result

| 参数  | 说明         | 类型     |
| ----- | ------------ | -------- |
| value | 返回时长文字 | `string` |
