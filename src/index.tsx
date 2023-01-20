import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartBarProvider } from './context/storeContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <CartBarProvider>
          <App />
      </CartBarProvider>
      </BrowserRouter>
  </React.StrictMode>
);
