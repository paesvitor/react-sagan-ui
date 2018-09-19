import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButtonGroup = styled.div`
  ${context => css`
    display: flex;
    > * {
      flex: 1;
      margin: 0.5rem;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  `};
`;

const ButtonGroup = props => (
  <StyledButtonGroup {...props}>{props.children}</StyledButtonGroup>
);

ButtonGroup.propTypes = {
  /**
   * Component childrens
   */
  children: PropTypes.node,
  /**
   * Defines children buttons spacing
   */
  buttonSpacing: PropTypes.number
};

export default ButtonGroup;
