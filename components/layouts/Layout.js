import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, className }) {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
