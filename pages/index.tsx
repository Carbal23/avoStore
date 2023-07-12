import Header from "components/Header/Header";
import Products from "components/Products/Products";
import react, { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const peticion = await fetch("https://avo-store-theta.vercel.app/api/avo");
  const response = await peticion.json();
  const { data, length }: TAPIAvoResponse = response;

  return {
    props: {
      products: data,
    },
  };
};

const Home = ({ products }: { products: TProduct[] }) => {
  // const [products, setProducts] = useState<TProduct[]>([]);

  // useEffect(() => { //client side rendered
  //   const getProducts = async () => {
  //     const peticion = await fetch("/api/avo");
  //     const response = await peticion.json();
  //     const { data, length } = response;
  //     console.log(data);
  //     setProducts(data);
  //   };

  //   getProducts();
  // }, []);

  return (
    <>
      <Header />
      <Products products={products} />
    </>
  );
};

export default Home;
