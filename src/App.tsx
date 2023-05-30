import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroEditor from './components/HeroEditor';
import { Hero } from './models/Hero';
import Heroes from './components/Heroes';

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
    <div className="App">
      <h1>Tour of Heroes</h1>
      <HeroEditor hero={selectedHero} />
      <Heroes selectedHero={selectedHero} onSelect={handleOnSelectHero} />
    </div>
  );
}

export default App;
