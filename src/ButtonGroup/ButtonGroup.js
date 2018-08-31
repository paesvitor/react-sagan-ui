import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import toPx from '../config/utils/toPx'

const SaganButtonGroup = styled.div`
    ${context => css`
        display: flex;
        > * {
            flex: 1;
            margin: 0px ${toPx(context.buttonSpacing || 5)};
            &:first-child { margin-left: 0}
            &:last-child { margin-right: 0}
        }        
    `}
`

const ButtonGroup = (props) => <SaganButtonGroup {...props}>{props.children}</SaganButtonGroup>

ButtonGroup.propTypes = {
    children: PropTypes.node,
    buttonSpacing: PropTypes.number
}

export default ButtonGroup
