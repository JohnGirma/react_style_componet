import React from "react"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
// import {Container} from "./components/styles/Container.styled"
import GlobalStyles from "./components/styles/Global"

const theme={
  color:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333'

  }
}

function App() {
  return (
  <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
  
   </>
   </ThemeProvider>
  )
}

export default App
