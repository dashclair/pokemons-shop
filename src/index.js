import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Router from './routes/Router';
import MainLayout from './components/MainLayout';

import './static/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <PersistGate persistor={persistor}>
          <MainLayout>
            <Router />
          </MainLayout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
