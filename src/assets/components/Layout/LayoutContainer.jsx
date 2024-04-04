import React from "react";
import Nav from "./Nav";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {SideLines} from "../Header";

const LayoutContainer = () => {
   return (
      <div className="bg-[#121212] min-h-[100vh] h-auto overflow-x-hidden ">
         <Nav />
         <Outlet />
         <SideLines />
         {/* <Footer/> */}
      </div>
   );
};

export default LayoutContainer;
