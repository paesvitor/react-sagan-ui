import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  ${props => css`
    margin-bottom: 0.5rem;
    display: block;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    .label-helper {
      color: #888;
      font-size: 0.7rem;
      font-weight: 300;
      padding-left: 0.5rem;
    }
  `};
`;

const Label = props => {
  const { helper } = props;

  return (
    <StyledLabel {...props}>
      {props.children}

      {helper && <div className="label-helper">({helper})</div>}
    </StyledLabel>
  );
};

Label.propTypes = {
  /**
   * Component childrens
   */
  children: PropTypes.node,

  /**
   * Label helper text
   */
  helper: PropTypes.string
};

export default Label;
