import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import flatColors from '../config/utils/flatColors'
import { colorWeights } from '../config/utils/constants'

const SaganAlert = styled.div`
    ${context => css`
        padding: 15px;
        border-radius: 2px;
        ${flatColors(context,
    (context.theme.alertColorWeight || colorWeights.IS_800),
    (context.theme.alertBackgroundWeight || colorWeights.IS_100))}
    `}
`

const Alert = props => <SaganAlert {...props}>{props.label}</SaganAlert>

Alert.propTypes = {
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
  ])
}

Alert.defaultProps = {
  label: 'No label'
}

export default Alert
