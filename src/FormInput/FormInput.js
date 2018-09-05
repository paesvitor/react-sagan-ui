import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import alertColors from 'Alert/utils/alertColors'
import toPx from 'utils/shared/toPx'
import defaultTheme from 'config/theme'
// import IconClose from '@material-ui/icons/Close'

const SaganFormGroup = styled.div`
    ${context => css`

    `}
`
const SaganLabel = styled.label`
    ${context => css`
       display: block;
       font-size: 12px;
       color: ${defaultTheme.colors.gray.is500}
    `}
`
const SaganFormInput = styled.input`
    ${context => css`
       padding: 15px;
       border: 1px solid ${defaultTheme.colors.gray.is500};
       border-radius: 3px;
       font-size: 16px;
       color: ${defaultTheme.colors.gray.is500};

       &:focus {
           outline: none;
       }
    `}
`
const SaganInputHelper = styled.div`
    ${context => css`
       font-size: 12px;
       color: ${defaultTheme.colors.gray.is500}
    `}
`

const FormInput = props => <SaganFormGroup>
       <SaganLabel>Krek</SaganLabel>
       <SaganFormInput {...props}/>
       <SaganInputHelper>Helper</SaganInputHelper>
</SaganFormGroup>

FormInput.propTypes = {

}

export default FormInput
