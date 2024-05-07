"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[397],{95809:function(m,o,a){a.r(o),a.d(o,{demos:function(){return f}});var i=a(17061),p=a.n(i),_=a(17156),e=a.n(_),x=a(67294),f={"src-use-table-hook-demo-demo":{component:x.memo(x.lazy(function(){return Promise.all([a.e(593),a.e(953),a.e(433)]).then(a.bind(a,17518))})),asset:{type:"BLOCK",id:"src-use-table-hook-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a(95844).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"../index.ts":{type:"FILE",value:a(92341).Z}},entry:"index.tsx"},context:{react:a(67294),antd:a(46792),"../index.ts":a(50069)},renderOpts:{compile:function(){var u=e()(p()().mark(function S(){var d,b=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a.e(335).then(a.bind(a,37335));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,b));case 3:case"end":return s.stop()}},S)}));function h(){return u.apply(this,arguments)}return h}()}}}},50069:function(m,o,a){a.r(o);var i=a(38416),p=a.n(i),_=a(42122),e=a.n(_),x=a(27424),f=a.n(x),u=a(67294),h=function(d){var b=d.queryApi,P=d.dataKey,s=P===void 0?"list":P,L=d.totalKey,C=L===void 0?"total":L,K=d.pageIndexKey,E=K===void 0?"page":K,z=d.pageSizeKey,D=z===void 0?"size":z,A=d.callBack,R=d.defaultParams,M=(0,u.useReducer)(function(n,t){var T=t.type,l=t.payLoad;switch(T){case"setLoading":return e()(e()({},n),{},{loading:l});case"setPageIndex":return e()(e()({},n),{},{pageIndex:l});case"setPageSize":return e()(e()({},n),{},{pageSize:l});case"setTotal":return e()(e()({},n),{},{total:l});case"setList":return e()(e()({},n),{},{list:l});case"setApiData":return e()(e()({},n),{},{apiData:l});case"setParams":return e()(e()({},n),{},{searchParams:l,pageIndex:1});case"resetTable":return e()(e()({},n),{},{searchParams:l||{},pageIndex:1,pageSize:10});default:return e()({},n)}},{loading:!1,pageIndex:1,pageSize:10,total:0,list:[],apiData:{},searchParams:R||{}}),O=f()(M,2),I=O[0],r=O[1],c=I.pageIndex,y=I.pageSize,j=I.total,g=I.searchParams,B={current:c,pageSize:y,total:j,showTotal:function(t){return"\u5171 ".concat(t," \u6761\u6570\u636E")},onChange:function(t){r({type:"setPageIndex",payLoad:t})},onShowSizeChange:function(t,T){r({type:"setPageIndex",payLoad:1}),r({type:"setPageSize",payLoad:T})}},v=(0,u.useCallback)(function(n){r({type:"setLoading",payLoad:!0}),b(n).then(function(t){t&&(r({type:"setList",payLoad:t[s]||[]}),r({type:"setTotal",payLoad:t[C]}),r({type:"setApiData",payLoad:t}),A&&A(t))}).finally(function(){r({type:"setLoading",payLoad:!1})})},[]);(0,u.useEffect)(function(){v(e()(p()(p()({},E,c),D,y),g))},[c,y,g]);var k=(0,u.useCallback)(function(n){var t=e()(p()(p()({},E,c),D,y),g);n!=="noReset"?c===1?v(t):r({type:"setPageIndex",payLoad:1}):v(t)},[g,c,y]);return{tableState:I,dispatch:r,pagination:B,queryTable:v,reloadTable:k}};o.default=h},19051:function(m,o,a){a.r(o),a.d(o,{texts:function(){return i}});const i=[{value:"\u4E00\u4E2A\u7528\u4E8E antd Tabel \u7EC4\u4EF6\u7684 hook\u3002",paraId:0,tocIndex:0},{value:`const { tableState, dispatch, pagination, queryTable, apiData } = useTableHook({
  queryApi: () => Promise.resolve({ data: [] }),
});
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"queryApi",paraId:2,tocIndex:3},{value:"\u8BF7\u6C42\u7684\u65B9\u6CD5",paraId:2,tocIndex:3},{value:"(params: any) => Promise<any>",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"dataKey",paraId:2,tocIndex:3},{value:"\u63A5\u53E3\u8FD4\u56DE\u5217\u8868\u6570\u636E\u7684 key",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"list",paraId:2,tocIndex:3},{value:"totalKey",paraId:2,tocIndex:3},{value:"\u63A5\u53E3\u8FD4\u56DE\u5217\u8868\u603B\u6570\u7684 key",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"total",paraId:2,tocIndex:3},{value:"pageIndexKey",paraId:2,tocIndex:3},{value:"\u63A5\u53E3\u8FD4\u56DE\u5217\u8868\u9875\u7801\u7684 key",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"page",paraId:2,tocIndex:3},{value:"pageSizeKey",paraId:2,tocIndex:3},{value:"\u63A5\u53E3\u8FD4\u56DE\u5217\u8868\u9875\u6570\u7684 key",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"callBack",paraId:2,tocIndex:3},{value:"\u63A5\u53E3\u8BF7\u6C42\u6210\u529F\u7684\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E",paraId:2,tocIndex:3},{value:"(params: any) => void",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"() => {}",paraId:2,tocIndex:3},{value:"defaultParams",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u7684\u641C\u7D22\u6761\u4EF6",paraId:2,tocIndex:3},{value:"Object",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"{}",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"tableState",paraId:3,tocIndex:4},{value:"\u8868\u683C\u7684 state",paraId:3,tocIndex:4},{value:"ITableState",paraId:3,tocIndex:4},{value:"dispatch",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u8868\u683C state \u7684\u65B9\u6CD5",paraId:3,tocIndex:4},{value:"(params: IActions) => void;",paraId:3,tocIndex:4},{value:"pagination",paraId:3,tocIndex:4},{value:"\u7FFB\u9875\u914D\u7F6E\uFF0C\u76F4\u63A5\u4F20\u5165 antd Table",paraId:3,tocIndex:4},{value:"TablePaginationConfig",paraId:3,tocIndex:4},{value:"queryTable",paraId:3,tocIndex:4},{value:"\u8868\u683C\u67E5\u8BE2\u7684\u51FD\u6570\uFF0C\u53C2\u6570\u662F\u641C\u7D22\u7684\u53C2\u6570",paraId:3,tocIndex:4},{value:"(param: any) => void;",paraId:3,tocIndex:4},{value:"reloadTable",paraId:3,tocIndex:4},{value:"\u8868\u683C\u67E5\u8BE2\u51FD\u6570\uFF0C\u53EF\u4EE5\u91CD\u7F6E\u9875\u7801\u67E5\u8BE2(\u9ED8\u8BA4)\u6216\u8005\u76F4\u63A5\u67E5\u8BE2(\u4F20 noReset \u53C2\u6570),\uFF08\u7528\u4E8E\u5BFC\u5165 Excel\uFF0C\u63D0\u4EA4\u6210\u529F\u540E\u7B49\u9700\u8981\u66F4\u65B0\u5217\u8868\u7B49\u573A\u666F\uFF09",paraId:3,tocIndex:4},{value:'(type?: "noReset") => void;',paraId:3,tocIndex:4},{value:"dispatch \u65B9\u6CD5\u63A5\u6536\u7684 Action",paraId:4,tocIndex:5},{value:"action type",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"payLoad \u53C2\u6570",paraId:5,tocIndex:5},{value:"setApiData",paraId:5,tocIndex:5},{value:"\u8BBE\u7F6E\u5217\u8868\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E",paraId:5,tocIndex:5},{value:"\u5217\u8868\u63A5\u53E3\u6570\u636E",paraId:5,tocIndex:5},{value:"setParams",paraId:5,tocIndex:5},{value:"\u89E6\u53D1\u5217\u8868\u641C\u7D22\u903B\u8F91",paraId:5,tocIndex:5},{value:"\u641C\u7D22\u53C2\u6570(json \u5BF9\u8C61)",paraId:5,tocIndex:5},{value:"resetTable",paraId:5,tocIndex:5},{value:"\u89E6\u53D1\u5217\u8868\u91CD\u7F6E\u903B\u8F91",paraId:5,tocIndex:5},{value:"\u641C\u7D22\u53C2\u6570(\u9009\u586B\uFF0C\u9ED8\u8BA4{})",paraId:5,tocIndex:5},{value:"setPageIndex",paraId:5,tocIndex:5},{value:"\u8BBE\u7F6E\u9875\u7801",paraId:5,tocIndex:5},{value:"\u9875\u7801",paraId:5,tocIndex:5},{value:"setPageSize",paraId:5,tocIndex:5},{value:"\u8BBE\u7F6E\u6BCF\u9875\u663E\u793A\u591A\u5C11\u6761",paraId:5,tocIndex:5},{value:"\u6761\u6570",paraId:5,tocIndex:5},{value:"\u81EA\u5DF1\u5C01\u88C5 Search \u7EC4\u4EF6\uFF0C\u67E5\u8BE2\u7684\u65F6\u5019\u89E6\u53D1 doQuery \u65B9\u6CD5\uFF0C\u5C06\u67E5\u8BE2\u7684\u53C2\u6570\u629B\u51FA",paraId:6,tocIndex:6},{value:` // \u641C\u7D22
 <Search doQuery={(params, type) => {
    dispatch({ type: "setParams", payLoad: params});
  }} />

// \u91CD\u7F6E\u641C\u7D22\u6761\u4EF6
 <Search doQuery={(params, type) => {
   if(type === "reset") {
    dispatch({ type: "resetTable"});
   }
  }} />

`,paraId:7,tocIndex:6}]},95844:function(m,o){o.Z=`import React, { useState } from 'react'
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
    title: "\u6A21\u677FID",
    dataIndex: "id"
  }, {
    title: "\u540D\u5B57",
    dataIndex: "name"
  }];

  const { tableState, dispatch, pagination } = useTableHook({
    queryApi: () => Promise.resolve({ data: exampleData }),
  });

  const { loading, list } = tableState;

  return (
    <>
      {/* \u641C\u7D22\u680F */}
      {/* <Search doQuery={(params, type) => {
         // \u8BE5action\u4F1A\u89E6\u53D1\u641C\u7D22\uFF0C \u540C\u65F6\u4F1A\u91CD\u7F6E\u9875\u7801\u548C\u9875\u6570
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

`},92341:function(m,o){o.Z=`import { TablePaginationConfig } from 'antd/lib/table';
import { useCallback, useEffect, useReducer } from 'react';

export interface IParams {
  queryApi: (params: any) => Promise<any>;
  dataKey?: string;
  totalKey?: string;
  pageIndexKey?: string;
  pageSizeKey?: string;
  callBack?: (params: any) => void;
  defaultParams?: Object;
}

export interface ITableState {
  loading: boolean;
  pageIndex: number;
  pageSize: number;
  total: number;
  list: Object[]; // \u5217\u8868
  apiData: Object | null; // \u63A5\u53E3\u8FD4\u56DES\u7684\u6570\u636E
  searchParams: Object; // \u641C\u7D22\u6761\u4EF6\u53C2\u6570
}

type Actions =
  | 'setLoading'
  | 'setPageIndex'
  | 'setPageSize'
  | 'resetTable'
  | 'setTotal'
  | 'setList'
  | 'setApiData'
  | 'setParams';

export interface IActions {
  type: Actions;
  payLoad?: any;
}

export interface IResult {
  tableState: ITableState;
  dispatch: (params: IActions) => void;
  pagination: TablePaginationConfig;
  queryTable: (param: any) => void;
  reloadTable: (type?: 'noReset') => void;
}

// \u62BD\u53D6\u51FA\u8868\u683C\u53EF\u4EE5\u5171\u7528\u7684\u72B6\u6001
const useTableHook = ({
  queryApi, // \u8BF7\u6C42\u7684\u63A5\u53E3
  dataKey = 'list', //\u8FD4\u56DE\u6570\u636E\u5217\u8868\u7684Key
  totalKey = 'total', // \u8FD4\u56DE\u6570\u636E\u603B\u6570\u7684Key
  pageIndexKey = 'page', // \u8BF7\u6C42\u53C2\u6570key
  pageSizeKey = 'size', // \u8BF7\u6C42\u53C2\u6570key
  callBack, // \u8BF7\u6C42\u5B8C\u6210\u7684\u56DE\u8C03
  defaultParams, // \u4E00\u5F00\u59CB\u8FDB\u5165\u9875\u9762\u9ED8\u8BA4\u7684\u641C\u7D22\u6761\u4EF6
}: IParams): IResult => {
  const [tableState, dispatch] = useReducer<
    (state: ITableState, action: IActions) => ITableState
  >(
    (state, action) => {
      const { type, payLoad } = action;
      switch (type) {
        case 'setLoading':
          return { ...state, loading: payLoad as boolean };
        case 'setPageIndex':
          return { ...state, pageIndex: payLoad as number };
        case 'setPageSize':
          return { ...state, pageSize: payLoad as number };
        case 'setTotal':
          return { ...state, total: payLoad as number };
        case 'setList':
          return { ...state, list: payLoad as Object[] };
        case 'setApiData':
          return { ...state, apiData: payLoad as Object | null };
        case 'setParams': // \u641C\u7D22\uFF0C\u4F1A\u91CD\u7F6E\u9875\u7801
          return { ...state, searchParams: payLoad, pageIndex: 1 };
        case 'resetTable': // \u91CD\u7F6E\u641C\u7D22\u6761\u4EF6
          return {
            ...state,
            searchParams: payLoad || {},
            pageIndex: 1,
            pageSize: 10,
          };

        default:
          return { ...state };
      }
    },
    {
      loading: false,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      list: [],
      apiData: {},
      searchParams: defaultParams || {},
    },
  );

  const { pageIndex, pageSize, total, searchParams } = tableState;

  const pagination: TablePaginationConfig = {
    current: pageIndex,
    pageSize,
    total,
    showTotal: (total: number) => \`\u5171 \${total} \u6761\u6570\u636E\`,
    onChange: (pageIndex: number) => {
      dispatch({
        type: 'setPageIndex',
        payLoad: pageIndex,
      });
    },
    onShowSizeChange: (page: number, pageSize: number) => {
      dispatch({
        type: 'setPageIndex',
        payLoad: 1,
      });
      dispatch({
        type: 'setPageSize',
        payLoad: pageSize,
      });
    },
  };

  // \u8BF7\u6C42\u6570\u636E
  const queryTable = useCallback((param: any) => {
    dispatch({ type: 'setLoading', payLoad: true });
    queryApi(param)
      .then((data) => {
        if (data) {
          dispatch({ type: 'setList', payLoad: data[dataKey] || [] });
          dispatch({ type: 'setTotal', payLoad: data[totalKey] });
          dispatch({ type: 'setApiData', payLoad: data });
          callBack && callBack(data);
        }
      })
      .finally(() => {
        dispatch({ type: 'setLoading', payLoad: false });
      });
  }, []);

  useEffect(() => {
    queryTable({
      [pageIndexKey]: pageIndex,
      [pageSizeKey]: pageSize,
      ...searchParams,
    });
  }, [pageIndex, pageSize, searchParams]);

  // \u91CD\u65B0\u5237\u65B0\u5217\u8868\uFF08\u7528\u4E8E\u5BFC\u5165Excel\uFF0C\u63D0\u4EA4\u6210\u529F\u540E\u9700\u8981\u66F4\u65B0\u5217\u8868\u7B49\u573A\u666F\uFF09
  const reloadTable = useCallback(
    (type: any) => {
      const params = {
        [pageIndexKey]: pageIndex,
        [pageSizeKey]: pageSize,
        ...searchParams,
      };
      if (type !== 'noReset') {
        if (pageIndex === 1) {
          queryTable(params);
        } else {
          dispatch({ type: 'setPageIndex', payLoad: 1 });
        }
      } else {
        queryTable(params);
      }
    },
    [searchParams, pageIndex, pageSize],
  );

  return { tableState, dispatch, pagination, queryTable, reloadTable };
};

export default useTableHook;
`}}]);
