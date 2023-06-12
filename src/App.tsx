import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroEditor from './components/Heroes/HeroEditor';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HeroesNavBar from './components/Heroes/HeroesNavBar';
import HeroesDashboard from './components/Heroes/HeroesDashboard';
import Heroes from './components/Heroes/Heroes';
import Papers from './components/Papers/Papers';
import PaperPresentation from './components/Papers/PaperPresentation';


function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Tour of Heroes</h1>
      
      <Routes>
        <Route path='/' element={<HeroesNavBar/>} />
        <Route path='/dashboard' element={<HeroesDashboard/>}/>
        <Route path='/heroes' element={<Heroes />} />
        <Route path='/hero/:id' element={<HeroEditor/>} />
        <Route path='/papers' element={<Papers/>} />
        <Route path='/papers/:paperId' element={<PaperPresentation/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
