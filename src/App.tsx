import React, {useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import ToDoList from "./Containers/ToDoList/ToDoList";
import InitialPage from "./Containers/InitialPage/InitialPage";
import {useDispatch, useSelector} from "react-redux";
import {usersActions, UsersState} from "./store/users";

const App = (props: any) => {
  const dispatch = useDispatch();
  const users = useSelector((state: UsersState) => state.users);
  
  const addNewUserHandler = (user: object) => {
    dispatch(usersActions.addNew(user))
  }
  
  useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
    }
    ,[users]);
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard">
          <ToDoList />
        </Route>
        <Route exact path="/">
          <InitialPage{...props} users={users} addNewUser={addNewUserHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
