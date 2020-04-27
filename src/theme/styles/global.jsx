  import { createGlobalStyle } from "styled-components"
import vars from "./vars"

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

html {
    font-size: 16px;
    color: ${vars.BLACK};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${vars.FONT_FAMILY};
}

`