import defaultTheme from '../theme'
import { css } from 'styled-components'

const invertedColors = (context) => {
  return context.type &&
    ((context.type === 'primary') && css`
        border-color: ${context.theme.primaryColor || defaultTheme.colors.primary};
        color: ${context.theme.primaryColor || defaultTheme.colors.primary};

        &:hover {
            background-color: ${context.theme.primaryColor || defaultTheme.colors.primary};
            color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default}
        }
    `) ||

    ((context.type === 'secondary') && css`
        border-color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
        color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
        
        &:hover {
            background-color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
            color: ${context.theme.buttonFontColor || defaultTheme.button.colors.default}
        }
    `) ||

    ((context.type === 'success') && css`
        border-color: ${defaultTheme.colors.green.is500}; 
        color: ${defaultTheme.colors.green.is500};

        &:hover {
            background-color: ${defaultTheme.colors.green.is400}; 
            color: ${defaultTheme.colors.green.is800};
        }
    `) ||

    ((context.type === 'info') && css`
        border-color: ${defaultTheme.colors.blue.is500}; 
        color: ${defaultTheme.colors.blue.is500};

        &:hover {
            background-color: ${defaultTheme.colors.blue.is400}; 
            color: ${defaultTheme.colors.blue.is800};
        }
    `) ||

    ((context.type === 'warning') && css`
        border-color: ${defaultTheme.colors.yellow.is600}; 
        color: ${defaultTheme.colors.yellow.is600};

        &:hover {
            background-color: ${defaultTheme.colors.yellow.is400}; 
            color: ${defaultTheme.colors.yellow.is800};
        }
    `) ||

    ((context.type === 'danger') && css`
        border-color: ${defaultTheme.colors.red.is500};
        color: ${defaultTheme.colors.red.is500};

        &:hover {
            background-color: ${defaultTheme.colors.red.is400}; 
            color: ${defaultTheme.colors.red.is800};
        }
    `)
}

export default invertedColors
