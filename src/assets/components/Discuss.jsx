import React from "react";
import "../../App.css";

const Discuss = () => {
   const theme = "dark";
   return (
      <div className="min-h-[50vh] h-[35vh] md:h-[60vh] bg-img relative">
         <div className=" bg-black/80 absolute top-0 bottom-0 left-0 right-0" />
         <div className=" absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
            <h1
               className={` text-3xl px-4 text-center font-extrabold leading-none overflow-hidden tracking-normal md:text-5xl md:tracking-tight py-2  ${
                  theme === "light" ? "text-[#121212]" : "text-[#fdfef2]"
               } `}
            >
               Let's discuss your business
            </h1>
            <p className="sora text-center px-4">
               We pride ourselves with our ability to perform and deliver results. <br /> Click the button bellow to reach out to us!
            </p>
            <br />
            <button
               onClick={() => {
                  // router.push("/ContactUs");
               }}
               className={` outline-none focus:outline-none border-[#fe6700] sora rounded-lg border-solid border-2 px-5 py-3 uppercase text-[80%] tracking-wide  ${
                  theme === "light" ? "text-[#121212]" : "text-[white]"
               }`}
            >
               Contact us
            </button>
         </div>
      </div>
   );
};

export default Discuss;
