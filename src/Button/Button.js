import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from './types/FlatButton'
import InvertedButton from './types/InvertedButton'

const Button = props => props.inverted
    ? <InvertedButton {...props}>{props.label}</InvertedButton> : <FlatButton {...props}>{props.label}</FlatButton>

Button.propTypes = {
    // Button Label
    label: PropTypes.string.isRequired,
    // Button color type
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
    // Button corners
    corners: PropTypes.oneOf([
        'rounded',
        'pill'
    ]),
    // Button size
    size: PropTypes.oneOf([
        'small',
        'large'
    ]),
    // Button is inverted?
    inverted: PropTypes.bool,
    // Button is a block?
    block: PropTypes.bool
}

export default Button
