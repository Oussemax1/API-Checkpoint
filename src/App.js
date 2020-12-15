import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import UserList  from "./UserList";
import Menu from "./Menu";
import React from 'react'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path="/UserList" component={UserList} />
      </div>
      </BrowserRouter>
  );
}

export default App;