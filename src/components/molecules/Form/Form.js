import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  ${context => css`
    /* padding: 5rem; */
  `};
`;

export class Form extends Component {
  render() {
    return <StyledForm {...this.props}>{this.props.children}</StyledForm>;
  }
}

Form.propTypes = {
  /**
   * Component childrens
   */
  children: PropTypes.node
};

export default Form;
