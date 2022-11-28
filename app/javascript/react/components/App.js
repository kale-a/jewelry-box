import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserIndex from './UserIndex'
import UserShowContainer from './UserShowContainer'
import AboutJewelryBox from './AboutJewelryBox'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserIndex} />
        <Route exact path="/users" component={UserIndex} />
        <Route exact path="/about" component={AboutJewelryBox} />
        <Route exact path="/users/:id" component={UserShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App