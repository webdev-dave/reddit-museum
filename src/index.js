import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/reset.css';
import './assets/styles/app.css';
import App from './app/App';
import store from './app/store'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

