import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import makeColor from 'utils/colors/makeColor'
import toRem from 'utils/shared/toRem'
import makePadding from '../Button/utils/makeButtonPadding'

const SaganAlert = styled.div`
    ${props => css`
        padding: ${makePadding(4)};
        border-radius: 0.2rem;
        border-left: 6px solid ${makeColor(props, 0.3)};
        color: ${props.type === 'warning' ? '#000' : '#fff'};
        font-size: ${toRem(props.theme.alertFontSize || defaultTheme.font.sizes.md)};
        align-items: center;
        margin: 1rem 0rem;
        background-color: ${makeColor(props)};
        display: ${props.show ? 'flex' : 'none'};
        line-height: 1.5;

        .alert-label {
          flex: 1;
        }

        .alert-dismiss {
            display: flex;
            cursor: pointer;
            /* border: 1px solid #fff; */
            line-height: 0;
            font-weight: bold;
            border-radius: 50%;
            padding: 3px;
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
    dismissAction: PropTypes.func,
    /** Defines if alert must de shown or not */
    show: PropTypes.bool
}

Alert.defaultProps = {
    text: 'No Text',
    dismissAction: () => window.alert('Alert Dismiss'),
    type: 'success',
    showDismiss: true,
    show: true
}

export default Alert
