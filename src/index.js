import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';

import Router from './routes/Router';
import MainLayout from './components/MainLayout';

import './static/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <MainLayout>
          <Router />
        </MainLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
