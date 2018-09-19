import React from 'react'
import styled, {
    ThemeProvider as StyledThemeProvider
} from 'styled-components'

export const Base = styled.div`
    
`
const ThemeProvider = props => {
    return (
      <StyledThemeProvider theme={props.theme}>
        {props.children}
      </StyledThemeProvider>
    )
}

export default ThemeProvider
