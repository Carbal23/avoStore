import React from "react";
import Link from "next/link";
import style from "./footer.module.css"

const Footer = () => {
  return (
    <div className={style.footerContainer}>
           <footer className={style.footer}>
        <div>
          <h4>Nosotros</h4>
          <Link href="/">Conoce mas</Link>
        </div>
        <div>
          <h4>Servicios</h4>
          <Link href="/">Todos los productos</Link>
        </div>
        <div>
          <h4>Redes</h4>
          <Link href="/">
            <p>tweter</p>
            <p>github</p>
          </Link>
        </div>
      <div className={style.buttonInfo}>
            <p>© 2023 Avo store. Todos los derechos reservados. Creado por Mauricio Carbal Frontend Developer. </p>
      </div>
    </footer>
    </div>
 
  );
};

export default Footer;
