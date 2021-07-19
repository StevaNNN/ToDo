import React from 'react';
import { Switch, Route } from "react-router-dom";
import ToDoList from "./Containers/ToDoList/ToDoList";
import InitialPage from "./Containers/InitialPage/InitialPage";

const App = (props: any) => {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard">
          <ToDoList/>
        </Route>
        <Route exact path="/">
          <InitialPage{...props} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
