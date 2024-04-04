import React from "react";
import {Socials} from "../../../Data";

const Footer = () => {
   return (
      <div className="">
         <section className={`min-h-[5rem] h-auto px-8 sm:px-36 m-auto  flex flex-col justify-center relative pb-2  border-t-[1px] border-solid border-gray-100/20 border `}>
            <div className=" flex sm:justify-between justify-center w-full sm:w-auto items-center max-sm:flex-col space-y-4 ">
               <p className="caption text-gray-300/50 text-xs josephin lg:block">© {new Date().getFullYear()}. All rights reserved.</p>

               <section className=" p-1">
                  <p className="text-[60%] sora text-gray-200/40 py-1"> Follow us:</p>
                  <ul className="flex gap-3 flex-wrap">
                     {Socials.map((item) => (
                        <a
                           key={item.id}
                           href={item.url}
                           target="_blank"
                           className="flex items-center justify-center overflow-hidden  w-8 h-8 bg-gray-200/50 rounded-full transition-colors hover:bg-gray-300/40"
                        >
                           <img src={item.icon} className="w-full h-full rounded-full object-cover border-none" alt={item.title} />
                        </a>
                     ))}
                  </ul>
               </section>
            </div>
         </section>
      </div>
   );
};

export default Footer;
