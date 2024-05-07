import { useReducer, useCallback, useEffect } from "react";
import { TablePaginationConfig } from 'antd/lib/table';

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
  list: Object[]; // 列表
  apiData: Object | null; // 接口返回S的数据
  searchParams: Object; // 搜索条件参数
}

type Actions = "setLoading" | "setPageIndex" | "setPageSize" | "resetTable" |
               "setTotal" | "setList" | "setApiData" | "setParams";

export interface IActions { type: Actions; payLoad?: any }

export interface IResult {
  tableState: ITableState;
  dispatch: (params: IActions) => void;
  pagination: TablePaginationConfig;
  queryTable: (param: any) => void;
  reloadTable: (type?: "noReset") => void;
}

// 抽取出表格可以共用的状态
const useTableHook = ({
  queryApi,          // 请求的接口
  dataKey = "list",  //返回数据列表的Key
  totalKey = "total", // 返回数据总数的Key
  pageIndexKey = "page", // 请求参数key
  pageSizeKey = "size", // 请求参数key
  callBack,           // 请求完成的回调
  defaultParams  // 一开始进入页面默认的搜索条件
}: IParams): IResult => {
  const [tableState, dispatch] = useReducer<(state: ITableState, action: IActions) => ITableState>((state, action) => {
    const { type, payLoad } = action;
    switch (type) {
      case "setLoading":
        return { ...state, loading: payLoad as boolean };
      case "setPageIndex":
        return { ...state, pageIndex: payLoad as number };
      case "setPageSize":
        return { ...state, pageSize: payLoad as number };
      case "setTotal":
        return { ...state, total: payLoad as number };
      case "setList":
        return { ...state, list: payLoad as Object[] };
      case "setApiData":
        return { ...state, apiData: payLoad as Object | null };
      case "setParams": // 搜索，会重置页码
        return { ...state, searchParams: payLoad, pageIndex: 1 };
      case "resetTable": // 重置搜索条件
        return { ...state, searchParams: payLoad || {}, pageIndex: 1, pageSize: 10 };
    
      default:
        return { ...state };
    }
  }, {
    loading: false,
    pageIndex: 1,
    pageSize: 10,
    total: 0,
    list: [],
    apiData: {},
    searchParams: defaultParams || {}
  });

  const { pageIndex, pageSize, total, searchParams } = tableState;

  const pagination: TablePaginationConfig = {
    current: pageIndex,
    pageSize,
    total,
    showTotal: (total: number) => `共 ${total} 条数据`,
    onChange: (pageIndex: number) => {
      dispatch({
        type: "setPageIndex",
        payLoad: pageIndex
      });
    },
    onShowSizeChange: (page: number, pageSize: number) => {
      dispatch({
        type: "setPageIndex",
        payLoad: 1
      });
      dispatch({
        type: "setPageSize",
        payLoad: pageSize
      });
    }
  };

  // 请求数据
  const queryTable = useCallback(param => {
    dispatch({ type: "setLoading", payLoad: true });
    queryApi(param).then((data) => {
      if(data) {
        dispatch({ type: "setList", payLoad: data[dataKey] || [] });
        dispatch({ type: "setTotal", payLoad: data[totalKey] });
        dispatch({ type: "setApiData", payLoad: data })
        callBack && callBack(data);
      }
    }).finally(() => {
      dispatch({ type: "setLoading", payLoad: false });
    });
  }, []);


  useEffect(() => {
    queryTable({ 
      [pageIndexKey]: pageIndex, [pageSizeKey]: pageSize, ...searchParams
    });
  }, [pageIndex, pageSize, searchParams]);

  // 重新刷新列表（用于导入Excel，提交成功后需要更新列表等场景）
  const reloadTable = useCallback((type) => {
    const params = { 
      [pageIndexKey]: pageIndex, [pageSizeKey]: pageSize, ...searchParams
    };
    if(type !== "noReset") {
      if(pageIndex === 1) {
        queryTable(params);
      } else {
        dispatch({ type: "setPageIndex",  payLoad: 1 });
      }
    } else {
      queryTable(params);
    }
  }, [searchParams, pageIndex, pageSize]);

  return { tableState, dispatch, pagination, queryTable, reloadTable };
};

export default useTableHook;
