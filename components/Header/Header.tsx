import Avocado from "components/SVGicons/Avocado";
import React from "react";
import style from "./header.module.css"

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>AVO <Avocado size="60px"/> STORE</h1>
    </header>
  );
};

export default Header;
