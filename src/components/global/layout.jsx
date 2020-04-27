import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyles } from "../../theme/styles/global"

const theme = {
    breakpoints: {
      xs: '0px',
      sm: '370px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  }

const Page = styled.div`
  background-color:white;
  width:100%;
  height:100%;
  min-height:100vh;
`

const Layout = ({ children }) => {
  return(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Page>{ children }</Page>
    </ThemeProvider>
  )
}

export default Layout 