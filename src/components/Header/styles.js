import styled from "styled-components";
import media from "styled-media-query";
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

  ${media.greaterThan("1024px")`
    max-width: 700px;
    height: 150px;
    margin: auto;
    border-radius: 8px;
  `}
`;

export const Logo = styled.img`
  height: 48px;
  margin-left: 23px;

  ${media.greaterThan("1024px")`
    height: 96px;
  `}
`;

export const Score = styled.div`
  background: ${grayGradient};
  box-shadow: ${grayShadow};
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

  ${media.greaterThan("1024px")`
    width: 150px;
    height: 114px;
    border-radius: 8px;

    p:nth-child(1){
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.5px;
    }
    p:nth-child(2){
      font-size: 64px;
      line-height: 64px;
    }
  `}
`;
