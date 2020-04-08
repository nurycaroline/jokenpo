import styled from "styled-components";
import {
  grayDark2,
  grayGradient2,
  grayGradient3,
  grayShadow,
} from "../../layout/colors";

export const Option = styled.div`
  width: 130px;
  height: 133px;
  border-radius: 100%;
  box-shadow: ${grayShadow};

  background: ${(props) => props.color};

  width: 129.37px;
  height: 132.66px;
`;

export const OvalBackground = styled.div`
  border-radius: 100%;

  background: ${(props) => props.color};

  width: 129.37px;
  height: 126.78px;
`;

export const OvalGradient = styled.div`
  border-radius: 100%;
  padding-top: 15px;

  background: ${grayGradient3};

  width: 129.37px;
  height: 126.78px;
`;

export const OvalInsideBackground = styled.div`
  border-radius: 100%;
  margin: auto;

  background: ${grayDark2};

  width: 99.31px;
  height: 99.33px;
`;

export const OvalInsideGradient = styled.div`
  border-radius: 100%;
  display: flex;

  background: ${grayGradient2};

  width: 99.31px;
  height: 94.1px;
`;

export const Image = styled.img`
  margin: auto;
  max-width: 48px;
  max-height: 56px;
`;
