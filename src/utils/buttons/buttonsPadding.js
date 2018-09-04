import { button } from 'config/theme'

const buttonPadding = size => {
  let y
  let x

  if (size > 0) {
    y = (button.sizes.paddingY / 100) * size * 10
    x = (button.sizes.paddingX / 100) * size * 10
  }

  return `${y}px ${x}px`
}

export default buttonPadding
