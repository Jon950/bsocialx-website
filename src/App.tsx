// React
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// CSS
import './styleSheet/App.css';

// Pages
import Home from "./pages/Home"


function App() {
  console.log("BsocialXAppVersionLink",process.env.BsocialXAppVersionLink);
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
