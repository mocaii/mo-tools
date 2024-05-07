"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[172],{43931:function(l,e,o){o.r(e),o.d(e,{demos:function(){return m}});var a=o(17061),t=o.n(a),r=o(17156),u=o.n(r),d=o(67294),m={"usemodalhook-demo-demo":{component:d.memo(d.lazy(function(){return o.e(749).then(o.bind(o,97538))})),asset:{type:"BLOCK",id:"usemodalhook-demo-demo",refAtomIds:["useModalHook"],dependencies:{"index.tsx":{type:"FILE",value:o(25647).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.tsx":{type:"FILE",value:o(98963).Z}},entry:"index.tsx"},context:{react:o(67294),antd:o(46792),"./index.tsx":o(40034)},renderOpts:{compile:function(){var _=u()(t()().mark(function c(){var I,s=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.e(335).then(o.bind(o,37335));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,s));case 3:case"end":return n.stop()}},c)}));function i(){return _.apply(this,arguments)}return i}()}}}},40034:function(l,e,o){o.r(e);var a=o(42122),t=o.n(a),r=o(85576),u=o(27424),d=o.n(u),m=o(67294),_=o(85893),i={},c=function(s){var M=s.modalProps,n=M===void 0?i:M,p=s.content,E=(0,m.useState)(!1),v=d()(E,2),P=v[0],f=v[1],x=function(){return(0,_.jsx)(r.Z,t()(t()({visible:P,maskClosable:!1,okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onCancel:function(){f(!1)}},n),{},{children:p}))};return{setModalVisible:f,CustomModal:x}};e.default=c},92616:function(l,e,o){o.r(e),o.d(e,{texts:function(){return a}});const a=[{value:"\u4E00\u4E2A\u7528\u4E8E antd Modal \u7EC4\u4EF6\u7684 hook\u3002",paraId:0,tocIndex:0},{value:`const { setModalVisible, CustomModal } = useModalHook({
  content: <div>\u6211\u662F\u5F39\u7A97\u5185\u5BB9</div>,
  modalProps: {
    title: '\u6211\u662F\u6807\u9898',
  },
});
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"content",paraId:2,tocIndex:3},{value:"\u5F39\u7A97\u663E\u793A\u7684\u5185\u5BB9",paraId:2,tocIndex:3},{value:"JSX.Element",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"modalProps",paraId:2,tocIndex:3},{value:"antd Modal \u7684 prop",paraId:2,tocIndex:3},{value:"ModalProps",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"{}",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"setModalVisible",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u5F39\u7A97\u7684\u663E\u793A\u9690\u85CF\u7684\u65B9\u6CD5",paraId:3,tocIndex:4},{value:"(param: boolean) => void",paraId:3,tocIndex:4},{value:"CustomModal",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u7EC4\u4EF6",paraId:3,tocIndex:4},{value:"() => JSX.Element",paraId:3,tocIndex:4}]},25647:function(l,e){e.Z=`import React from "react";
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
`},98963:function(l,e){e.Z=`import React, { useState } from "react";
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
