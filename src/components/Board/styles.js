import styled from "styled-components";
import media from "styled-media-query";
import { white } from "../../layout/colors";

export const Board = styled.div`
  max-width: 320px;
  height: 280px;
  margin-top: 30%;

  ${media.greaterThan("small")`
    margin-top: 10%;
  `}
`;

export const BackgroundLineBasic = styled.img`
  margin: 65px auto 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  width: 166px;
  height: 188px;

  ${media.greaterThan("small")`
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

  ${media.greaterThan("small")`
    max-width: 476px;
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

  ${media.greaterThan("small")`
    width: 100%;
    height: auto;
    max-width: 658px;
  `}
`;

export const Choice = styled.div`
  width: 130px;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.greaterThan("small")`
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

  ${media.greaterThan("small")`
    font-size: 24px;
  `}
`;
