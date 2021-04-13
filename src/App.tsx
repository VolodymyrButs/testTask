import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

import { AppContext } from 'contextProvider'
import Users from 'Users/Users'
import User from 'User/User'
import { BadRequestModal } from 'components/BadRequest'
import { Wrapper } from 'components/MainWrapper'

const App = () => {
  const { isDarkTheme } = useContext(AppContext)

  const theme = createMuiTheme({
    palette: {
      type: isDarkTheme ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router basename="/testTask">
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
            <Route path="*">
              <BadRequestModal />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
