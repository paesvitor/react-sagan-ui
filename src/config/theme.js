// Colors
// import colors from './colors'
export const colors = {
    red: '#F44336',
    pink: '#E91E63',
    purple: '#9C27B0',
    deepPurple: '#673AB7',
    indigo: '#3F51B5',
    blue: '#2196F3',
    lightBlue: '#03A9F4',
    cyan: '#00BCD4',
    teal: '#009688',
    green: '#4CAF50',
    lightGreen: '#8BC34A',
    lime: '#CDDC39',
    yellow: '#FFEB3B',
    amber: '#FFC107',
    orange: '#FF9800',
    deepOrange: '#FF5722',
    brown: '#795548',
    gray: '#9E9E9E',
    blueGray: '#607D8B',
    white: '#fff',
    black: '#000'
}

export const colorTypes = {
    primary: colors.indigo,
    secondary: colors.orange,
    info: colors.blue,
    warning: colors.yellow,
    danger: colors.red,
    success: colors.green
}

export const mainColors = {
    primary: colors.indigo,
    secondary: colors.orange
}

// Font
export const font = {
    size: 16,
    weights: {
        normal: 400,
        bold: 700
    }
}

export const global = {
    borderRadius: 3,
    paddingY: 15,
    paddingX: 15
}

// Button
export const button = {
    sizes: {
        paddingY: 10,
        paddingX: 30
    },

    fontSize: 12,
    fontColor: colors.white,

    border: {
        radius: 0,
        size: 1
    },

    colors: {
        default: colors.white,
        hoverAmount: -0.1,
        activeAmount: 0.4
    }
}

export const card = {
    cardShadow: true,
    headerSize: 220,
    titleColor: colors.gray.is900,
    dateColor: colors.gray.is500,
    contentColor: colors.gray.is800
}

export const alert = {
    font: {
        size: 13
    }
}

// General Theme Export
export const theme = {
    font,
    button,
    colors,
    global,
    card,
    alert,
    mainColors,
    colorTypes
}

export default theme
