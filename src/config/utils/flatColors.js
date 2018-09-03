import defaultTheme from '../theme'
import { css } from 'styled-components'
import { colorTypes, colorWeights } from './constants'

const flatColors = (context, colorWeight = colorWeights.IS_900, backgroundWeight = colorWeights.IS_400) => {
  return context.type &&
        ((context.type === colorTypes.PRIMARY) && css`
        background-color: ${context.theme.primaryColor || defaultTheme.colors.primary};
    `) ||

        ((context.type === colorTypes.SECONDARY) && css`
        background-color: ${context.theme.secondaryColor || defaultTheme.colors.secondary};
    `) ||

        ((context.type === colorTypes.SUCCESS) && css`
        background-color: ${defaultTheme.colors.green[backgroundWeight]}; 
        color: ${defaultTheme.colors.green[colorWeight]};
    `) ||

        ((context.type === colorTypes.INFO) && css`
        background-color: ${defaultTheme.colors.blue[backgroundWeight]}; 
        color: ${defaultTheme.colors.blue[colorWeight]};
    `) ||

        ((context.type === colorTypes.WARNING) && css`
        background-color: ${defaultTheme.colors.yellow[backgroundWeight]}; 
        color: ${defaultTheme.colors.yellow[colorWeight]};
    `) ||

        ((context.type === colorTypes.DANGER) && css`
        background-color: ${defaultTheme.colors.red[backgroundWeight]};
        color: ${defaultTheme.colors.red[colorWeight]};
    `)
}

export default flatColors
