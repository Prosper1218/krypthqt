import React from "react";
import Nav from "./Nav";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const LayoutContainer = () => {
   return (
      <div className="bg-[#121212] min-h-[100vh] h-auto overflow-x-hidden ">
         <Nav />
         <Outlet />
         <Footer />
      </div>
   );
};

export default LayoutContainer;
