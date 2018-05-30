import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { TodoProvider } from './context';

ReactDOM.render(
    <TodoProvider>
      <App />
    </TodoProvider>, 
document.querySelector('.todoapp'));
registerServiceWorker();
