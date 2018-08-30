import styled, { css } from 'styled-components'
import defaultTheme from '../../config/theme'
import buttonPadding from '../../config/utils/buttonPadding'
import fontSize from '../../config/utils/fontSize'

const FlatButton = styled.button`
    border-radius: ${context => context.theme.globalBorderRadius || defaultTheme.global.borderRadius};
    display: inline-block;
    cursor: pointer;
    transition: 0.3s all;
    padding: ${buttonPadding(10)};
    font-size: ${fontSize(-2)};
    border: none;
    background-color: ${defaultTheme.colors.black};
    color: ${context => context.theme.buttonFontColor || defaultTheme.button.colors.default};

    &:focus {
        outline: none;
    }

    &:active {
        background: ${defaultTheme.button.colors.active.background};
    }

    &:hover {
        opacity: 0.8;
    }

    /* 
    Color Types 
    */
    ${(context) => context.type &&
    ((context.type === 'primary') && css`
        background-color: ${context.theme.primaryColor || defaultTheme.colors.primary};
    `) ||

    ((context.type === 'secondary') && css`
        background-color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
    `) ||

    ((context.type === 'success') && css`
        background-color: ${defaultTheme.colors.green.is400}; 
        color: ${defaultTheme.colors.green.is800};
    `) ||

    ((context.type === 'info') && css`
        background-color: ${defaultTheme.colors.blue.is400}; 
        color: ${defaultTheme.colors.blue.is800};
    `) ||

    ((context.type === 'warning') && css`
        background-color: ${defaultTheme.colors.yellow.is400}; 
        color: ${defaultTheme.colors.yellow.is800};
    `) ||

    ((context.type === 'danger') && css`
        background-color: ${defaultTheme.colors.red.is400};
        color: ${defaultTheme.colors.red.is800};
    `)}}};

    /* 
    Corner Types 
    */
    ${(context) => context.corners &&
    ((context.corners === 'rounded') && css`
        border-radius: ${context.theme.borderRadius || defaultTheme.border.borderRadius};
    `) ||

    ((context.corners === 'pill') && css`
        border-radius: 20px;
    `)}}};

    /* 
    Sizes Types 
    */
   ${(context) => context.size &&
    ((context.size === 'small') && css`
        font-size: ${fontSize(-4)};
        padding: ${buttonPadding(5)};
    `) ||

    ((context.size === 'large') && css`
        font-size: ${fontSize(4)};
        padding: ${buttonPadding(15)};
    `)}}};
`
export default FlatButton
