import styled from "styled-components";
import { white, blueDark } from "../../layout/colors";

export const ButtonRule = styled.button`
  width: 128px;
  height: 40px;
  border: 1px solid ${white};
  border-radius: 8px;
  color: ${white};
  background: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2.5px;

  outline: none;

  position: absolute;
  bottom: 56px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: block;
`;

export const Modal = styled.div`
  background-color: ${white};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: ${blueDark};
  text-align: center;
  margin-top: 20%;
`;

export const ImageRule = styled.img`
  margin: 20% auto 0 auto;
  display: block;
`;

export const ButtonClose = styled.button`
  position: absolute;
  bottom: 65px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: block;
`;
