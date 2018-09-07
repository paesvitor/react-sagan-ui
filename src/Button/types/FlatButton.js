import styled, { css } from 'styled-components'
import BaseButton from './BaseButton'
import defaultTheme from 'config/theme'

// Makers
import makeColor from 'utils/colors/makeColor'

const FlatButton = styled(BaseButton)`
    ${props => css`
       background-color: ${makeColor(props)};

        &:hover {
            ${props.theme.buttonFlatHoverType === 'inverted' && `
                background-color: transparent;
                border-color: ${makeColor(props)};
                color: ${makeColor(props)};
            ` || `
                background-color: ${makeColor(props, props.theme.buttonHoverAmount || defaultTheme.button.colors.hoverAmount)};
            `}
        }

        &:active {
            ${props.theme.buttonFlatHoverType === 'inverted' && `
                background-color: ${makeColor(props)};
                border-color: ${makeColor(props)};
                color: #fff;
            ` || `
                background-color: ${makeColor(props, props.theme.buttonActiveAmount || defaultTheme.button.colors.activeAmount)};
            `}
        }
    `}

`

export default FlatButton
