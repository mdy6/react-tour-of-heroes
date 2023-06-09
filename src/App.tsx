import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroEditor from './components/Heroes/HeroEditor';
import { Hero, defaultHero } from './models/Hero';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HeroesNavBar from './components/Heroes/HeroesNavBar';
import HeroesDashboard from './components/Heroes/HeroesDashboard';
import Heroes from './components/Heroes/Heroes';


function App() {

  const [selectedHero, setSelectdHero] = useState<Hero>(defaultHero)

  const handleOnSelectHero = (hero: Hero)=>{
    setSelectdHero(hero);
  }

  return (
    <div>
      <BrowserRouter>
      <h1>Tour of Heroes</h1>
      
      <Routes>
        <Route path='/' element={<HeroesNavBar/>} />
        <Route path='/dashboard' element={<HeroesDashboard/>}/>
        <Route path='/heroes' element={<Heroes />} />
        <Route path='/hero/:id' element={<HeroEditor/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
