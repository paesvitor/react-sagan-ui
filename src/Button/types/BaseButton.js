import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import makeButtonPadding from '../utils/makeButtonPadding'
import makeButtonFontColor from '../utils/makeButtonFontColor'
import toPx from 'utils/shared/toPx'
import makeColor from 'utils/colors/makeColor'
import makeShadow from 'utils/shared/makeShadow'

const BaseButton = styled.button`
    ${props => css`
        /* 
        * --> Base Button
        */
        cursor: pointer;
        display: inline-block;
        transition: 0.2s all;
        padding: ${makeButtonPadding(props.theme.buttonSize || 10)};
        font-size: ${toPx(props.theme.buttonFontSize || defaultTheme.button.fontSize)};
        color: ${makeButtonFontColor(props)};
        border: 1px solid transparent;
        border-radius: ${toPx(props.theme.buttonBorderRadius || defaultTheme.button.border.radius)};
        font-weight: bold;
        /* 
        * --> Global Button Props
        */
        /* Button has uppercase font? */
        ${props.theme.buttonUppercaseFont && 'text-transform: uppercase'}
        ${props.theme.buttonShadow && makeShadow(props.theme.buttonShadowAmount)}
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
                padding: ${makeButtonPadding((props.theme.buttonSize - 5) || 5)};
            `) ||
            ((props.size === 'large') && `
                font-size: ${toPx((props.theme.buttonFontSize + 2) || defaultTheme.button.fontSize + 2)}};
                padding: ${makeButtonPadding((props.theme.buttonSize + 5) || 15)};
            `)
        }
        /* Focus Style */
        &:focus { outline: none }
        /* Disabled styles */
        &:disabled {
            box-shadow: none;
            background-color: ${makeColor(props, -0.9)};
            cursor: not-allowed;
            border: none;
            color: #fff;
            &:hover {
                background-color: ${makeColor(props, -0.9)};
                color: #fff !important;
            }
        }
    `}
`

export default BaseButton
