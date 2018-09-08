import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from './types/FlatButton'
import InvertedButton from './types/InvertedButton'

const Button = props => props.inverted
  ? <InvertedButton {...props}>
    {props.leftIcon ? <div className='button-left-icon'>{props.leftIcon}</div> : null}
    <div className='button-label'>{props.label}</div>
    {props.rightIcon ? <div className='button-right-icon'>{props.rightIcon}</div> : null}
  </InvertedButton>
  : <FlatButton {...props}>
    {props.leftIcon ? <div className='button-left-icon'>{props.leftIcon}</div> : null}
    <div className='button-label'>{props.label}</div>
    {props.rightIcon ? <div className='button-right-icon'>{props.rightIcon}</div> : null}
  </FlatButton>

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
    'info'
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
    'xs',
    'sm',
    'lg',
    'md',
    'lg',
    'xl'
  ]),
  /**
   * Invert button colors
   */
  inverted: PropTypes.bool,
  /**
   * Make button fluid
   */
  fluid: PropTypes.bool,
  /**
   * Left icon
   */
  leftIcon: PropTypes.element,
  /**
   * Right icon
   */
  rightIcon: PropTypes.element
}

Button.defaultProps = {
  label: 'No label',
  type: 'primary',
  corners: 'none',
  size: 'md',
  inverted: false,
  fluid: false
}

export default Button
