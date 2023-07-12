import Header from "components/Header/Header";
import Products from "components/Products/Products";
import react, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const peticion = await fetch("/api/avo");
      const response = await peticion.json();
      const { data, length } = response;
      console.log(data);
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <>
      <Header />
      <Products products={products} />
    </>
  );
};

export default Home;
