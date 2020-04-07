import React, { useState } from "react";

import IRuleBasic from "../../assets/images/image-rules.svg";
import IClose from "../../assets/images/icon-close.svg";

import { ButtonRule, Modal, Title, ImageRule, ButtonClose } from "./styles";

export default function ModalRule({ onClose }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ButtonRule onClick={() => setShowModal(true)}>RULES</ButtonRule>
      {showModal && (
        <Modal>
          <Title>Rules</Title>
          <ImageRule src={IRuleBasic} alt="Rule Basic" />

          <ButtonClose onClick={() => setShowModal(false)}>
            <img src={IClose} alt="Icon close" />
          </ButtonClose>
        </Modal>
      )}
    </>
  );
}
