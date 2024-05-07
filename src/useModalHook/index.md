---
title: useModalHook
nav: 方法
group: 自定义hooks
---

# useModalHook

一个用于 antd Modal 组件的 hook。

## 代替 antd Modal 组件使用

<code src="./demo.tsx" ></code>

## API

```typescript
const { setModalVisible, CustomModal } = useModalHook({
  content: <div>我是弹窗内容</div>,
  modalProps: {
    title: '我是标题',
  },
});
```

## Params

| 参数       | 说明               | 类型          | 是否必填 | 默认值 |
| ---------- | ------------------ | ------------- | -------- | ------ |
| content    | 弹窗显示的内容     | `JSX.Element` | 是       | -      |
| modalProps | antd Modal 的 prop | `ModalProps`  | 否       | {}     |

## Result

| 参数            | 说明                     | 类型                       |
| --------------- | ------------------------ | -------------------------- |
| setModalVisible | 设置弹窗的显示隐藏的方法 | `(param: boolean) => void` |
| CustomModal     | 弹窗组件                 | `() => JSX.Element`        |
