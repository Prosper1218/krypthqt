import React from "react";
import {Team} from "../../Data";
import {BackgroundCircles2} from "./Header";
import {motion} from "framer-motion";
import {LazyLoadImage} from "react-lazy-load-image-component";
const TheTeam = () => {
   const theme = "dark";
   return (
      <div className=" overflow-hidden pb-16">
         {/* header */}
         <div className="py-10">
            <div className="hidden md:block">
               <BackgroundCircles2 />
            </div>
            <h1 className=" text-3xl text-center font-extrabold leading-none tracking-normal md:text-5xl md:tracking-tight overflow-hidden">
               <span className=" text-transparent bg-clip-text leading-12 pb-2 bg-gradient-to-r from-[#FF4A00] to-[#ef9e2c] lg:inline overflow-hidden ">Our Team</span>
            </h1>

            <p className="grotesk mb-2 text-sm text-center pt-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] bold tracking-wider">
               [&nbsp; Meet Us &nbsp;]
            </p>
            <p className={`px-4 text-xs md:text-md sora text-center  ${theme === "light" ? "text-[#121212] " : "text-[#cccccc]"}`}>
               Meet the faces behind our mission. <br /> Our dedicated team brings passion, expertise, and creativity to everything they do.
            </p>
         </div>
         {/*  */}
         <motion.section
            initial={{opacity: 0, y: 70}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 3}}
            viewport={{once: "true"}}
            className=" py-4 md:gap-3 lg:gap-8 overflow-hidden justify-center space-y-2 sm:space-y-0 grid grid-cols-2 px-4 sm:grid-cols-3 gap-4 mt-2 mx-auto lg:max-w-[80%] xl:max-w-[70%] items-center"
         >
            {Team.map((person) => {
               return (
                  <article
                     key={person.id}
                     className="relative z-1 sm:w-auto margin-auto items-center justify-center md:max-w-[100%]  rounded-lg overflow-hidden pb-5 bg-[#0B1215] shadow-[0px_4px_16px_rgba(0,0,0,0.5),_0px_8px_24px_rgba(0,0,0,0.5),_0px_16px_56px_rgba(0,0,0,0.5)]"
                  >
                     <div className=" h-[100%] w-[100%] rounded-t-lg">
                        <LazyLoadImage visibleByDefault="true" src={person.imgsrc} alt={person.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="">
                        <p className=" grotesk text-[75%] pt-1 text-center">{person.role}</p>
                        <p className=" sora text-sm text-[#fe6700] py-1 font-bold text-center ">{person.name}</p>
                     </div>

                     {/* <div className="pl-2 sm:pl-4">
                        <p className="text-[#cccccc] text-xs sora pr-2">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cumque, sapiente error voluptate iusto laborum quia? Autem necessitatibus porro
                        </p>
                     </div> */}
                  </article>
               );
            })}
            <br />
         </motion.section>
         
      </div>
   );
};

export default TheTeam;
