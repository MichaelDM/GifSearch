import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Favorites from './containers/Favorites/Favorites';
import RequireAuth from './containers/HOC/RequireAuth';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signup" component={Signup} />
    <Route path="login" component={Login} />
    <Route path="favorites" component={RequireAuth(Favorites)} />
  </Route>
)

export default routes;
