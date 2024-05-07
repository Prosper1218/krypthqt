import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutContainer from "./assets/components/Layout/LayoutContainer.jsx";
import Home from "./assets/Pages/Home/Home.jsx";
import About from "./assets/Pages/About/About.jsx";
import Services from "./assets/Pages/Services/Services.jsx";
import ContactUs from "./assets/Pages/ContactUs/ContactUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutContainer />}>
               <Route path="/" element={<Home />} />
               <Route path="/About" element={<About />} />
               <Route path="/Services" element={<Services />} />
               <Route path="/ContactUs" element={<ContactUs />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
