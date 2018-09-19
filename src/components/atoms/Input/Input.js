import React from "react";
import styled, { css } from "styled-components";
import InputShape from "./Input.shape";
import { shadow } from "styles/mixins";

const inputShape = new InputShape();

const StyledInput = styled.input`
  ${props => css`
    padding: 1rem;
    display: block;
    width: 100%;
    border: none;
    box-sizing: border-box;
    background-color: #fff;
    transition: 0.2s all;
    border: 1px solid #000;
    ${shadow()};

    /* Pseudo */
    &:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0px 9999px white;
    }

    &:focus {
      border: 1px solid blue;
      outline: none;

      &:-webkit-autofill:focus {
        -webkit-box-shadow: inset 0 0 0px 9999px white,
          0 0 8px rgba(102, 175, 233, 0.6);
      }
    }
  `};
`;

const Input = props => <StyledInput {...props} />;

export default Input;
