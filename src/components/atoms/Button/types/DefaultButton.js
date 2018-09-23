import styled, { css } from "styled-components";
import BaseButton from "./BaseButton";
import Color from "color";

const DefaultButton = styled(BaseButton)`
  ${({ color, shape }) => css`
    background-color: ${shape.getColor(color)};
    &:hover {
      background-color: ${Color(shape.getColor(color))
        .whiten(0.15)
        .hex()};
    }
    &:active {
      background-color: ${Color(shape.getColor(color))
        .blacken(0.15)
        .hex()};
    }
  `};
`;

export default DefaultButton;
