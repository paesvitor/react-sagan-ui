import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import alertColors from 'Alert/utils/alertColors'
import toPx from 'utils/shared/toPx'
import defaultTheme from 'config/theme'
// import IconClose from '@material-ui/icons/Close'

// Defines colors config for alertColors()
const colorsConfig = {
    backgroundWeight: 'is300',
    borderWeight: 'is700'
}

const SaganAlert = styled.div`
    ${context => css`
        padding: 15px;
        border-radius: 2px;
        border-left: 5px solid;
        ${alertColors(context, colorsConfig)}
        display: flex;
        font-size: ${toPx(context.theme.alertFontSize || defaultTheme.alert.font.size)};
        align-items: center;

        .alert-label {
          flex: 1;
        }

        .alert-dismiss {
            display: flex;
            cursor: pointer;
            border: 1px solid #fff;
            border-radius: 50%;
            padding: 3px;
            svg { font-size: 18px }
        }
    `}
`

const Alert = props => <SaganAlert {...props}>
    <div className='alert-label'>{props.text}</div>
    {props.showDismiss ? <div onClick={() => props.dismissAction()} className='alert-dismiss'>X</div> : null}
</SaganAlert>

Alert.propTypes = {
    /** Alert Label */
    text: PropTypes.string.isRequired,
    /** Alert color type */
    type: PropTypes.oneOf([
        'success',
        'danger',
        'warning',
        'info'
    ]),
    /** Show dismiss button */
    showDismiss: PropTypes.bool,
    /** Dismiss button action */
    dismissAction: PropTypes.func
}

Alert.defaultProps = {
    text: 'No Text',
    dismissAction: () => window.alert('Alert Dismiss'),
    type: 'success',
    showDismiss: true
}

export default Alert
