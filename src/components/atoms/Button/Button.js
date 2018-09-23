import React from "react";
import PropTypes from "prop-types";
import DefaultButton from "./types/DefaultButton";
import OutlineButton from "./types/OutlineButton";
import ButtonLoading from "./types/LoadingButton";
import ButtonShape from "./Button.shape";
import { withTheme } from "styled-components";

const BUTTON_TYPES = {
  default: DefaultButton,
  outline: OutlineButton
};

const Button = props => {
  const { children, type, loading, color, theme } = props;
  const Handler = BUTTON_TYPES[type];
  const shape = new ButtonShape(theme);

  return (
    <Handler {...props} disabled={loading} shape={shape}>
      {children}
      {loading && <ButtonLoading color={color} shape={shape} />}
    </Handler>
  );
};

Button.propTypes = {
  /**
   * Button color options
   */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "danger",
    "warning"
  ]),
  /**
   * Button size options
   */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  /**
   * Button type options
   */
  type: PropTypes.oneOf(["default", "flat", "outline"]),
  /**
   * Border types
   */
  border: PropTypes.oneOf(["pill", "rounded"])
};

Button.defaultProps = {
  color: "primary",
  size: "md",
  type: "default"
};

export default withTheme(Button);
