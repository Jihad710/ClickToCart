import React from "react";

// react router dom
import { Route, Routes } from 'react-router-dom';
// pages

import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
//components
import Header from './components/Header';
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
import ScrollButton from "./components/ScrollButton";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App () {

  return (
    <>
    <Header />
    <Sidebar/>
    <Alert/>
    <ScrollButton />
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route  path='about' element={<About/>} />
    <Route  path="cart" element={<Cart/>} />
    {/* <Route  path="checkout" element={<Checkout/>} /> */}
    <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
    <Route  path="login" element={<Login></Login>} />
    <Route  path="/products" element={<Products/>} />
    <Route  path="/products/:id" element={<ProductDetails/>} />
    <Route  path="*" element={<Error/>} />
    </Routes>
    <Footer/>
    </>
    );
    }
  export default App;


          
          
