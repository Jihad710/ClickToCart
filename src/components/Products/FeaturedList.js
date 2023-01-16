import React from "react";
import FeaturedProduct from "./FeaturedProduct";

export default function FeaturedList({ title, products }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map(item => {
          return <FeaturedProduct key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
