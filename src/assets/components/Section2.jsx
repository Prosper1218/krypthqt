import React from "react";
import talentedpeople from "../../../public/talentedpeople.jpg";
import {SideLines} from "./Header";
const Section2 = () => {
   const theme = "dark";
   return (
      <section className="px-4 md:px-8 my-10">
         <SideLines />
         <div className=" min-h-[30vh] grid grid-cols-1 md:grid-cols-2 max-w-[35rem] mx-auto md:max-w-[72rem] xl:mb-22 space-y-3 md:space-y-0 lg:gap-4">
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
                  Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
               </p>

               <button
                  onClick={() => {}}
                  type="button"
                  className={`outline-none focus:outline-none border-[#fe6700] rounded-lg border-solid border-2 px-6 py-3 uppercase ${
                     theme === "light" ? "text-[#121212]" : "text-[white]"
                  } text-[75%]`}
               >
                  Contact Us
               </button>
            </div>
         </div>
      </section>
   );
};

export default Section2;
