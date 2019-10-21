import { defaultColors, defaultFontSize, mainColors } from "../defaultTheme";

/**
 * Receives theme from component context to configure this shape
 * @param {Object} theme
 * @returns {Object} color
 */
export const colorShape = (theme = {}) => {
  return {
    primary: theme.primaryColor || mainColors.primary,
    secondary: theme.secondaryColor || mainColors.secondary,
    info: defaultColors.info,
    warning: defaultColors.warning,
    danger: defaultColors.danger,
    success: defaultColors.success
  };
};

/**
 * @returns {Object} size
 */
export const fontSizeShape = () => {
  const { baseSize, scaleRatio } = defaultFontSize;

  return {
    xs: `${baseSize - scaleRatio * 2}rem`,
    sm: `${baseSize - scaleRatio}rem`,
    md: `${baseSize}rem`,
    lg: `${baseSize + scaleRatio}rem`,
    xl: `${baseSize + scaleRatio * 2}rem`
  };
};
