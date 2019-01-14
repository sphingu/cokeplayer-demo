import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './components/Main'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}

export default App
