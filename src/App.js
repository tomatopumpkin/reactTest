import React from "react";
import {Routes , Route } from 'react-router-dom';
import './App.css';

import Header from "./components/header/header.component";
import Homepage from "./page/home/home.component";
import Footer from "./components/footer/footer.component";
import ResumePage from "./page/resume/resume.component";
import ContactPage from "./page/contact/contact.component";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/resume" element={<ResumePage/>}/>
      <Route exact path="/contact" element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
