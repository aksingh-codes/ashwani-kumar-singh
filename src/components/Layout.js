import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <ToastContainer position="top-center" autoClose={5000} />
      <Footer />
    </>
  );
};

export default Layout;
