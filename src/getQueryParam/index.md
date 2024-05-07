---
title: getQueryParam
nav: 方法
group: 普通方法
---

# getQueryParam

获取链接参数

## 基本使用

<code src="./demo.tsx" ></code>

## API

```typescript
getQueryParam(key, search);
```

## Params

| 参数   | 说明        | 类型     | 是否必填 | 默认值               |
| ------ | ----------- | -------- | -------- | -------------------- |
| key    | 参数名称    | `string` | 是       | -                    |
| search | 链接 search | `string` | 否       | window.locatoin.href |

## Result

| 参数  | 说明   | 类型     |
| ----- | ------ | -------- |
| value | 参数值 | `string` |
