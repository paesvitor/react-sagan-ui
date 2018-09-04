import defaultTheme from 'config/theme'
import { css } from 'styled-components'

const invertedColors = (context) => {
  return context.type &&
    ((context.type === 'primary') && css`
        border-color: ${context.theme.primaryColor || defaultTheme.colors.primary};
        color: ${context.theme.primaryColor || defaultTheme.colors.primary};
    `) ||

    ((context.type === 'secondary') && css`
        border-color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
        color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
    `) ||

    ((context.type === 'success') && css`
        border-color: ${defaultTheme.colors.green.is500}; 
        color: ${defaultTheme.colors.green.is500};
    `) ||

    ((context.type === 'info') && css`
        border-color: ${defaultTheme.colors.blue.is500}; 
        color: ${defaultTheme.colors.blue.is500};
    `) ||

    ((context.type === 'warning') && css`
        border-color: ${defaultTheme.colors.yellow.is600}; 
        color: ${defaultTheme.colors.yellow.is600};
    `) ||

    ((context.type === 'danger') && css`
        border-color: ${defaultTheme.colors.red.is500};
        color: ${defaultTheme.colors.red.is500};
    `)
}

export default invertedColors
