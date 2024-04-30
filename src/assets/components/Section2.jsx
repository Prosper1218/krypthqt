import React from "react";
import talentedpeople from "/talentedpeople.jpg";
import {motion} from "framer-motion";
import {BackgroundCircles, BackgroundCircles2} from "./Header";

const Section2 = () => {
   const theme = "dark";
   return (
      <div className=" mx-4 lg:mx-16 rounded-lg bg-[#101010] shadow-[0px_4px_16px_rgba(68,68,68,0.1),_0px_8px_24px_rgba(68,68,68,0.1),_0px_16px_56px_rgba(68,68,68,0.1)] ">
         <section className="px-4 md:px-8 my-16 overflow-y-hidden">
            {/* <SideLines /> */}

            <motion.div
               initial={{opacity: 0, y: 70}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 3}}
               className=" min-h-[30vh] grid grid-cols-1 md:grid-cols-2 max-w-[35rem] mx-auto md:max-w-[72rem] xl:max-w-[80rem] xl:mb-22 space-y-3 md:space-y-0 lg:gap-4 overflow-y-hidden"
            >
               <div className="flex justify-center items-center">
                  <img src={talentedpeople} alt="talented traders" className="w-full bg-transparent object-contain min-h-[44] rounded-xl" />
               </div>

               <div className="w-full mx-auto text-left md:w-11/12 xl:w-14/14 space-y-2">
                  <h1
                     className={`mb-4 text-2xl font-extrabold leading-none tracking-normal  md:text-4xl md:tracking-tight overflow-hidden ${
                        theme === "light" ? "text-[#121212]" : "text-[white]"
                     }`}
                  >
                     <span className="block overflow-hidden">
                        <span>Powered</span> <span className=" w-full py-2 leading-12 bg-transparent">by</span>
                     </span>
                     <span className=" text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] lg:inline overflow-hidden">Talented people</span>
                  </h1>
                  <p className={`px-0 lg:mb-4 text-xs ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} md:text-sm text-left sora`}>
                     Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
                  </p>
                  <p className={`px-0 lg:mb-4 text-xs ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} md:text-sm text-left sora`}>
                     wanted with our next-level templates and designs. Crafted to help you tell your story.
                  </p>
                  <p className={`px-0 lg:mb-4 text-xs ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} md:text-sm text-left sora`}>
                     Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story. <br />
                   <span className="hidden lg:flex">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magni aliquam quibusdam ex pariatur sequi a officiis itaque similique quaerat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, consequuntur.</span>
                  </p>
                  <button
                     onClick={() => {}}
                     type="button"
                     className={`outline-none focus:outline-none border-[#fe6700] rounded-lg sora border-solid mt-4 border-2 px-6 py-3 uppercase ${
                        theme === "light" ? "text-[#121212]" : "text-[white]"
                     } text-[75%]`}
                  >
                     Contact Us
                  </button>
               </div>
            </motion.div>
         </section>
      </div>
   );
};

export default Section2;
