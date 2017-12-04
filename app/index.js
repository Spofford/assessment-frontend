import "./styles/reset.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./redux/store"

import { default as Home } from "./components/Home"
import { default as Assessment } from "./components/Assessment"
import { default as Results } from "./components/Results"

const App = props => (<div>{props.children}</div>)

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/assessment' component={Assessment}/>
        <Route path='/results' component={Results}/>
      </Switch>
     </BrowserRouter>
     </Provider>,
     document.getElementById('root')
);
