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
         <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-7 px-4 md:px-16 xl:px-36 overflow-hidden">
            {Team.map((person) => {
               return (
                  <article key={person.id} className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] overflow-hidden">
                     <Link href={`/Our-Team/${person.id}`} className="">
                        <article
                           className={` flex flex-col justify-center items-center p-0 rounded-2xl space-y-4 teamcar  ${
                              theme === "light" ? "bg-[white] text-[#121212] " : "bg-[#121212] text-[#cccccc]"
                           }`}
                        >
                           <div className="w-[100%] h-30 bg-[#fe6700] p-0 border">
                              <img src={person.imgsrc} alt={person.name} className=" object-center" />
                           </div>
                           <p className=" grotesk text-xs font-bold">[&nbsp;{person.name}&nbsp;]</p>
                           <p className=" sora text-xs font-bold text-center px-2">{person.role}</p>
                        </article>
                     </Link>
                  </article>
               );
            })}
         </section>
      </div>
   );
};

export default TheTeam;
