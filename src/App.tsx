import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroEditor from './components/HeroEditor';
import { Hero } from './models/Hero';
import Heroes from './components/Heroes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroesDashboard from './components/HeroesDashboard';

const defaultHero: Hero ={
  id: 0,
  name: ''
}

function App() {

  const [selectedHero, setSelectdHero] = useState<Hero>(defaultHero)

  const handleOnSelectHero = (hero: Hero)=>{
    setSelectdHero(hero);
  }
  return (
    <div>
      <h1>Tour of Heroes</h1>
      <BrowserRouter>
      <Routes>
        
        <Route path='/dashboard' element={<HeroesDashboard/>}/>
        <Route path='/heroes' element={<Heroes selectedHero={selectedHero} onSelect={handleOnSelectHero} />} />
        <Route path='/hero/:id' element={<HeroEditor hero={selectedHero}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
