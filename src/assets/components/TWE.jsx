import React from "react";
import {thingsweenjoy1, thingsweenjoy2} from "../../Data";
import {motion} from "framer-motion";
const TWE = () => {
   const theme = "dark";
   return (
      <div>
         <div className="my-7" id="services">
            <h1 className=" text-3xl  font-extrabold leading-none text-center tracking-normal text-white md:text-5xl md:tracking-tight overflow-hidden py-2">
               <span className=" text-transparent text-center bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] lg:inline overflow-hidden ">What we offer</span>
            </h1>
            <p className="grotesk mb-2 text-sm text-center text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] ">[&nbsp; Our Services &nbsp;]</p>
            <p className="sora md:text-md  text-xs text-center px-4">
               Explore our comprehensive range of services below and <br />
               envision the possibilities for your next project.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 py-4 items-start justify-center xl:px-20 px-0">
               <div className=" pl-6 md:pl-10 md:pt-10 overflow-y-hidden">
                  {thingsweenjoy2.map((thing) => {
                     return (
                        <motion.article
                           initial={{opacity: 0, y: 70}}
                           whileInView={{opacity: 1, y: 0}}
                           transition={{duration: 3}}
                           key={thing.id}
                           className={`flex overflow-hidden flex-col md:flex-row gap-4 py-3 justify-start ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} `}
                        >
                           <div className="text-3xl font-semibold sora flex overflow-hidden tracking-wide text-[#fe6700] ">0{thing.id}</div>
                           <div className={``}>
                              <h3 className="font-bold tracking-wide lg:text-3xl overflow-y-hidden text-2xl sora">{thing.title}</h3>
                              <p className=" text-sm grotesk pr-2 pt-3">
                                 {thing.des} <br />
                                 {thing.dess}
                              </p>
                           </div>
                        </motion.article>
                     );
                  })}
               </div>

               <div className=" pl-6 md:pl-10 overflow-y-hidden">
                  {thingsweenjoy1.map((thing) => {
                     return (
                        <motion.article
                           initial={{opacity: 0, y: 70}}
                           whileInView={{opacity: 1, y: 0}}
                           transition={{duration: 3}}
                           key={thing.id}
                           className={`flex flex-col md:flex-row gap-4 py-3 overflow-hidden justify-start ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} `}
                        >
                           <div className="text-3xl font-semibold sora flex overflow-hidden tracking-wider text-[#fe6700] ">0{thing.id}</div>
                           <div className="">
                              <h3 className="font-bold lg:text-3xl text-2xl tracking-wide overflow-y-hidden sora">{thing.title}</h3>
                              <p className=" text-sm grotesk pr-2  pt-3">
                                 {thing.des} <br />
                                 {thing.dess}
                              </p>
                           </div>
                        </motion.article>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TWE;
