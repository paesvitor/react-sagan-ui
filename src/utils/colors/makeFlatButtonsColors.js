import defaultTheme from 'config/theme'
import { css } from 'styled-components'
import { colorWeights } from 'utils/constants'

const flatColors = (props, colorWeight = colorWeights.IS_900, backgroundWeight = colorWeights.IS_400) => {
    switch (props.type) {
        case 'primary':
            return css`
                background-color: ${props.theme.primaryColor || defaultTheme.colors.primary};
                color: ${props.theme.primaryButtonFontColor || '#fff'};
            `
        case 'secondary':
            return css`
                background-color: ${props.theme.secondaryColor || defaultTheme.colors.secondary};
                color: ${props.theme.secondaryButtonFontColor || '#fff'};
            `
        case 'success':
            return css`
                background-color: ${defaultTheme.colors.green[backgroundWeight]}; 
                color: #fff;
            `
        case 'danger':
            return css`
                background-color: ${defaultTheme.colors.red[backgroundWeight]};
                color: #fff;
            `
        case 'warning':
            return css`
                background-color: ${defaultTheme.colors.yellow[backgroundWeight]}; 
                color: #000;
            `
        case 'info':
            return css`
                background-color: ${defaultTheme.colors.blue[backgroundWeight]};
                color: #fff;
            `
    }
}

export default flatColors
