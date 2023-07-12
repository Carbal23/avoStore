import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "./canasta.module.css";
import Basket from "components/SVGicons/Basket";


const Canasta = ({data}: any) => {

  return (
    <Link href="/canasta" className={styled.container}>
      <Basket />
      <p>{`CANASTA(${data})`}</p>
    </Link>
  );
};

export default Canasta;
