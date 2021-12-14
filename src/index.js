import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Home } from './templates/Home/index';
import { Abc } from './templates/Abc/index';
import { Page404 } from './templates/Page404/index';
import { Menu } from './templates/Menu/index';
import reportWebVitals from './reportWebVitals';
import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Menu components={{ home: <Home />, abc: <Abc />, page404: <Page404 /> }} />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
