import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContainer } from 'brandi';
import { TOKENS } from './services/token';
import { MockHeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { ContainerProvider } from 'brandi-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const container = createContainer();
container.bind(TOKENS.heroService).toInstance(MockHeroService).inTransientScope();
container.bind(TOKENS.messageService).toInstance(MessageService).inSingletonScope();

root.render(
  <React.StrictMode>
    <ContainerProvider container={container}>
      <App />
    </ContainerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
