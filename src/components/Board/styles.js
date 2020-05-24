import styled from "styled-components";
import media from "styled-media-query";
import { white } from "../../layout/colors";

export const Board = styled.div`
  max-width: 320px;
  height: 280px;
  margin-top: 10%;

  ${media.greaterThan("1024px")`
    margin-top: 70px;
    max-width: initial;
    height: 410px;
  `}
`;

export const BackgroundLineBasic = styled.img`
  margin: 65px auto 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  width: 166px;
  height: 188px;

  ${media.greaterThan("1024px")`
    width: 254px;
    height: 287px;
  `}
`;

export const OptionsBasic = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  left: 0;
  right: 0;
  max-width: 320px;
  margin: auto;

  ${media.greaterThan("1024px")`
    max-width: 476px;
  `}
`;

export const OptionsAdvanced = styled.div`
  position: absolute;
  /* display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap; */
  left: 0;
  right: 0;
  max-width: 320px;
  max-height: 305px;
  margin: auto;

  & > div:nth-child(1) {
    margin: -20px auto 0 auto;
  }
  & > div:nth-child(2) {
    margin-top: -50px;
    margin-left: -10px;
  }
  & > div:nth-child(3) {
    float: right;
    margin-top: -130px;
    margin-right: -10px;
  }
  & > div:nth-child(4) {
    margin-left: 30px;
    margin-top: -10px;
  }
  & > div:nth-child(5) {
    float: right;
    margin-top: -130px;
    margin-right: 30px;
  }

  & > div {
    transform: scale(0.75);
    width: 130px;
  }

  ${media.greaterThan("1024px")`
    max-width: 476px;

    & > div {
      transform: scale(0.8);
      width: 200px;
      height: 200px;
    }

    & > div:nth-child(1) {
      margin: -50px auto 0 auto;
    }
    & > div:nth-child(2) {
      margin-top: -50px;
      margin-left: -10px;
    }
    & > div:nth-child(3) {
      float: right;
      margin-top: -200px;
      margin-right: -10px;
    }
    & > div:nth-child(4) {
      margin-left: 30px;
      margin-top: -10px;
    }
    & > div:nth-child(5) {
      float: right;
      margin-top: -200px;
      margin-right: 30px;
    }

  `}
`;

export const Choices = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 324px;
  height: 182px;

  ${media.greaterThan("1024px")`
    width: 90%;
    height: auto;
    max-width: initial;
  `}
`;

export const Choice = styled.div`
  width: 130px;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.greaterThan("1024px")`
    width: 292.61px;
    height: 395px;
    flex-direction: column-reverse;
    padding-bottom: 50px;
    box-sizing: border-box;
  `}
`;

export const Label = styled.h2`
  color: ${white};
  text-align: center;
  font-size: 15px;
  line-height: 32px;

  ${media.greaterThan("1024px")`
    font-size: 24px;
  `}
`;
