import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../config/theme'
import buttonPadding from '../config/utils/buttonPadding'
import fontSize from '../config/utils/fontSize'

const StyledButton = styled.button`
    border-radius: 1px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s all;
    padding: ${buttonPadding(10)};
    font-size: ${fontSize(0)};
    border: none;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    &:focus {
        outline: none;
    }

    &:active {
        background: ${theme.button.colors.active.background};
    }

    &:hover {
        opacity: 0.8;
    }

    /* Colors */
    ${props =>
    props.primary &&
        css`
            background: ${theme.colors.primary};
            color: white;
        `};

    ${props =>
    props.secondary &&
        css`
            background: ${theme.colors.secondary};
            color: ${theme.colors.white};
        `};

    ${props =>
    props.success &&
        css`
            background: ${theme.colors.green.is500};
            color: ${theme.colors.white};
        `};

    ${props =>
    props.rounded &&
        css`
            border-radius: 6px;
        `};

    ${props =>
    props.pill &&
        css`
            border-radius: 50px;
        `};

    /* Sizes */
    ${props =>
    props.small &&
        css`
            font-size: ${fontSize(-4)};
            padding: ${buttonPadding(5)};
        `};

    ${props =>
    props.medium &&
        css`
            font-size: ${fontSize(0)};
            padding: ${buttonPadding(10)};
        `};

    ${props =>
    props.large &&
        css`
            font-size: ${fontSize(4)};
            padding: ${buttonPadding(15)};
        `};
`

const Button = props => <StyledButton {...props}>{props.label}</StyledButton>

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export default Button
