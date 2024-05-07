---
title: useTableHook
nav: 方法
group: 自定义hooks
---

# useTableHook

一个用于 antd Tabel 组件的 hook。

## 在 antd Table 中使用

<code src="./demo/index.tsx" ></code>

## API

```typescript
const { tableState, dispatch, pagination, queryTable, apiData } = useTableHook({
  queryApi: () => Promise.resolve({ data: [] }),
});
```

## Params

| 参数          | 说明                                     | 类型                            | 是否必填 | 默认值   |
| ------------- | ---------------------------------------- | ------------------------------- | -------- | -------- |
| queryApi      | 请求的方法                               | `(params: any) => Promise<any>` | 是       | -        |
| dataKey       | 接口返回列表数据的 key                   | `string`                        | 否       | list     |
| totalKey      | 接口返回列表总数的 key                   | `string`                        | 否       | total    |
| pageIndexKey  | 接口返回列表页码的 key                   | `string`                        | 否       | page     |
| pageSizeKey   | 接口返回列表页数的 key                   | `string`                        | 否       | size     |
| callBack      | 接口请求成功的回调，参数为接口返回的数据 | `(params: any) => void`         | 否       | () => {} |
| defaultParams | 默认的搜索条件                           | `Object`                        | 否       | {}       |

## Result

| 参数        | 说明                                                                                                                 | 类型                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| tableState  | 表格的 state                                                                                                         | `ITableState`                 |
| dispatch    | 设置表格 state 的方法                                                                                                | `(params: IActions) => void;` |
| pagination  | 翻页配置，直接传入 antd Table                                                                                        | `TablePaginationConfig`       |
| queryTable  | 表格查询的函数，参数是搜索的参数                                                                                     | `(param: any) => void;`       |
| reloadTable | 表格查询函数，可以重置页码查询(默认)或者直接查询(传 noReset 参数),（用于导入 Excel，提交成功后等需要更新列表等场景） | `(type?: "noReset") => void;` |

## Action

dispatch 方法接收的 Action

| action type  | 说明                   | payLoad 参数           |
| ------------ | ---------------------- | ---------------------- |
| setApiData   | 设置列表接口返回的数据 | 列表接口数据           |
| setParams    | 触发列表搜索逻辑       | 搜索参数(json 对象)    |
| resetTable   | 触发列表重置逻辑       | 搜索参数(选填，默认{}) |
| setPageIndex | 设置页码               | 页码                   |
| setPageSize  | 设置每页显示多少条     | 条数                   |

## 常见使用场景

自己封装 Search 组件，查询的时候触发 doQuery 方法，将查询的参数抛出

```typescript
 // 搜索
 <Search doQuery={(params, type) => {
    dispatch({ type: "setParams", payLoad: params});
  }} />

// 重置搜索条件
 <Search doQuery={(params, type) => {
   if(type === "reset") {
    dispatch({ type: "resetTable"});
   }
  }} />

```
