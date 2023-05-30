import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroEditor from './components/HeroEditor';
import { Hero } from './models/Hero';
import Heroes from './components/Heroes';

const defaultHero: Hero ={
  id: 1,
  name: 'Windstorm'
}
function App() {
  return (
    <div className="App">
      <h1>Tour of Heroes</h1>
      {/* <HeroEditor id={defaultHero.id} name={defaultHero.name} /> */}
      <Heroes/>
    </div>
  );
}

export default App;
