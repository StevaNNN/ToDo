import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Containers/Dashboard/Dashboard";
import InitialPage from "./Containers/InitialPage/InitialPage";

const App = (props: any) => {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <InitialPage{...props} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
