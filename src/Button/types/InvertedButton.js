import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import BaseButton from './BaseButton'
import colorsInverted from 'utils/colors/colorsInverted'
import buttonsHover from 'utils/buttons/buttonsHover'

const InvertedButton = styled(BaseButton)`
   ${context => css`
        background: transparent;
        border: ${context.theme.buttonBorderSize || defaultTheme.button.border.size} solid;
        /* 
        Inverted Colors
        @returns    - return all inverted color types 
        @params     - context
        */
        ${colorsInverted(context)}
        ${buttonsHover(context)}
        /* 
        Inverted Button Font Colors
         */
        &:hover {
            box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
        }

         ${context.type &&
        ((context.type === 'primary') && css`
            &:hover {
                color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default}
            }
        `) ||

        ((context.type === 'secondary') && css`
            &:hover {
                color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default}
            }
        `) ||

        ((context.type === 'success') && css`
            &:hover {
                color: ${defaultTheme.button.colors.default};
            }
        `) ||

        ((context.type === 'info') && css`
            &:hover {
                color: ${defaultTheme.button.colors.default};
            }
        `) ||

        ((context.type === 'warning') && css`
            &:hover {
                color: ${defaultTheme.colors.gray.is900};
            }
        `) ||

        ((context.type === 'danger') && css`
            &:hover {
                color: ${defaultTheme.button.colors.default};
            }
        `)}
    `}
`

export default InvertedButton
