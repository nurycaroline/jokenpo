import styled from "styled-components";
import media from "styled-media-query";

import {
  white,
  blueDark,
  grayGradient,
  grayShadow,
  blackRadial,
} from "../../layout/colors";

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

  &:hover {
    background: ${grayGradient};
    color: ${blueDark};
  }

  ${media.greaterThan("small")`
    left: unset;
    right: 32px;
    bottom: 32px;
  `}
`;

export const Modal = styled.div`
  background-color: ${white};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  ${media.greaterThan("small")`
    width: 400px;
    height: 415px;
    margin: auto;
    bottom: 0;
    right: 0;
    border-radius: 8px;
    box-shadow: ${grayShadow};
  `}
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: ${blueDark};
  text-align: center;
  margin-top: 20%;

  ${media.greaterThan("small")`
    margin: 32px;
    text-align: left;
  `}
`;

export const ImageRule = styled.img`
  margin: 20% auto 0 auto;
  display: block;

  ${media.greaterThan("small")`
    margin-top: 16px;
  `}
`;

export const ButtonClose = styled.button`
  border: none;
  position: absolute;
  bottom: 65px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: block;

  ${media.greaterThan("small")`
    bottom: unset;
    left: unset;
    top: 38px;
    right: 32px;
  `}
`;

export const Background = styled.div`
  background: ${blackRadial};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.9;
`;
