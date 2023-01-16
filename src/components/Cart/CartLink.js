import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from "../../context/cart";
import {ProductContext} from '../../context/products'

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);
  const { closeSidebar } =  React.useContext(ProductContext);

  return (
    // <div className="cart-link-container">
    //   <Link to="/cart">Cart</Link>
    //   <span className="cart-link-total">{cartItems}</span>
    // </div>
    <Wrapper className='cart-link-container'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{cartItems}</span>
        </span>
      </Link>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: 0.1rem;;
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
`
