import defaultTheme from 'config/theme'
import { css } from 'styled-components'
import { colorTypes } from 'utils/constants'
import Color from 'color'

const flatButtonHovers = (context) => {
  // Defines the base amount of darken
  const darkenAmountHover = 0.15
  const primaryColor = Color(context.theme.primaryColor || defaultTheme.colors.primary)
  const secondaryColor = Color(context.theme.secondaryColor || defaultTheme.colors.secondary)
  const darkenAmountActive = (darkenAmountHover / 2) + darkenAmountHover

  return context.type &&
        ((context.type === colorTypes.PRIMARY) && css`
            &:hover { background-color: ${primaryColor.darken(darkenAmountHover).hex()};}
            &:active { background-color: ${primaryColor.darken(darkenAmountActive).hex()};}
    `) ||

        ((context.type === colorTypes.SECONDARY) && css`
            &:hover { background-color: ${secondaryColor.darken(darkenAmountHover).hex()};}
            &:active { background-color: ${secondaryColor.darken(darkenAmountActive).hex()};}
    `) ||

        ((context.type === colorTypes.SUCCESS) && css`
            &:hover { background-color: ${Color(defaultTheme.colors.green.is500).darken(darkenAmountHover).hex()};}
            &:active { background-color: ${Color(defaultTheme.colors.green.is500).darken(darkenAmountActive).hex()};}
    `) ||

        ((context.type === colorTypes.INFO) && css`
            &:hover { background-color: ${Color(defaultTheme.colors.blue.is500).darken(darkenAmountHover).hex()};}
            &:active { background-color: ${Color(defaultTheme.colors.blue.is500).darken(darkenAmountActive).hex()};}
    `) ||

        ((context.type === colorTypes.WARNING) && css`
            &:hover { background-color: ${Color(defaultTheme.colors.yellow.is500).darken(darkenAmountHover).hex()};}
            &:active { background-color: ${Color(defaultTheme.colors.yellow.is500).darken(darkenAmountActive).hex()};}
    `) ||

        ((context.type === colorTypes.DANGER) && css`
            &:hover { background-color: ${Color(defaultTheme.colors.red.is500).darken(darkenAmountHover).hex()};}
            &:active { background-color: ${Color(defaultTheme.colors.red.is500).darken(darkenAmountActive).hex()};}
    `)
}

export default flatButtonHovers
