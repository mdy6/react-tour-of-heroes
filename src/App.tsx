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
import { NotificationContext, NotificationContextProps } from './technical/NotificationContext';
import { NotificationQueue } from './technical/NotificationQueue';
import { useInjection } from 'brandi-react';
import { TOKENS } from './services/token';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';
import schedule from 'node-schedule';
import { NotificationValue } from './technical/Notification';


function App() {

  const notificationQueue = useInjection(TOKENS.notificationQueue);
  const notificationService = useInjection(TOKENS.notificationService);


  const updateNotification = () => {
    let notificationValue: NotificationValue = notificationQueue.dequeue();
    if (notificationValue) {
      Store.addNotification({
        title: notificationValue,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },
      });
    }
  }

  setInterval(() => {
    notificationService.poolNotifications();
    updateNotification();
  }, 6000);


  return (
    <div>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <ReactNotifications />
        <Routes>
          <Route path='/' element={<HeroesNavBar />} />
          <Route path='/dashboard' element={<HeroesDashboard />} />
          <Route path='/heroes' element={<Heroes />} />
          <Route path='/hero/:heroId' element={<HeroEditor />} />
          <Route path='/hero/:heroId/papers' element={<Papers />} />
          <Route path='/papers' element={<Papers />} />
          <Route path='/papers/:id' element={<PaperPresentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
