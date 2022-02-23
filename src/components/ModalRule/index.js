import React, { useState } from "react";
import PropTypes from "prop-types";

import IRuleBasic from "../../assets/images/image-rules.svg";
import IRuleAdvanced from "../../assets/images/image-rules-bonus.svg";
import IClose from "../../assets/images/icon-close.svg";

import {
  ButtonRule,
  Modal,
  Title,
  ImageRule,
  ButtonClose,
  Background,
} from "./styles";

const TYPE_IMAGE = {
  basic: IRuleBasic,
  advanced: IRuleAdvanced
};

export default function ModalRule({ type }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ButtonRule styled="primary" onClick={() => setShowModal(true)}>
        RULES
      </ButtonRule>
      {showModal && (
        <>
          <Background />
          <Modal>
            <Title>Rules</Title>
            <ImageRule src={TYPE_IMAGE[type]} alt="Rule Basic" />

            <ButtonClose onClick={() => setShowModal(false)}>
              <img src={IClose} alt="Icon close" />
            </ButtonClose>
          </Modal>
        </>
      )}
    </>
  );
}

ModalRule.propTypes = {
  type: PropTypes.oneOf(["basic", "advanced"]),
};
