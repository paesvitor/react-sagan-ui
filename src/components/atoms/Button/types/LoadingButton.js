import React, { Component } from "react";
import styled, { css } from "styled-components";
import Loader from "components/atoms/Loader";

import ButtonShape from "../Button.shape";

const buttonShape = new ButtonShape();

const StyledLoading = styled.div`
  ${props => css`
    background-color: ${buttonShape.getColor(props)};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &:hover {
      cursor: not-allowed;
    }
  `};
`;

const Loading = props => {
  return (
    <StyledLoading color={props.color}>
      <Loader />
    </StyledLoading>
  );
};

export default Loading;
