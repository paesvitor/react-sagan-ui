import defaultTheme from 'config/theme'
import Color from 'color'

const makeColor = (props, amount) => {
    const { theme, color } = props
    let finalColor

    switch (color) {
        case 'primary':
            finalColor = theme.primaryColor || defaultTheme.colorTypes.primary
            break
        case 'secondary':
            finalColor = theme.secondaryColor || defaultTheme.colorTypes.secondary
            break
        default:
            finalColor = defaultTheme.colorTypes[color]
    }

    if (amount) {
        finalColor = Color(finalColor).darken(amount).hex()
    }

    return finalColor
}

export default makeColor
