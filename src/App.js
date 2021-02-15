import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SignUp from "../src/SignUp";
import HomeNav from "./components/Home/HomeNav";
import AboutUs from "./components/Home/AboutUs";

function App() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route path="/" exact component={HomeNav}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/about" component={AboutUs}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;