import styled from "styled-components";
import media from "styled-media-query";
import { white } from "../../layout/colors";
import Button from "../Button";

export const Result = styled.div`
  position: absolute;
  margin: 220px auto 0 auto;
  left: 0;
  right: 0;
  width: 220px;

  h2 {
    font-weight: bold;
    font-size: 56px;
    line-height: 67px;
    text-align: center;
    color: ${white};
  }

  ${media.greaterThan("1024px")`
    margin-top: 160px;
  `}
`;

export const ButtonPlay = styled(Button)`
  width: 220px;
  height: 48px;
`;
