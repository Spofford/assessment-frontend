import "./styles/reset.css"
import "./styles/fonts.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./redux/store"

import { default as Home } from "./components/Home"
import { default as Assessment } from "./components/Assessment"
import { default as Results } from "./components/Results"
import { default as App } from "./components/App"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <Switch>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/assessment' component={Assessment}/>
          <Route path='/results' component={Results}/>
        </App>
      </Switch>
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
