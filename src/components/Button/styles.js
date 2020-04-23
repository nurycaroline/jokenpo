import styled, { css } from "styled-components";
import { white, blueDark, grayGradient, grayShadow } from "../../layout/colors";

export const Button = styled.button`
  border: 1px solid ${white};
  border-radius: 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2.5px;

  outline: none;

  ${(props) =>
    props.styled === "primary" &&
    css`
      border: 1px solid ${white};
      color: ${white};
      background: none;
    `}

  ${(props) =>
    props.styled === "secondary" &&
    css`
      color: ${blueDark};
      background: ${grayGradient};
      box-shadow: ${grayShadow};
    `}

  &:hover {
    background: ${grayGradient};
    color: ${blueDark};
  }
`;
