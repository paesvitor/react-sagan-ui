import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import flatColors from '../../config/utils/flatColors'
import { colorWeights } from '../../config/utils/constants'

const FlatButton = styled(BaseButton)`
    ${context => css`
        /* 
        Flat Colors
        @returns    - return all flat color types 
        @params
        @Object     - context 
        @String     - colorWeight (default: is800)
        @String     - backgroundWeight (default: is400)

        */
      ${flatColors(
    context,
    (context.theme.buttonFlatColorWeight || colorWeights.IS_900),
    (context.theme.buttonFlatBackgroundWeight || colorWeights.IS_300)
  )}
    `}
`

export default FlatButton
