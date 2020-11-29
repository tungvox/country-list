import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Product from './pages/Product/Product'
import Main from './components/Main'
import { RoutesProps } from './types/index'

const Routes = ({ countries }: RoutesProps) => (
  <Switch>
    <Route
      exact
      path="/"
      render={(props) => <Main {...props} countries={countries} />}
    />
    <Route
      exact
      path="/countries/:name"
      render={(props) => <Product {...props} countries={countries} />}
    />
  </Switch>
)

export default Routes
