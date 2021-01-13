import React from 'react'
import Nav from "./Nav";
import Home from "./Home";
import Quote from "./Quote";
import Market from "./Market";
import Remote from "./Remote";

import ReactDOM from 'react-dom'

import './App.css';

function App() {
  return (
    <div className="app">
        
        <Nav/>
        <Home/>
        <Quote/>
        <Market/>
        <Remote/>
        
        

    </div>
  );
}

export default App;
