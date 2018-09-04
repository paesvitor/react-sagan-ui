import defaultTheme from 'config/theme'
import { css } from 'styled-components'
import { colorTypes } from 'utils/constants'

const alertColors = (context, config) => {
  return context.type &&
        ((context.type === colorTypes.SUCCESS) && css`
        background-color: ${defaultTheme.colors.green[config.backgroundWeight]}; 
        color: #fff;
        border-color: ${defaultTheme.colors.green[config.borderWeight]};
    `) ||

        ((context.type === colorTypes.INFO) && css`
        background-color: ${defaultTheme.colors.blue[config.backgroundWeight]}; 
        color: #fff;
        border-color: ${defaultTheme.colors.blue[config.borderWeight]};
    `) ||

        ((context.type === colorTypes.WARNING) && css`
        background-color: ${defaultTheme.colors.yellow[config.backgroundWeight]}; 
        color: #000;
        border-color: ${defaultTheme.colors.yellow[config.borderWeight]};
        .alert-dismiss { border-color: #000 !important}
    `) ||

        ((context.type === colorTypes.DANGER) && css`
        background-color: ${defaultTheme.colors.red[config.backgroundWeight]};
        color: #fff;
        border-color: ${defaultTheme.colors.red[config.borderWeight]};
    `)
}

export default alertColors
