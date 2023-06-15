import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContainer } from 'brandi';
import { TOKENS } from './services/token';
import { HeroApiService } from './services/hero.service';
import { ConsoleLogger, MessageService } from './services/message.service';
import { ContainerProvider } from 'brandi-react';
import { PaperApiService } from './services/paper.service';
import { NotificationQueue } from './technical/NotificationQueue';
import { NotificationApiService } from './services/notifications.service';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser')
//   worker.start()
// }
const container = createContainer();
container.bind(TOKENS.heroService).toInstance(HeroApiService).inTransientScope();
container.bind(TOKENS.messageService).toInstance(MessageService).inSingletonScope();
container.bind(TOKENS.consoleService).toInstance(ConsoleLogger).inSingletonScope();
container.bind(TOKENS.paperService).toInstance(PaperApiService).inTransientScope();
container.bind(TOKENS.notificationQueue).toInstance(NotificationQueue).inSingletonScope();
container.bind(TOKENS.notificationService).toInstance(NotificationApiService).inSingletonScope();


root.render(
    <ContainerProvider container={container}>
      <App />
    </ContainerProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
