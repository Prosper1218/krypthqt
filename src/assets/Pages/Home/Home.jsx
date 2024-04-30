import React from "react";
import Hero from "../../components/Hero";
import Section2 from "../../components/Section2";
import Sphere from "../../components/Sphere";
import Section4 from "../../components/Section4";
import TWE from "../../components/TWE";
import TheTeam from "../../components/TheTeam";
import {Ham} from "../../components/Header";
import Discuss from "../../components/Discuss";
import talentedpeaople from "/talentedpeople.jpg";
import btc from "/btc.jpg";

const Home = () => {
   return (
      <div className="">
         <Hero />

         <Section2 img={talentedpeaople} header1={"Powered By"} header2={"Talented People"} />
         <div id="Services">
            {" "}
            <TWE />
         </div>
         {/* <Sphere /> */}
         <Section4 img={btc} header1={"Discover Web3"} header2={"With Krypthq"} />

         <TheTeam />
         <Discuss />
      </div>
   );
};

export default Home;
