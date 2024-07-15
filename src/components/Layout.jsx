import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Siderbar from "./Siderbar";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
    <div className="main-layout">
      <header className="header">
        <Header />
      </header>
      <div className="sidebar">
        <Siderbar />
      </div>
      <div className="main pt-3 px-4 pb-4">{ children }</div>
      <footer >
        <Footer />
      </footer>
    </div>
    </>
  );
};
export default Layout;
