import styled from "styled-components";
import media from "styled-media-query";

export const Mode = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: right;
  padding: 10px;
  box-sizing: border-box;

  button {
    width: 100px;
    height: 35px;
  }

  ${media.greaterThan('1024px')`
    padding-right: 240px;
  `}
`;
