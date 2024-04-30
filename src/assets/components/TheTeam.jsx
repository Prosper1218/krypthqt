import React from "react";
import {Team} from "../../Data";
import {BackgroundCircles2} from "./Header";
import {Link} from "react-router-dom";

const TheTeam = () => {
   const theme = "dark";
   return (
      <div className=" overflow-hidden pb-16">
         {/* header */}
         <div className="py-12">
            <div className="hidden md:block">
               <BackgroundCircles2 />
            </div>
            <h1 className=" text-2xl text-center font-extrabold leading-none tracking-normal md:text-4xl md:tracking-tight overflow-hidden">
               <span className=" text-transparent bg-clip-text leading-12 pb-2 bg-gradient-to-r from-[#FF4A00] to-[#ef9e2c] lg:inline overflow-hidden ">Our Team</span>
            </h1>

            <p className="grotesk mb-4 text-xs text-center text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] bold tracking-wider">
               [&nbsp; Meet Us &nbsp;]
            </p>
            <p className={`px-4 text-xs md:text-md sora text-center  ${theme === "light" ? "text-[#121212] " : "text-[#cccccc]"}`}>
               Meet the faces behind our mission. <br /> Our dedicated team brings passion, expertise, and creativity to everything they do.
            </p>
         </div>
         {/*  */}
         <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 py-3 md:gap-3 lg:gap-8 px-3 md:px-12 xl:px-32 overflow-hidden items-center justify-center space-y-2 sm:space-y-0">
            {Team.map((person) => {
               return (
                  <article
                     key={person.id}
                     className="relative z-1 max-w-[20rem] mx-auto sm:w-auto margin-auto items-center justify-center md:max-w-[100%]  rounded-lg overflow-hidden pb-6 bg-[#101010] shadow-[0px_4px_16px_rgba(68,68,68,0.1),_0px_8px_24px_rgba(68,68,68,0.1),_0px_16px_56px_rgba(68,68,68,0.1)]"
                  >
                     <div className=" h-[33vh] w-[100%] rounded-t-lg">
                        <img src={person.imgsrc} alt={person.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="pl-4">
                        <p className=" grotesk text-sm text-[#fe6700] py-1 font-bold ">{person.name}</p>
                        <p className=" sora text-xs font-bold">{person.role}</p>
                     </div>

                     <div className="pl-4">
                        <p className="text-[#cccccc] text-xs sora pr-2">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, sapiente error voluptate iusto laborum quia? Autem necessitatibus porro 
                        </p>
                     </div>
                  </article>
               );
            })}
         </section>
      </div>
   );
};

export default TheTeam;
