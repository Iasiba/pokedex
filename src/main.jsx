import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import Home from './Home'
import './index.css'
import store from './store';
import Pokedex from './pokedex'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <Home />
    </HashRouter>
  </Provider>
)
