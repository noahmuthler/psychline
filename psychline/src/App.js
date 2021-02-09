import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AcctButton from "./AcctButton";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "../src/SignUp";
import HomeNav from "./components/Home/HomeNav";

function App() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route path="/" exact component={HomeNav}/>
              <Route path="/signup" component={SignUp}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;