import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ScreenMainHome from '../screens/main/home'

export default props => (
  <Router>
    <Route path='/' component={ScreenMainHome}>
    </Route>
    <Redirect from='*' to='/' />
  </Router>
);
