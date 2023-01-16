import React from 'react'
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import Contact from '../components/Contact';
import Service from '../components/Service';

function Home() {
    return (
        <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our products
        </Link>
      </Hero>
      <FeaturedProducts />
      <Service/>
      <Contact/>
      
    </>

);
}

export default Home