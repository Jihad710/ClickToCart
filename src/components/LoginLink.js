import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";
import {ProductContext} from '../context/products'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  const { closeSidebar } =  React.useContext(ProductContext);
  if (user.token) {
    return (
      <button
        className="login-btn"
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        logout 
      </button>
    );
  }
  return <Link to="/login" className="login-btn" onClick={closeSidebar}>login </Link>;
}
