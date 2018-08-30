// Colors
import colors from './colors'

colors.primary = colors.pink.is500
colors.secondary = colors.purple.is500

// Font
export const font = {
    size: 16,
    weights: {
        normal: 400,
        bold: 700
    }
}

export const border = {
    borderRadius: '3px'
}

// Button
export const button = {
    sizes: {
        paddingY: 10,
        paddingX: 30
    },

    border: {
        radius: '1px',
        size: '1px'
    },

    colors: {
        default: '#fff',
        active: {
            background: colors.black
        }
    }
}

// General Theme Export
export const theme = {
    font,
    button,
    colors,
    border
}

export default theme
