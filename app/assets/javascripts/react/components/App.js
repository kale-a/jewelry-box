import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BoxIndex from './BoxIndex'
import EarringIndex from './EarringIndex'
import PendantIndex from './PendantIndex'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/jewelry" component={BoxIndex} />
        <Route exact path="/jewelry/earrings" component={EarringIndex} />
        <Route exact path="/jewelry/pendants" component={PendantIndex} />
      </Switch>
    </BrowserRouter>
  )
}