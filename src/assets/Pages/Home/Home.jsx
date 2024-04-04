import React from "react";
import Hero from "../../components/Hero";
import Section2 from "../../components/Section2";
import Sphere from "../../components/Sphere";
import Section4 from "../../components/Section4";

const Home = () => {
   return (
      <div className="text-red-500">
         <Hero />
         <Section2 />
         <Sphere />
         <Section4 />
      </div>
   );
};

export default Home;
