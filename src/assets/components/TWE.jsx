import React from "react";
import {thingsweenjoy1, thingsweenjoy2} from "../../Data";

const TWE = () => {
   // const {theme} = UseTheme();
   const theme = "dark";
   return (
      <div>
         <div className="my-7" id="services">
            <h1 className=" text-2xl  font-extrabold leading-none text-center tracking-normal text-white md:text-4xl md:tracking-tight overflow-hidden py-2">
               <span className=" text-transparent text-center bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] lg:inline overflow-hidden ">What we offer</span>
            </h1>
            <p className="grotesk mb-2 text-xs text-center text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] ">[&nbsp; Our Services &nbsp;]</p>
            <p className="sora text-xs text-center px-4">
               Explore our comprehensive range of services below and <br />
               envision the possibilities for your next project.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 py-4 items-start justify-center xl:px-20 px-0">
               <div className=" pl-6 md:pl-10 md:pt-10">
                  {thingsweenjoy2.map((thing) => {
                     return (
                        <article key={thing.id} className={`flex flex-col md:flex-row gap-4 py-3 justify-start ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} `}>
                           <div className="text-3xl font-semibold sora flex overflow-hidden tracking-wide text-[#fe6700] ">0{thing.id}</div>
                           <div className={``}>
                              <h3 className="font-bold tracking-wide text-2xl sora">{thing.title}</h3>
                              <p className=" text-sm grotesk pr-2 pt-3">
                                 {thing.des} <br />
                                 {thing.dess}
                              </p>
                           </div>
                        </article>
                     );
                  })}
               </div>

               <div className=" pl-6 md:pl-10">
                  {thingsweenjoy1.map((thing) => {
                     return (
                        <article key={thing.id} className={`flex flex-col md:flex-row gap-4 py-3 justify-start ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} `}>
                           <div className="text-3xl font-semibold sora flex overflow-hidden tracking-wider text-[#fe6700] ">0{thing.id}</div>
                           <div className="">
                              <h3 className="font-bold text-2xl tracking-wide sora">{thing.title}</h3>
                              <p className=" text-sm grotesk pr-2  pt-3">
                                 {thing.des} <br />
                                 {thing.dess}
                              </p>
                           </div>
                        </article>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TWE;
