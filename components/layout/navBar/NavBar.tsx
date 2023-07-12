import IconInicio from "components/layout/navBar/Inicio/IconInicio";
import react from "react";
import style from "./navbar.module.css";
import Canasta from "components/layout/navBar/canasta/Canasta";


const NavBar = ({data}: any) => {
 
  return (
    <nav className={style.nav}>
      <main className={style.containerNav}>
        <IconInicio />
        <Canasta data={data} />
      </main>
    </nav>
  );
};

export default NavBar;
