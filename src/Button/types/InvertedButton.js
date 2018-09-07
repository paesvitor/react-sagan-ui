import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import BaseButton from './BaseButton'
import buttonsHover from 'utils/buttons/makeFlatButtonsHovers'

// Makers
import makeInvertedButtonsColors from 'utils/colors/makeInvertedButtonsColors'
import makeShadow from 'utils/shared/makeShadow'
import makeInvertedButtonsHover from 'utils/buttons/makeInvertedButtonHovers'

const InvertedButton = styled(BaseButton)`
   ${props => css`
        /* Base styles */
        background: transparent;
        border: ${props.theme.buttonBorderSize || defaultTheme.button.border.size} solid;
        /* Makers */
        ${makeInvertedButtonsColors(props)}
        &:hover {
            ${buttonsHover(props)}
            ${makeInvertedButtonsHover(props)}
            ${makeShadow()}
        }
        /* Disabled styles for inverted button */
        &:disabled {
        box-shadow: none;
        border-color: ${defaultTheme.colors.gray.is400};
        color: ${defaultTheme.colors.gray.is400};
            &:hover {
                background: unset;
                border-color: ${defaultTheme.colors.gray.is400};
                cursor: not-allowed;
            }
        }
    `}
`

export default InvertedButton
