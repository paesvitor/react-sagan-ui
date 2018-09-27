import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import InputShape from "./Input.shape";
import PropTypes from "prop-types";

const inputShape = new InputShape();

const StyledInput = styled.input`
    ${({ theme, error }) => css`
        padding: ${theme.inputPadding || 1}rem;
        display: block;
        width: 100%;
        border: none;
        box-sizing: border-box;
        border-radius: ${theme.inputBorderRadius || 0}px;
        background-color: ${theme.inputBackgroundColor || "#fff"};
        transition: 0.2s all;
        border: ${theme.inputBorderSize || 1}px solid
            ${error ? "#FF1744" : theme.inputBorderColor || "#cacaca"};

        &:focus {
            border: ${theme.inputBorderSize || 1}px solid
                ${theme.inputFocusBorderColor || "#9ec3ff"};
            outline: none;
            -webkit-box-shadow: inset 0 0 0px 9999px white,
                0 0 8px
                    ${theme.inputFocusShadowColor || "rgba(102, 175, 233, 0.6)"};
        }
    `};
`;

const StyledInputError = styled.div`
    color: #f44336;
    margin-top: 0.5rem;
    font-size: 0.8rem;
`;

const Input = props => {
    const { error } = props;

    return (
        <Fragment>
            <StyledInput {...props} />
            {error && <StyledInputError>{error}</StyledInputError>}
        </Fragment>
    );
};

Input.propTypes = {
    /**
     * Input error message
     */
    error: PropTypes.string
};

export default Input;
