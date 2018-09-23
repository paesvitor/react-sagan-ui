import { colorShape } from "shapes";

// Base config for this shape
const config = {};

// This component shape
class AlertShape {
  constructor(theme) {
    this.theme = theme;
  }

  // Shared Shapes
  getColor(color) {
    const colors = colorShape(this.theme);
    return colors[color];
  }

  // This shapes
  getFontColor(color) {
    const fontColors = {
      warning: "#000"
    };

    return fontColors[color] || "#fff";
  }
}

export default AlertShape;
