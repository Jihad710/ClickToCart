import React from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";
import Loading from "../Loading";
import FeaturedList from "./FeaturedList";

export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(ProductContext);
  // if (loading) {
  //   return <Loading />;
  // } 
  return <FeaturedList title="featured products" products={featured} />;
}
