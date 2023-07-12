import React from "react";
import style from "./products.module.css"
import Product from "components/Product/Product";

type ProductListProps = {
  products: TProduct[];
};

const Products = ({ products }: ProductListProps) => {
  return (
    <div className={style.productsContainer}>
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
};

export default Products;
