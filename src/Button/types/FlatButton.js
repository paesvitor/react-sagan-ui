import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import defaultTheme from 'config/theme'

// Makers
import makeFlatButtonsColors from 'utils/colors/makeFlatButtonsColors'
import makeFlatButtonsHovers from 'utils/buttons/makeFlatButtonsHovers'
import makeShadow from 'utils/shared/makeShadow'

const FlatButton = styled(BaseButton)`
    ${context => css`
        ${makeFlatButtonsColors(context, context.theme.buttonFlatColorWeight, context.theme.buttonFlatBackgroundWeight)}
        /* Creates Buttons hovers for flat button */
        ${makeFlatButtonsHovers(context)}
        /* If buttonShadow is true, creates Buttons shadow */
        ${makeShadow() && context.theme.buttonShadow}
    `}
    /* Disabled styles for flat button */
    &:disabled {
        box-shadow: none;
        background-color: ${defaultTheme.colors.gray.is400};
        &:hover {
            background-color: ${defaultTheme.colors.gray.is400};
            cursor: not-allowed;
        }
    }
`

export default FlatButton
