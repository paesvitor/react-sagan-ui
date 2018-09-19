import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import ButtonShape from '../Button.shape'
import Color from 'color'

const buttonShape = new ButtonShape()

const DefaultButton = styled(BaseButton)`
    ${props => css`
        background-color: ${buttonShape.getColor(props)};

        /* Pseudo Class */
        &:hover {
            background-color: ${Color(buttonShape.getColor(props)).whiten(0.15).hex()}
        }

        &:active {
            background-color: ${Color(buttonShape.getColor(props)).blacken(0.15).hex()}
        }
    `}
`

export default DefaultButton
