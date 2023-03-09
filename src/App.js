import logo from './logo.svg';
import './App.css';
import { User } from './components/user';
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Create from './components/createPosts';
import Edite from './components/editPosts';
import View from './components/view';

function App() {


  return (
    <>
     <Router>
    <div className="App">
     <Routes>  <Route exact path="/" element={<User />} /></Routes>
     <Routes>  <Route exact path="/CreatePosts" element={<Create/>} /></Routes>
     <Routes>  <Route exact path="/EditPosts/:EditArr" element={<Edite/>} /></Routes>
     <Routes>  <Route exact path="/ViewPosts/:id" element={<View/>} /></Routes>
     </div></Router>
   
    </>
  );
}

export default App;
//979038724559-u96r45qjsqfe3ia0c65pcpu52mvo0l66.apps.googleusercontent.com --client ID