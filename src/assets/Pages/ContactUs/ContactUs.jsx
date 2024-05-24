import React from "react";

const ContactUs = () => {
   return (
      <div className="min-h-[80vh] h-auto mt-[5.8rem] relative bg-transparent">
         <div className="min-h-[45vh] h-[30vh] md:h-[65vh] xl:h-[75vh] bg-img-contact relative flex flex-col justify-center items-center">
            <div className=" bg-[#0B1215]/60 absolute top-0 bottom-0 left-0 right-0" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center bg-transparent items-center">
               <h1 className=" text-white text-center pt-4 pb-10 text-5xl sora font-extrabold">Contact Us</h1>
               <div className=" min-h-[40vh] grid grid-cols-1 md:grid-cols-2 max-w-[35rem] xl:max-w-[57rem] bg-transparent mx-auto md:max-w-[60rem] xl:mb-22 space-y-3 md:space-y-0 lg:gap-4 overflow-y-hidden w-full">
                  <div className="rounded-lg bg-[#0B1215] p-4 ">hi</div>
                  <div className="rounded-lg bg-[#0B1215] p-4">hi</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;

