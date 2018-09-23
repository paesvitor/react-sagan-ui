import styled, { css } from "styled-components";
import BaseButton from "./BaseButton";
import Color from "color";

const OutlineButton = styled(BaseButton)`
  ${({ color, shape }) => css`
    background-color: transparent;
    color: ${shape.getColor(color)};
    border-color: ${shape.getColor(color)};

    /* Pseudo Class */
    &:hover {
      background-color: ${Color(shape.getColor(color))
        .lighten(0.1)
        .hex()};
      color: ${shape.getFontColor(color)};
    }

    &:active {
      background-color: ${Color(shape.getColor(color))
        .darken(0.1)
        .hex()};
    }
  `};
`;

export default OutlineButton;
