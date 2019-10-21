import { createGlobalStyle } from "styled-components";
import createSpacing from "./createSpacing";

export default createGlobalStyle`
    .text-center { text-align: center }
    .text-left {text-align: left}
    .text-right {text-align: right}
    .block {display: block}

    ${createSpacing("padding", "p")}
    ${createSpacing("margin", "m")}

    .shadow-xs {box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);}
`;
