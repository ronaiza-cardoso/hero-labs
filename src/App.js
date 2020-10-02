import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HeroList from 'pages/HeroList'
import HeroDetails from 'pages/HeroDetails'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={HeroList} />
          <Route exact path="/hero/:id" component={HeroDetails} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
