import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '../node_modules/@blueprintjs/core/dist/blueprint.css'
import '../node_modules/flexboxgrid/css/flexboxgrid.min.css'
import './index.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Store from './reducers'

let store = createStore(
  Store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
