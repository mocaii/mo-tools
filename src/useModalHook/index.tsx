import React, { useState } from "react";
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
        okText="确认"
        cancelText="取消"
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
