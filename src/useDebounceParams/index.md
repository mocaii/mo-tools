---
title: useDebounceParams
nav: 方法
group: 自定义hooks
---

# useDebounceParams

对值的更新进行 Debounce

## 基本使用

<code src="./demo.tsx" ></code>

## API

```typescript
const debounceParams = useDebounceParams(params, delay);
```

## Params

| 参数   | 说明     | 类型     | 是否必填 | 默认值 |
| ------ | -------- | -------- | -------- | ------ |
| params | 值       | `any`    | 是       | -      |
| delay  | 延迟时间 | `number` | 是       | 200    |

## Result

| 参数  | 说明       | 类型  |
| ----- | ---------- | ----- |
| value | 更新后的值 | `any` |
