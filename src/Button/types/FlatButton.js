import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import colorsFlat from 'utils/colors/colorsFlat'
import buttonsHover from 'utils/buttons/buttonsHover'
import { colorWeights } from 'utils/constants'

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
      ${colorsFlat(
    context,
    (context.theme.buttonFlatColorWeight || colorWeights.IS_900),
    (context.theme.buttonFlatBackgroundWeight || colorWeights.IS_A500)
  )}

  ${buttonsHover(context)}
    `}

    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

export default FlatButton
