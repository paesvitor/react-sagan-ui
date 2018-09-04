import defaultTheme from 'config/theme'
import { css } from 'styled-components'
import { colorTypes, colorWeights } from 'utils/constants'

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
        color: #fff;
    `) ||

        ((context.type === colorTypes.INFO) && css`
        background-color: ${defaultTheme.colors.blue[backgroundWeight]}; 
        color: #fff;
    `) ||

        ((context.type === colorTypes.WARNING) && css`
        background-color: ${defaultTheme.colors.yellow[backgroundWeight]}; 
        color: #000;
    `) ||

        ((context.type === colorTypes.DANGER) && css`
        background-color: ${defaultTheme.colors.red[backgroundWeight]};
        color: #fff;
    `)
}

export default flatColors
