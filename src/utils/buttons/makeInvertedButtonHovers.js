import { css } from 'styled-components'
import defaultTheme from 'config/theme'

const makeInvertedButtonsHovers = (props) => {
    switch (props.type) {
        case 'primary':
            return css`
                color: ${props.theme.buttonFontColor || defaultTheme.button.colors.default};
            `
        case 'secondary':
            return css`
                color: ${props.theme.buttonFontColor || defaultTheme.button.colors.default};
            `
        case 'success':
            return css`
                color: ${defaultTheme.button.colors.default};
            `
        case 'info':
            return css`
                color: ${defaultTheme.button.colors.default};
            `
        case 'warning':
            return css`
                color: ${defaultTheme.colors.gray.is900};
            `
        case 'danger':
            return css`
                color: ${defaultTheme.button.colors.default};
            `
    }
}

export default makeInvertedButtonsHovers
