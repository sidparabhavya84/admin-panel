import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

import { Provider } from 'react-redux';
import {store} from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
