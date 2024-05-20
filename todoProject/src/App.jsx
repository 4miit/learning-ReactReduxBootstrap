import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/appName";
import AddTodo from "./components/AddTodo";
import Todoitem from "./components/todoitem";
import Todoitem2 from "./components/todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todoContainer">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="container">
        <Todoitem></Todoitem>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
