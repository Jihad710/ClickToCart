import React from 'react'
import logo from '../assets/mainlogo.png'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/products'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from './LoginLink'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } =  React.useContext(ProductContext);
//   const isSidebarOpen = true
//   const closeSidebar = false
  const { user } = React.useContext(UserContext);
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='coding addict' />
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          <li>
              <Link to="/" onClick={closeSidebar}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeSidebar}>About</Link>
            </li>
            <li>
              <Link to="/products" onClick={closeSidebar}>Products</Link>
            </li>
          {user.token && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
          <LoginLink/>
          <CartLink  />
        
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    img {
      width: 20rem;
      margin-left: -15px;
    }
  }
  
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: all 0.3s linear;
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: all 0.3s linear;;
    letter-spacing: 0.1rem;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition:  all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-link-container,
  .login-btn {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 16rem;
    color: var(--clr-grey-3);
    letter-spacing: 0.1rem;
    }


  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

`

export default Sidebar