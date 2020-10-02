import React from 'react'
import { ThemeProvider } from 'styled-components'

import HeroList from 'pages/HeroList'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeroList />
    </ThemeProvider>
  )
}

export default App
