import { injectGlobal } from 'styled-components'
import createSpacing from 'utils/helpers/createSpacing'

export default injectGlobal`
    .text-center { text-align: center }
    .text-left {text-align: left}
    .text-right {text-align: right}

    ${createSpacing('padding', 'p')}
    ${createSpacing('margin', 'm')}

    .shadow-xs {box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);}
`
