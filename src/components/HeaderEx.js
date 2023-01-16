import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/mainlogo.png";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "./LoginLink";


export default function HeaderEx() {
  const { user } = React.useContext(UserContext);
  return (
    <header className='header'>
      <img  height={80} src={logo} alt= "" />
       {/* <img height={80} src='https://media-exp1.licdn.com/dms/image/C4E22AQFgp3RKOiqsPg/feedshare-shrink_2048_1536/0/1669923794718?e=1672876800&v=beta&t=Y-YCe27UPMeTnFO6MLwVDWfeQIy_7-Uf_LGhTreWIpE'
        alt= ""/> */}

      {/* <img src={logo} alt="vintage tech logo" className="logo" /> */}
      <nav>
        <ul>
          <div>
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
                <Link to="/checkout">Checkout</Link>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>

    </header>
  )
}
