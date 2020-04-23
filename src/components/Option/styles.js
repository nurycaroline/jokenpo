import styled, { css, keyframes } from "styled-components";
import media from "styled-media-query";
import {
  grayDark2,
  grayGradient2,
  grayGradient3,
  grayShadow,
  grayShadowLight,
} from "../../layout/colors";

export const OptionEmpty = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  width: 110px;
  height: 110px;

  ${media.greaterThan("1024px")`
    width: 224.63px;
    height: 224.63px;
  `}
`;

const pulse = (color) => keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 ${color};
    box-shadow: 0 0 0 0  ${color};
  }
  70% {
      -moz-box-shadow: 0 0 0 30px rgba(204,169,44, 0);
      box-shadow: 0 0 0 30px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

export const Option = styled.div`
  border-radius: 100%;
  box-shadow: ${grayShadow};
  background: ${(props) => props.color};

  width: 129.37px;
  height: 132.66px;

  ${(props) =>
    props.win &&
    css`
      display: block;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 0 ${props.color};
      animation: ${pulse(props.color)} 2s infinite;

      &:hover {
        animation: none;
      }
    `}

  ${media.greaterThan("1024px")`
    ${(props) =>
      props.selected &&
      css`
        transform: scale(1.48);
        width: 293.04px;
        height: 300.44px;
      `}
      
      width: 198px;
      height: 203px;

      &:hover {
        box-shadow: ${grayShadowLight};
        mix-blend-mode: normal;
      }
  `}
`;

export const OvalBackground = styled.div`
  border-radius: 100%;

  background: ${(props) => props.color};

  width: 129.37px;
  height: 126.78px;

  ${media.greaterThan("1024px")`
    width: 198px;
    height: 194px;
  `}
`;

export const OvalGradient = styled.div`
  border-radius: 100%;
  padding-top: 15px;

  background: ${grayGradient3};

  width: 129.37px;
  height: 126.78px;

  ${media.greaterThan("1024px")`
    width: 198px;
    height: 194px;
    padding-top: 25px;
  `}
`;

export const OvalInsideBackground = styled.div`
  border-radius: 100%;
  margin: auto;

  background: ${grayDark2};

  width: 99.31px;
  height: 99.33px;

  ${media.greaterThan("1024px")`
    width: 152px;
    height: 152px;
  `}
`;

export const OvalInsideGradient = styled.div`
  border-radius: 100%;
  display: flex;

  background: ${grayGradient2};

  width: 99.31px;
  height: 94.1px;

  ${media.greaterThan("1024px")`
    width: 152px;
    height: 144px;
  `}
`;

export const Image = styled.img`
  margin: auto;
  width: 48px;
  height: 56px;

  ${media.greaterThan("1024px")`
    width: 67.21px;
    height: 80px;
  `}
`;
