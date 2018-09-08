import defaultTheme from 'config/theme'

const buttonPadding = size => {
    const { globals: { buttonBaseGrowth } } = defaultTheme

    const y = buttonBaseGrowth
    const x = buttonBaseGrowth * 2

    return `${y * size}rem ${x * size}rem`
}

export default buttonPadding
