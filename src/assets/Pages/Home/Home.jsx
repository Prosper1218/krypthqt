import React from "react";
import Hero from "../../components/Hero";
import Section2 from "../../components/Section2";
import Sphere from "../../components/Sphere";
import Section4 from "../../components/Section4";
import TWE from "../../components/TWE";
import TheTeam from "../../components/TheTeam";
import {Ham} from "../../components/Header";
import Discuss from "../../components/Discuss";

const Home = () => {
   return (
      <div className="">
         <Hero />
         <Section2 />
         <Sphere />
         <Section4 />
         <TWE />
         <TheTeam />
         <Discuss />
      </div>
   );
};

export default Home;
