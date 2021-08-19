import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';
import reportWebVitals from './reportWebVitals';
import { AdminProvider } from './context/AdminContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
