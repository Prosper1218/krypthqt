import React from "react";
import {ContactDetails} from "../../../Data";

const ContactUs = () => {
   return (
      <div className="min-h-[80vh] h-auto mt-[5.8rem] relative bg-[#0B1215] flex justify-center items-center flex-col">
         <h1 className=" text-white text-center pt-4 pb-1 text-5xl sora font-extrabold overflow-y-hidden">Contact Us</h1>
         <p className="grotesk text-[#cccccc] text-sm md:text-[100%] px-4"> We appreciate your interest in working with us! </p>
         <p className="grotesk text-[#cccccc] text-sm md:text-[100%] max-w-[90%] lg:max-w-[50%] px-4 text-center">
            {" "}
            We appreciate your interest in working with us! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ad deleniti ut voluptatibus impedit, natus voluptatem
            pariatur, nulla praesentium officiis quas laborum minus rerum? Corrupti fugit obcaecati ratione veritatis fuga!
         </p>
         <br />
         <h1 className=" text-white text-center pt-4 pb-1 text-3xl md:text-4xl sora font-bold overflow-y-hidden">Direct Enquiries</h1>
         <br />

         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-w-[90%] md:min-w-[80%] gap-2">
            {ContactDetails.map((detail) => {
               return (
                  <section key={detail.id} className=" overflow-y-hidden">
                     <h2 className="text-2xl lg:text-4xl font-bold sora overflow-y-hidden text-center">{detail.header}</h2>
                     <h4 className="text-1xl grotesk text-[#fe6700] font-bold text-center">{detail.title}</h4>
                  </section>
               );
            })}
         </div>
      </div>
   );
};

export default ContactUs;

{
   /* <div className=" bg-[#0B1215]/60 absolute top-0 bottom-0 left-0 right-0" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center bg-transparent items-center">
               <h1 className=" text-white text-center pt-4 pb-10 text-5xl sora font-extrabold overflow-y-hidden">Contact Us</h1>
               <div className=" min-h-[40vh] grid grid-cols-1 md:grid-cols-2 max-w-[35rem] xl:max-w-[57rem] bg-transparent mx-auto md:max-w-[60rem] xl:mb-22 space-y-3 md:space-y-0 lg:gap-4 overflow-y-hidden w-full">
                  <div className="rounded-lg bg-[#0B1215] p-4 ">hi</div>
                  <div className="rounded-lg bg-[#0B1215] p-4">hi</div>
               </div>
            </div> */
}
