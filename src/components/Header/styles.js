import styled from "styled-components";
import {
  gray,
  grayDark,
  grayGradient,
  grayShadow,
  blue,
} from "../../layout/colors";

export const Header = styled.header`
  border: 1px solid ${gray};
  border-radius: 5px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 48px;
  margin-left: 23px;
`;

export const Score = styled.div`
  background: ${grayGradient};
  box-shadow: 0px 3px 3px ${grayShadow};
  border-radius: 4px;
  width: 80px;
  height: 72px;
  margin-right: 12px;

  p {
    text-align: center;
  }

  p:nth-child(1) {
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5625px;
    margin-top: 10px;
    color: ${blue};
  }

  p:nth-child(2) {
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    color: ${grayDark};
  }
`;
