import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import buttonsPadding from 'utils/buttons/buttonsPadding'
import toPx from 'utils/shared/toPx'

const BaseButton = styled.button`
    ${context => css`
        /* 
        Base button configuration 
        */
        display: inline-block;
        cursor: pointer;
        transition: 0.2s all;
        padding: ${buttonsPadding(context.theme.buttonSize || 10)};
        font-size: ${toPx(context.theme.buttonFontSize || defaultTheme.button.fontSize)};
        background-color: ${defaultTheme.colors.black};
        color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default};
        border: 1px solid transparent;
        position: relative;
        text-transform: uppercase;
        font-weight: bold;
        
        &:focus { outline: none;}
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
            border-radius: ${defaultTheme.button.border.radius};
        `) ||

        ((context.corners === 'pill') && css`
            border-radius: 20px;
        `)}}};

        /* 
        Sizes Types 
        */
        ${context.size &&
        ((context.size === 'small') && css`
            font-size: ${toPx((context.theme.buttonFontSize - 2) || defaultTheme.button.fontSize - 2)};
            padding: ${buttonsPadding((context.theme.buttonSize - 5) || 5)};
        `) ||

        ((context.size === 'large') && css`
            font-size: ${toPx((context.theme.buttonFontSize + 2) || defaultTheme.button.fontSize + 2)}};
            padding: ${buttonsPadding((context.theme.buttonSize + 5) || 15)};
        `)}

    `}
`

export default BaseButton
