import styled from "styled-components";
import media from "styled-media-query";
import {
  grayDark2,
  grayGradient2,
  grayGradient3,
  grayShadow,
  grayShadowLight,
} from "../../layout/colors";

export const Option = styled.div`
  width: 130px;
  height: 133px;
  border-radius: 100%;
  box-shadow: ${grayShadow};

  background: ${(props) => props.color};

  width: 129.37px;
  height: 132.66px;

  ${media.greaterThan("small")`
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

  ${media.greaterThan("small")`
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

  ${media.greaterThan("small")`
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

  ${media.greaterThan("small")`
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

  ${media.greaterThan("small")`
    width: 152px;
    height: 144px;
  `}
`;

export const Image = styled.img`
  margin: auto;
  width: 48px;
  height: 56px;

  ${media.greaterThan("small")`
    width: 67.21px;
    height: 80px;
  `}
`;
