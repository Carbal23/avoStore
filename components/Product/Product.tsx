import React from "react";
import style from "./product.module.css";
import Link from "next/link";
import Image from "next/image";

type ProductProps = {
  product: TProduct;
};

const Product = ({ product }: ProductProps) => {
  return (
    <Link href={`/products/${product.id}`} className={style.link}>
      <div className={style.cardContainer}>
        <div>
          <Image src={product.image} alt={product.name} height={340} width={340}/>
        </div>
        <div className={style.infoContainer}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
