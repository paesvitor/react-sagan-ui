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
        border-left: 6px solid;
        ${alertColors(context, colorsConfig)}
        display: flex;
        font-size: ${toPx(context.theme.alertFontSize || defaultTheme.alert.font.size)};
        align-items: center;
        margin: 15px 0px;

        .alert-label {
          flex: 1;
        }

        .alert-dismiss {
            display: flex;
            cursor: pointer;
            /* border: 1px solid #fff; */
            font-size: 14px;
            line-height: 0;
            font-weight: bold;
            border-radius: 50%;
            padding: 3px;
            svg { font-size: 18px }
        }
    `}
`

const Alert = props => <SaganAlert {...props}>
    <div className='alert-label'>{props.text}</div>
    {props.showDismiss ? <div onClick={() => props.dismissAction()} className='alert-dismiss'>x</div> : null}
</SaganAlert>

Alert.propTypes = {
    /** Alert text */
    text: PropTypes.string.isRequired,
    /** Alert color type */
    type: PropTypes.oneOf([
        'success',
        'danger',
        'warning',
        'info'
    ]),
    /** Show or hide dismiss button */
    showDismiss: PropTypes.bool,
    /** What action dismiss button will take */
    dismissAction: PropTypes.func
}

Alert.defaultProps = {
    text: 'No Text',
    dismissAction: () => window.alert('Alert Dismiss'),
    type: 'success',
    showDismiss: true
}

export default Alert
