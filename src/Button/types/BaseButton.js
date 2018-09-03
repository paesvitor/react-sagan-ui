import styled, { css } from 'styled-components'
import defaultTheme from '../../config/theme'
import buttonPadding from '../../config/utils/buttonPadding'
import fontSize from '../../config/utils/fontSize'

const BaseButton = styled.button`
    ${context => css`
        /* 
        Base button configuration 
        */
        border-radius: ${context.theme.globalBorderRadius || defaultTheme.global.borderRadius};
        display: inline-block;
        cursor: pointer;
        transition: 0.2s all;
        padding: ${buttonPadding(context.theme.buttonSize || 10)};
        font-size: ${fontSize(context.theme.buttonFontSize || defaultTheme.button.fontSize)};
        background-color: ${defaultTheme.colors.black};
        color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default};
        border: 1px solid transparent;

        &:focus {
            outline: none;
        }

        &:active {
            transition: 0s all;
            transform: translateY(1px);
        }

        &:hover {
            opacity: 0.8;
        }

        /* 
        Full width Button
        */
        ${context.fluid && css`
            width: 100%;
        `}

        /* 
        Corner Types 
        */
        ${context.corners &&
        ((context.corners === 'rounded') && css`
            border-radius: ${context.theme.borderRadius || defaultTheme.button.border.radius};
        `) ||

        ((context.corners === 'pill') && css`
            border-radius: 20px;
        `)}}};

        /* 
        Sizes Types 
        */
        ${context.size &&
        ((context.size === 'small') && css`
            font-size: ${fontSize((context.theme.buttonFontSize - 2) || defaultTheme.button.fontSize - 2)};
            padding: ${buttonPadding((context.theme.buttonSize - 5) || 5)};
        `) ||

        ((context.size === 'large') && css`
            font-size: ${fontSize((context.theme.buttonFontSize + 2) || defaultTheme.button.fontSize + 2)}};
            padding: ${buttonPadding((context.theme.buttonSize + 5) || 15)};
        `)}

    `}
`

export default BaseButton
