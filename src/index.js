import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
import { createRoot } from 'react-dom/client';
import ChartContextProvider from './context/ChartContext';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChartContextProvider>
    <App />
    </ChartContextProvider>
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

