import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import flatColors from '../../config/utils/flatColors'

const FlatButton = styled(BaseButton)`
    ${context => css`
        /* 
        Flat Colors
        @returns    - return all flat color types 
        @params     - context
        */
        ${flatColors(context)}
    `}
`

export default FlatButton
