import styled, { css } from "styled-components";
import ButtonShape from "../Button.shape";

const buttonShape = new ButtonShape();

const BaseButton = styled.button`
  ${props => css`
    /* Base */
    cursor: pointer;
    position: relative;
    transition: ${(props.buttonTransition || 0.2) + "s all"};
    font-weight: ${props.buttonFontWeight || 500};
    border: none;
    display: inline-block;
    border: 1px solid transparent;
    padding: ${buttonShape.getSize(props)};
    font-size: ${buttonShape.getFontSize(props)};
    color: ${buttonShape.getFontColor(props)};

    /* Conditionals */
    width: ${props.fluid && `100%`};

    /* Pseudo Class */
    &:focus {
      outline: none;
    }
  `};
`;

export default BaseButton;
