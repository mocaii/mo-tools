import React from "react";
import { Button } from "antd";
import useModalHook from "./index";

const ModalDemo = () => {
  const { setModalVisible, CustomModal } = useModalHook({
    content: <div>我是弹窗内容</div>,
    modalProps: {
      title: "我是标题",
      onOk: () => {
        setModalVisible(false);
      }
    },
  });

  return (
    <div>
      <Button onClick={() => { setModalVisible(true) }}>点我出现弹窗</Button>
      <CustomModal />
    </div>
  );
};

export default ModalDemo;
