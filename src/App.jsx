import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";


function App() {
  return (
    <div className="App">
     <Header />
     <UserInfo/>
    </div>
  );
}

export default App;
