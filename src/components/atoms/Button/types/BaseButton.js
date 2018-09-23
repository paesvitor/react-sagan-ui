import styled, { css } from "styled-components";

const BaseButton = styled.button`
  ${({ color, size, border, fluid, theme, shape }) => css`
    cursor: pointer;
    position: relative;
    transition: ${theme.buttonTransition || 0.2}s all;
    font-weight: ${theme.buttonFontWeight || 500};
    border: none;
    display: block;
    border: 1px solid transparent;
    padding: ${shape.getSize(size)};
    font-size: ${shape.getFontSize(size)};
    color: ${shape.getFontColor(color)};
    border-radius: ${shape.getBorderRadius(border)};

    /* Conditionals */
    width: ${fluid && `100%`};

    /* Pseudo Class */
    &:focus {
      outline: none;
    }

    &:disabled: {
      background: red;
      cursor: not-allowed;
    }
  `};
`;

export default BaseButton;
