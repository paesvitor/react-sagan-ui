import React from "react";
import styled, { css, withTheme } from "styled-components";
import PropTypes from "prop-types";
import AlertShape from "./Alert.shape";
import Color from "color";

const StyledAlert = styled.div`
  ${({ color, theme, shape }) => css`
    background-color: ${shape.getColor(color)};
    color: ${shape.getFontColor(color)};
    border-left: 5px solid;
    border-color: ${Color(shape.getColor(color))
      .darken(0.3)
      .hex()};
    font-size: ${theme.alertFontSize || 1}rem;
    font-weight: 300;
    display: block;
    padding: 1rem;
    margin: 0.5rem 0;
    a {
      color: inherit;
    }
  `};
`;

const Alert = props => {
  const { theme } = props;
  const shape = new AlertShape(theme);
  return (
    <StyledAlert {...props} shape={shape}>
      {props.children}
    </StyledAlert>
  );
};

Alert.propTypes = {
  /**
   * Component childrens
   */
  children: PropTypes.node,
  /**
   * Alert color type
   */
  color: PropTypes.oneOf(["success", "danger", "warning", "info"])
};

Alert.defaultProps = {
  color: "success"
};

export default withTheme(Alert);
