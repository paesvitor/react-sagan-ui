import { defaultColors, defaultFontSize } from 'defaultTheme'

/**
 * Receives theme from component context to configure this shape
 * @param {Object} theme
 * @returns {Object} color
 */
export const colorShape = (theme) => {
    return {
        primary: theme.primaryColor || defaultColors.indigo,
        secondary: theme.primaryColor || defaultColors.orange,
        info: defaultColors.blue,
        warning: defaultColors.yellow,
        danger: defaultColors.red,
        success: defaultColors.green
    }
}

/**
 * @returns {Object} size
 */
export const fontSizeShape = () => {
    const { baseSize, scaleRatio } = defaultFontSize

    return {
        xs: `${baseSize - (scaleRatio * 2)}rem`,
        sm: `${baseSize - (scaleRatio)}rem`,
        md: `${baseSize}rem`,
        lg: `${baseSize + (scaleRatio)}rem`,
        xl: `${baseSize + (scaleRatio * 2)}rem`
    }
}
