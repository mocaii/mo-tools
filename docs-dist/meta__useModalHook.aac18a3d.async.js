"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[172],{59761:function(l,o,e){e.r(o),e.d(o,{demos:function(){return m}});var a=e(90228),t=e.n(a),_=e(87999),r=e.n(_),d=e(75271),m={"usemodalhook-demo-demo":{component:d.memo(d.lazy(function(){return e.e(749).then(e.bind(e,99520))})),asset:{type:"BLOCK",id:"usemodalhook-demo-demo",refAtomIds:["useModalHook"],dependencies:{"index.tsx":{type:"FILE",value:e(47279).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.tsx":{type:"FILE",value:e(73237).Z}},entry:"index.tsx"},context:{react:e(75271),antd:e(81009),"./index.tsx":e(9451)},renderOpts:{compile:function(){var u=r()(t()().mark(function c(){var p,s=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(563).then(e.bind(e,15563));case 2:return n.abrupt("return",(p=n.sent).default.apply(p,s));case 3:case"end":return n.stop()}},c)}));function i(){return u.apply(this,arguments)}return i}()}}}},9451:function(l,o,e){e.r(o);var a=e(26068),t=e.n(a),_=e(23208),r=e(48305),d=e.n(r),m=e(75271),u=e(52676),i={},c=function(s){var I=s.modalProps,n=I===void 0?i:I,f=s.content,E=(0,m.useState)(!1),M=d()(E,2),P=M[0],v=M[1],x=function(){return(0,u.jsx)(_.Z,t()(t()({visible:P,maskClosable:!1,okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onCancel:function(){v(!1)}},n),{},{children:f}))};return{setModalVisible:v,CustomModal:x}};o.default=c},32363:function(l,o,e){e.r(o),e.d(o,{texts:function(){return a}});const a=[{value:"\u4E00\u4E2A\u7528\u4E8E antd Modal \u7EC4\u4EF6\u7684 hook\u3002",paraId:0,tocIndex:0},{value:`const { setModalVisible, CustomModal } = useModalHook({
  content: <div>\u6211\u662F\u5F39\u7A97\u5185\u5BB9</div>,
  modalProps: {
    title: '\u6211\u662F\u6807\u9898',
  },
});
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"content",paraId:2,tocIndex:3},{value:"\u5F39\u7A97\u663E\u793A\u7684\u5185\u5BB9",paraId:2,tocIndex:3},{value:"JSX.Element",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"modalProps",paraId:2,tocIndex:3},{value:"antd Modal \u7684 prop",paraId:2,tocIndex:3},{value:"ModalProps",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"{}",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"setModalVisible",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u5F39\u7A97\u7684\u663E\u793A\u9690\u85CF\u7684\u65B9\u6CD5",paraId:3,tocIndex:4},{value:"(param: boolean) => void",paraId:3,tocIndex:4},{value:"CustomModal",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u7EC4\u4EF6",paraId:3,tocIndex:4},{value:"() => JSX.Element",paraId:3,tocIndex:4}]},47279:function(l,o){o.Z=`import React from "react";
import { Button } from "antd";
import useModalHook from "./index";

const ModalDemo = () => {
  const { setModalVisible, CustomModal } = useModalHook({
    content: <div>\u6211\u662F\u5F39\u7A97\u5185\u5BB9</div>,
    modalProps: {
      title: "\u6211\u662F\u6807\u9898",
      onOk: () => {
        setModalVisible(false);
      }
    },
  });

  return (
    <div>
      <Button onClick={() => { setModalVisible(true) }}>\u70B9\u6211\u51FA\u73B0\u5F39\u7A97</Button>
      <CustomModal />
    </div>
  );
};

export default ModalDemo;
`},73237:function(l,o){o.Z=`import React, { useState } from "react";
import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";

const defaultModalProps = {};

export interface IParams {
  modalProps?: ModalProps;
  content: JSX.Element;
}

export interface IResult {
  setModalVisible: (param: boolean) => void;
  CustomModal: () => JSX.Element;
}

const useModalHook = ({ modalProps = defaultModalProps, content }: IParams): IResult => {
  const [visible, setModalVisible] = useState<boolean>(false);
  const CustomModal = () => {
    return (
      <Modal
        visible={visible}
        maskClosable={false}
        okText="\u786E\u8BA4"
        cancelText="\u53D6\u6D88"
        onCancel={() => {
          setModalVisible(false);
        }}
        {...modalProps}
      >
        {content}
      </Modal>
    );
  };
  return {
    setModalVisible,
    CustomModal
  };
};

export default useModalHook;
`}}]);
