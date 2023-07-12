import Layout from "components/layout/Layout";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [cartValue, setCartValue]= useState(0);

  const upDataCar = (data : number)=>{
    console.log(data);
    setCartValue(prevNumber => prevNumber + Number(data));
    console.log(cartValue);
  }
  return (
    <Layout data={cartValue}>
      <Component {...pageProps} onDataUpdate = {upDataCar}></Component> 
    </Layout>
  );
}
