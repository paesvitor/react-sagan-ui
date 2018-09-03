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

        /* 
        Inverted Button Hover Styles
         */
         ${context.type &&
        ((context.type === 'primary') && css`
            &:hover {
                background-color: ${context.theme.primaryColor || defaultTheme.colors.primary};
                color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default}
            }
        `) ||

        ((context.type === 'secondary') && css`
            &:hover {
                background-color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
                color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default}
            }
        `) ||

        ((context.type === 'success') && css`
            &:hover {
                background-color: ${defaultTheme.colors.green.is400}; 
                color: ${defaultTheme.colors.green.is800};
            }
        `) ||

        ((context.type === 'info') && css`
            &:hover {
                background-color: ${defaultTheme.colors.blue.is400}; 
                color: ${defaultTheme.colors.blue.is800};
            }
        `) ||

        ((context.type === 'warning') && css`
            &:hover {
                background-color: ${defaultTheme.colors.yellow.is400}; 
                color: ${defaultTheme.colors.yellow.is800};
            }
        `) ||

        ((context.type === 'danger') && css`
            &:hover {
                background-color: ${defaultTheme.colors.red.is400}; 
                color: ${defaultTheme.colors.red.is800};
            }
        `)}
    `}
`

export default InvertedButton
