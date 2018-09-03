import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from './types/FlatButton'
import InvertedButton from './types/InvertedButton'

const Button = props => props.inverted
  ? <InvertedButton {...props}>{props.label}</InvertedButton>
  : <FlatButton {...props}>{props.label}</FlatButton>

Button.propTypes = {
  /** Button label */
  label: PropTypes.string.isRequired,
  /**
   * Button color types
   */
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]),
  /**
   * Button corner types
   */
  corners: PropTypes.oneOf([
    'rounded',
    'pill',
    'none'
  ]),
  /**
   * Button sizes
   */
  size: PropTypes.oneOf([
    'small',
    'large',
    'medium'
  ]),
  /**
   * Invert button colors
   */
  inverted: PropTypes.bool,
  /**
   * Make button fluid
   */
  fluid: PropTypes.bool
}

Button.defaultProps = {
  label: 'No label',
  type: 'primary',
  corners: 'none',
  size: 'medium',
  inverted: false,
  fluid: false
}

export default Button
