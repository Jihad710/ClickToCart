import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductProvider from "./context/products";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ProductProvider>
  </UserProvider>,
  
);