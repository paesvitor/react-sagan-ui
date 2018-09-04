// Colors
import colors from './colors'

colors.primary = colors.orange.is500
colors.secondary = colors.indigo.is500

// Font
export const font = {
  size: 16,
  weights: {
    normal: 400,
    bold: 700
  }
}

export const global = {
  borderRadius: '3px',
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

  border: {
    radius: '5px',
    size: '1px'
  },

  colors: {
    default: '#fff',
    active: {
      background: colors.black
    }
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
  alert
}

export default theme
