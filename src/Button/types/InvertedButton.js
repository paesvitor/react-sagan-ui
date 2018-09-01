import styled, { css } from 'styled-components'
import defaultTheme from '../../config/theme'
import BaseButton from './BaseButton'
import invertedColors from '../../config/utils/invertedColors'

const InvertedButton = styled(BaseButton)`
   ${context => css`
        background: transparent;
        border: ${context.theme.buttonBorderSize || defaultTheme.button.border.size} solid;
        /* 
        Inverted Colors
        @returns    - return all inverted color types 
        @params     - context
        */
        ${invertedColors(context)}
    `}
`

export default InvertedButton
