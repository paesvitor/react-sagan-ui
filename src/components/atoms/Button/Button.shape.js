import { colorShape, fontSizeShape } from "shapes";

// Base config for this shape
const buttonConfig = {
  baseSize: 1,
  scaleRatio: 0.15
};

// This component shape
class ButtonShape {
  constructor(theme) {
    this.theme = theme || {};
  }
  // Shared shapes
  getColor(color) {
    const colors = colorShape(this.theme);
    return colors[color];
  }

  getFontSize(size) {
    const fontSizes = fontSizeShape();
    return fontSizes[size];
  }

  // This component shapes
  getSize(size) {
    const { baseSize, scaleRatio } = buttonConfig;

    const sizes = {
      xs: `${baseSize - scaleRatio * 2}rem ${(baseSize - scaleRatio * 2) *
        2}rem`,
      sm: `${baseSize - scaleRatio}rem ${(baseSize - scaleRatio) * 2}rem`,
      md: `${baseSize}rem ${baseSize * 2}rem`,
      lg: `${baseSize + scaleRatio}rem ${(baseSize + scaleRatio) * 2}rem`,
      xl: `${baseSize + scaleRatio * 2}rem ${(baseSize + scaleRatio * 2) *
        2}rem`
    };
    return sizes[size];
  }

  getFontColor(color) {
    const fontColors = {
      primary: this.theme.primaryButtonColor || "#fff",
      secondary: this.theme.secondaryButtonColor || "#fff",
      success: this.theme.successButtonColor || "#fff",
      warning: "#000",
      danger: "#fff",
      info: "#fff"
    };

    return fontColors[color];
  }

  getBorderRadius(border) {
    const borderRadius = {
      pill: "999px",
      rounded: "4px"
    };

    return borderRadius[border];
  }
}

export default ButtonShape;
