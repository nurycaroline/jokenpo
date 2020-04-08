import styled from "styled-components";

export const Board = styled.div`
  max-width: 320px;
  height: 280px;
  margin-top: 20%;
`;

export const BackgroundLine = styled.img`
  margin: 65px auto 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  width: 166px;
  height: 188px;
`;

export const Options = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  left: 0;
  right: 0;
  max-width: 320px;
  margin: auto;
`;
