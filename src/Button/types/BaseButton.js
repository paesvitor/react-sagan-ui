import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import makeButtonPadding from '../utils/makeButtonPadding'
import makeButtonFontColor from '../utils/makeButtonFontColor'
import makeColor from 'utils/colors/makeColor'
import makeShadow from 'utils/shared/makeShadow'
import toRem from 'utils/shared/toRem'

const BaseButton = styled.button`
    ${props => css`
        /* 
        * --> Base Button
        */
        cursor: pointer;
        display: inline-block;
        transition: ${(props.theme.buttonTransition || 0.2) + 's'};
        padding: ${makeButtonPadding(3)};
        font-size: ${toRem(defaultTheme.font.sizes.md)};
        color: ${makeButtonFontColor(props)};
        border: 1px solid transparent;
        border-radius: ${toRem(props.theme.buttonBorderRadius || 0)};
        font-weight: 400;
        display: flex;
        align-items: center;
        line-height: 1;
        .button-left-icon {
            display: flex;
            margin-right: 1rem;
        }
        .button-right-icon {
            display: flex;
            margin-left: 1rem;
        }
        .button-label {
            flex: 1;
        }
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
                border-radius: 3px
            `) ||
            ((props.corners === 'pill') && `
                border-radius: 20px
            `)
        }}};
        /* Sizes Types */
        ${props.size &&
            ((props.size === 'sm') && `
                font-size: ${toRem(defaultTheme.font.sizes.sm)};
                padding: ${makeButtonPadding(2)};
            `) ||
            ((props.size === 'lg') && `
                font-size: ${toRem(defaultTheme.font.sizes.lg)};
                padding: ${makeButtonPadding(4)};
            `)
        }
        /* Focus Style */
        &:focus { outline: none }
        /* Disabled styles */
        &:disabled {
            box-shadow: none;
            background-color: ${makeColor(props, -0.5)};
            cursor: not-allowed;
            border: none;
            color: #fff;
            &:hover {
                background-color: ${makeColor(props, -0.5)};
                /* color: #fff !important; */
            }
        }
    `}
`

export default BaseButton
