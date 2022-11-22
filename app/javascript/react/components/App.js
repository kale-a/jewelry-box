import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserIndex from './UserIndex'
import UserShow from './UserShow'
import UserShowContainer from './UserShowContainer'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserIndex} />
        <Route exact path="/users" component={UserIndex} />
        {/* <Route exact path="/users/:id" component={UserShowContainer} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App