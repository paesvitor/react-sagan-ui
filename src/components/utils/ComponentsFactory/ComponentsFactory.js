import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
// Components
import Button from "../../atoms/Button";
import Alert from "../../atoms/Alert";

export class ComponentsLoader extends Component {
  renderComponent(component) {
    switch (component.type) {
      case "Button":
        return <Button {...component.props}>{component.props.text}</Button>;
      case "Alert":
        return <Alert {...component.props}>{component.props.text}</Alert>;
    }
  }

  mapComponents(components) {
    return components.map(component => this.renderComponent(components));
  }

  render() {
    const { components } = this.props;

    return this.mapComponents(components);
  }
}

ComponentsLoader.propTypes = {
  /**
   * Component childrens
   */
  components: PropTypes.array
};

export default ComponentsLoader;
