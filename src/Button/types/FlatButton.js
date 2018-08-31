import styled, { css } from 'styled-components'
import defaultTheme from '../../config/theme'
import BaseButton from './BaseButton'

const FlatButton = styled(BaseButton)`
    ${context => css`
        /* 
        Color Types 
        */
        ${context.type &&
        ((context.type === 'primary') && css`
            background-color: ${context.theme.primaryColor || defaultTheme.colors.primary};
        `) ||

        ((context.type === 'secondary') && css`
            background-color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
        `) ||

        ((context.type === 'success') && css`
            background-color: ${defaultTheme.colors.green.is400}; 
            color: ${defaultTheme.colors.green.is800};
        `) ||

        ((context.type === 'info') && css`
            background-color: ${defaultTheme.colors.blue.is400}; 
            color: ${defaultTheme.colors.blue.is800};
        `) ||

        ((context.type === 'warning') && css`
            background-color: ${defaultTheme.colors.yellow.is400}; 
            color: ${defaultTheme.colors.yellow.is800};
        `) ||

        ((context.type === 'danger') && css`
            background-color: ${defaultTheme.colors.red.is400};
            color: ${defaultTheme.colors.red.is800};
        `)}}};
    `}
`

export default FlatButton
