import React from 'react'
import styled from 'styled-components'
import logo from '../assets/mainlogo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartLink from "./Cart/CartLink";
import LoginLink from "./LoginLink";
import { UserContext } from "../context/user";
import { ProductContext } from '../context/products'

const Header = () => {
  const { openSidebar } = React.useContext(ProductContext);
  const { user } = React.useContext(UserContext);
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {/* {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })} */}
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          {user.token && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        {/* <CartButtons /> */}
        <LoginLink />
        <CartLink />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 20rem;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-link-container{
    display: none;
  }
  .login-btn {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: 60px 1fr 120px 40px;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-link-container {
      display: grid;
    }
    .login-btn  {
      display: grid;
    }
  }
`

export default Header