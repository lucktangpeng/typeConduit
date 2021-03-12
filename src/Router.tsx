import React from 'react'
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home'
import Login from './views/login/Login';
const Router = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/regist">
            <Login status={true} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  )
}

export default Router
