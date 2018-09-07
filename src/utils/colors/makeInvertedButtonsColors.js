import defaultTheme from 'config/theme'
import { css } from 'styled-components'

const makeInvertedButtonsColors = (props) => {
    switch (props.type) {
        case 'primary':
            return css`
                border-color: ${props.theme.primaryColor || defaultTheme.colors.primary};
                 color: ${props.theme.primaryColor || defaultTheme.colors.primary};
            `
        case 'secondary':
            return css`
                border-color: ${props.theme.secondaryColor || defaultTheme.colors.secondary};
                color: ${props.theme.secondaryColor || defaultTheme.colors.secondary};
            `
        case 'success':
            return css`
                border-color: ${defaultTheme.colors.green.is500}; 
                color: ${defaultTheme.colors.green.is500};
            `
        case 'danger':
            return css`
                border-color: ${defaultTheme.colors.red.is500};
                color: ${defaultTheme.colors.red.is500};
            `
        case 'warning':
            return css`
                border-color: ${defaultTheme.colors.yellow.is600}; 
                color: ${defaultTheme.colors.yellow.is600};
            `
        case 'info':
            return css`
                border-color: ${defaultTheme.colors.blue.is500}; 
                color: ${defaultTheme.colors.blue.is500};
            `
    }
}

export default makeInvertedButtonsColors
