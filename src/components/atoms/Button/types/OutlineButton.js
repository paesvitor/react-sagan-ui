import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import ButtonShape from '../Button.shape'
import Color from 'color'

const buttonShape = new ButtonShape()

const OutlineButton = styled(BaseButton)`
    ${props => css`
        background-color: transparent;
        color: ${buttonShape.getColor(props)};
        border-color: ${buttonShape.getColor(props)};

         /* Pseudo Class */
        &:hover {
            background-color: ${Color(buttonShape.getColor(props)).lighten(0.1).hex()};
            color: ${buttonShape.getFontColor(props)}
        }

        &:active {
            background-color: ${Color(buttonShape.getColor(props)).darken(0.1).hex()}
        }
    `}
`

export default OutlineButton
