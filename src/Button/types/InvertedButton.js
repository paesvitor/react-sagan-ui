import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import defaultTheme from 'config/theme'

// Makers
import toPx from 'utils/shared/toPx'
import makeColor from 'utils/colors/makeColor'

const InvertedButton = styled(BaseButton)`
   ${props => css`
        /* Base styles */
        background: transparent;
        border: ${toPx(props.theme.buttonBorderSize || defaultTheme.button.border.size)} solid;
        border-color: ${makeColor(props)};
        color: ${makeColor(props)};

        &:hover {
            background-color: ${makeColor(props)};
            color: #fff;
        }
        &:active {
            background-color: ${makeColor(props, props.theme.buttonActiveAmount || defaultTheme.button.colors.activeAmount)};
            border-color: ${makeColor(props, props.theme.buttonActiveAmount || defaultTheme.button.colors.activeAmount)};
        }
    `}
`

export default InvertedButton
