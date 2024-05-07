---
title: useArray
nav: 方法
group: 自定义hooks
---

# useArray

一个操作数组增删清除的 hooks。

## 基本使用

<code src="./demo.tsx" ></code>

## API

```typescript
const { value, clear, removeIndex, add } = useArray(array);
```

## Params

| 参数  | 说明           | 类型    | 是否必填 | 默认值 |
| ----- | -------------- | ------- | -------- | ------ |
| array | 需要操作的数组 | `Array` | 是       | -      |

## Result

| 参数        | 说明               | 类型                     |
| ----------- | ------------------ | ------------------------ |
| value       | 返回的操作结果     | `Array`                  |
| clear       | 清除数组           | `() => void`             |
| removeIndex | 删除数组指定下标值 | `(index:number) => void` |
| add         | 新增一项           | `(item: T) => void`      |
