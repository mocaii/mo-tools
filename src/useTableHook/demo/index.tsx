import React, { useState } from 'react'
import { Table } from 'antd'
import useTableHook from '../index'

const exampleData = {
  list: [{ id: 123, name: "ddd" }],
  total: 1,
  page: 1,
  size: 10
}

const TabelPage = () => {
  const columns: any = [{
    title: "模板ID",
    dataIndex: "id"
  }, {
    title: "名字",
    dataIndex: "name"
  }];

  const { tableState, dispatch, pagination } = useTableHook({
    queryApi: () => Promise.resolve({ data: exampleData }),
  });

  const { loading, list } = tableState;

  return (
    <>
      {/* 搜索栏 */}
      {/* <Search doQuery={(params, type) => {
         // 该action会触发搜索， 同时会重置页码和页数
         dispatch({ type: "setParams", payLoad: params});
      }} /> */}
      <Table
        dataSource={list}
        loading={loading}
        columns={columns}
        pagination={pagination}
      />
    </>
  );
};

export default TabelPage;

