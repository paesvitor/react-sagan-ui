import defaultTheme from 'config/theme'

const makeButtonFontColor = (props) => {
    const { theme, type } = props
    let color

    switch (type) {
        case 'primary':
            color = theme.primaryButtonFontColor || defaultTheme.button.fontColor
            break
        case 'secondary':
            color = theme.secondaryButtonFontColor || defaultTheme.button.fontColor
            break
        default:
            color = defaultTheme.button.fontColor
    }

    return color
}

export default makeButtonFontColor
