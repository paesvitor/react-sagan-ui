import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import buttonsPadding from 'utils/buttons/makeButtonsPadding'
import toPx from 'utils/shared/toPx'

const BaseButton = styled.button`
    ${props => css`
        /* 
        * --> Base Button
        */
        cursor: pointer;
        display: inline-block;
        transition: 0.2s all;
        padding: ${buttonsPadding(props.theme.buttonSize || 10)};
        font-size: ${toPx(props.theme.buttonFontSize || defaultTheme.button.fontSize)};
        color: ${props.theme.buttonFontColor || defaultTheme.button.colors.default};
        border: 1px solid transparent;
        border-radius: ${toPx(props.theme.buttonBorderRadius || defaultTheme.button.border.radius)};
        font-weight: bold;
        /* 
        * --> Global Button Props
        */
        /* Button has uppercase font? */
        ${props.theme.buttonUppercaseFont && 'text-transform: uppercase'}
        /* 
        * --> Single Button Props
        */
        /* Full width Button*/
        ${props.fluid && 'width: 100%'}
        /* Corner Types */
        ${props.corners &&
            ((props.corners === 'rounded') && `
                border-radius: ${defaultTheme.button.border.radius}
            `) ||
            ((props.corners === 'pill') && `
                border-radius: 20px
            `)
        }}};
        /* Sizes Types */
        ${props.size &&
            ((props.size === 'small') && `
                font-size: ${toPx((props.theme.buttonFontSize - 2) || defaultTheme.button.fontSize - 2)};
                padding: ${buttonsPadding((props.theme.buttonSize - 5) || 5)};
            `) ||
            ((props.size === 'large') && `
                font-size: ${toPx((props.theme.buttonFontSize + 2) || defaultTheme.button.fontSize + 2)}};
                padding: ${buttonsPadding((props.theme.buttonSize + 5) || 15)};
            `)
        }
        &:focus { outline: none }
    `}
`

export default BaseButton
