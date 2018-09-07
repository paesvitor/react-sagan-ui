import defaultTheme from 'config/theme'
import Color from 'color'

const makeColor = (props, amount) => {
    const { theme, type } = props
    let color

    switch (type) {
        case 'primary':
            color = theme.primaryColor || defaultTheme.colorTypes.primary
            break
        case 'secondary':
            color = theme.secondaryColor || defaultTheme.colorTypes.secondary
            break
        default:
            color = defaultTheme.colorTypes[type]
    }

    if (amount) {
        color = Color(color).darken(amount).hex()
    }

    return color
}

export default makeColor
