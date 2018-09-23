import React, { Component } from "react";
import styled, { css } from "styled-components";
import Loader from "components/atoms/Loader";

const StyledLoading = styled.div`
  ${({ shape, color }) => css`
    background-color: ${shape.getColor(color)};
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
    <StyledLoading {...props}>
      <Loader />
    </StyledLoading>
  );
};

export default Loading;
