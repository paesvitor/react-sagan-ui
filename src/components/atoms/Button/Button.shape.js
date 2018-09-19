import { colorShape, fontSizeShape } from 'shapes'

// Base config for this shape
const buttonConfig = {
    baseSize: 1,
    scaleRatio: 0.25
}

// This component shape
class ButtonShape {
    // Shared shapes
    getColor(props) {
        const color = colorShape(props.theme)
        return color[props.color]
    }

    getFontSize(props) {
        const fontSize = fontSizeShape()
        return fontSize[props.size]
    }

    // This component shapes
    getSize(props) {
        const { baseSize, scaleRatio } = buttonConfig

        const size = {
            xs: `${baseSize - (scaleRatio * 2)}rem ${(baseSize - (scaleRatio * 2)) * 2}rem`,
            sm: `${baseSize - scaleRatio}rem ${(baseSize - scaleRatio) * 2}rem`,
            md: `${baseSize}rem ${baseSize * 2}rem`,
            lg: `${baseSize + scaleRatio}rem ${(baseSize + scaleRatio) * 2}rem`,
            xl: `${baseSize + (scaleRatio * 2)}rem ${(baseSize + (scaleRatio * 2)) * 2}rem`
        }
        return size[props.size]
    }

    getFontColor(props) {
        const fontColor = {
            primary: props.primaryButtonColor || '#fff',
            secondary: props.secondaryButtonColor || '#fff',
            success: props.successButtonColor || '#fff',
            warning: '#000',
            danger: '#fff',
            info: '#fff'
        }

        return fontColor[props.color]
    }
}

export default ButtonShape
