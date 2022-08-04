import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children, route }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
