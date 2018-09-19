import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledFormGroup = styled.div`
  ${context => css`
    margin-bottom: 1rem;
  `};
`;

const FormGroup = props => (
  <StyledFormGroup {...props}>{props.children}</StyledFormGroup>
);

FormGroup.propTypes = {
  /**
   * Component childrens
   */
  children: PropTypes.node
};

export default FormGroup;
