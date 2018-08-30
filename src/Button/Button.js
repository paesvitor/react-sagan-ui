import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from './types/FlatButton'
import InvertedButton from './types/InvertedButton'

const Button = props => props.inverted
    ? <InvertedButton {...props}>{props.label}</InvertedButton> : <FlatButton {...props}>{props.label}</FlatButton>

Button.propTypes = {
    label: PropTypes.string.isRequired,
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
    corners: PropTypes.oneOf([
        'rounded',
        'pill'
    ]),
    size: PropTypes.oneOf([
        'small',
        'large'
    ]),
    inverted: PropTypes.bool
}

export default Button
