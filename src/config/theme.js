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

export const globals = {
    borderRadius: 2,
    fontBaseSize: 1,
    fontBaseGrowth: 0.250,
    buttonBaseGrowth: 0.2
}

export const spacing = {
    0: 0,
    xs: globals.fontBaseSize * 0.5,
    sm: globals.fontBaseSize * 0.75,
    md: globals.fontBaseSize * 1.25,
    lg: globals.fontBaseSize * 2,
    xl: globals.fontBaseSize * 3.25,
    xxl: globals.fontBaseSize * 5.25
}

export const sides = {
    0: '',
    l: 'left',
    t: 'top',
    r: 'right',
    b: 'bottom'
}

export const mainColors = {
    primary: colors.indigo,
    secondary: colors.orange
}

// Font
export const font = {
    sizes: {
        xs: 0.5,
        sm: 0.75,
        md: 1,
        lg: 1.25,
        xl: 1.5,
        xxl: 1.75
    }
}

// Button
export const button = {
    baseSize: 1,
    fontColor: colors.white,

    colors: {
        default: colors.white,
        hoverAmount: -0.15,
        activeAmount: 0.4
    }
}

export const card = {
    cardShadow: true,
    headerSize: 220
}

// General Theme Export
export const theme = {
    font,
    button,
    colors,
    globals,
    card,
    mainColors,
    colorTypes,
    spacing
}

export default theme
