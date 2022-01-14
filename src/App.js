import React from "react";
import {Routes , Route } from 'react-router-dom';
import './App.css';

import Header from "./components/header/header.component";
import Homepage from "./page/home/home.component";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
    </Routes>
    </>
  );
}

export default App;
