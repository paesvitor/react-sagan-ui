import { colorShape } from "shapes";

// Base config for this shape
const config = {};

// This component shape
class AlertShape {
  // Shared Shapes
  getColor(props) {
    const color = colorShape(props.theme);
    return color[props.color];
  }
}

export default AlertShape;
