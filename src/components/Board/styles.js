import styled from "styled-components";
import media from "styled-media-query";

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
