import Footer from "components/layout/Footer/Footer";
import NavBar from "components/layout/navBar/NavBar";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
  data? : number | undefined;
};

const Layout = ({ children, data }: LayoutProps) => {
  return (
    <>
      <NavBar data={data} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
