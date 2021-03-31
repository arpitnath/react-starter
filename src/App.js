import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TestRoute from './components/TestRoute'
import TestComponent from './components/TestComponent'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={TestComponent} />
        <Route path='/test' component={TestRoute} exact />
      </Switch>
    </Router>
  )
}
