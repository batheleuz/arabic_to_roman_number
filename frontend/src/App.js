import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

