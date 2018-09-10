import styled, { css } from 'styled-components'
import BaseButton from 'Button/types/BaseButton'
import defaultTheme from 'config/theme'

// Makers
import toPx from 'utils/shared/toPx'
import makeColor from 'utils/colors/makeColor'
import makeButtonFontColor from 'Button/utils/makeButtonFontColor'

const OutlineButton = styled(BaseButton)`
   ${props => css`
        /* Base styles */
        background: transparent;
        border: ${toPx(props.theme.buttonBorderSize || 1)} solid;
        border-color: ${makeColor(props)};
        color: ${makeColor(props)};

        &:hover {
            background-color: ${makeColor(props)};
            color: ${makeButtonFontColor(props)};
        }
        &:active {
            background-color: ${makeColor(props, props.theme.buttonActiveAmount || defaultTheme.button.colors.activeAmount)};
            border-color: ${makeColor(props, props.theme.buttonActiveAmount || defaultTheme.button.colors.activeAmount)};
        }
    `}
`

export default OutlineButton
