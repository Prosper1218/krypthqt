import {motion} from "framer-motion";
import React from "react";
import square from "/square.png";
import {Process} from "../../../Data";
import {Arrow1, Arrow2, Arrow3} from "../../components/Header";
import TWE from "../../components/TWE";
import {useNavigate} from "react-router-dom";

const Services = () => {
   const theme = " dark";
   const navigate = useNavigate();
   return (
      <div className="min-h-[100vh] h-auto mt-[5.8rem] relative bg-transparent">
         <div className="min-h-[45vh] h-[35vh] md:h-[65vh] xl:h-[70vh] bg-img-services relative flex flex-col justify-center items-center">
            <div className=" bg-[#0B1215]/60 absolute top-0 bottom-0 left-0 right-0" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
               <img src={square} alt="square" className=" w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] absolute right-9 bottom-4 sm:bottom-12 rotate " />
               <img src={square} alt="square" className=" w-[3.5rem] h-[3.5rem] sm:w-[4rem]  sm:h-[4rem] absolute right-9 bottom-4 sm:bottom-12 rotate rotate-90 " />
               <img src={square} alt="square" className="w-[4rem] h-[4rem] absolute left-9 top-9 rotate hidden sm:block" />
               <img src={square} alt="square" className="w-[4rem] h-[4rem] absolute left-9 top-9 rotate rotate-90  hidden sm:block" />
               {/* content */}
               <h1 className=" text-white text-center pt-4 pb-1 text-4xl sora font-extrabold">Our Services</h1>

               <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}} className="flex justify-center flex-col overflow-y-hidden h-auto px-4">
                  <p className="text-xs overflow-y-hidden md:text-[100%] text-white sora px-4 max-w-[50rem] text-center leading-5 ">
                     we aim to drive transformative growth through innovative marketing strategies, cutting-edge technology, and unparalleled customer experiences. We envision a
                     future where brands thrive, communities flourish, and connections are made meaningful
                  </p>
                  <br />
               </motion.div>
               <motion.button
                  initial={{opacity: 0, y: 70}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 3}}
                  onClick={() => {
                     navigate("/ContactUs");
                  }}
                  className={` outline-none focus:outline-none border-[#fe6700] h-10 sora rounded-lg border-solid border-2 px-3 py-2 uppercase text-[65%]  sm:text-[80%] tracking-wide  ${
                     theme === "light" ? "text-[#121212]" : "text-[white]"
                  }`}
               >
                  Contact us
               </motion.button>
            </div>
         </div>
         <br />
         <div className=" pt-2">
            <div className="relative mx-2 lg:mx-16 rounded-lg bg-[#0B1215] shadow-[0px_4px_16px_rgba(0,0,0,0.5),_0px_8px_24px_rgba(0,0,0,0.5),_0px_16px_56px_rgba(0,0,0,0.5)]">
               <img src={square} alt="square" className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] absolute right-12 bottom-4 sm:bottom-8 rotate " />
               <img src={square} alt="square" className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] absolute right-12 bottom-4 sm:bottom-8 rotate rotate-90 " />

               <section className="px-4  my-12 overflow-y-hidden ">
                  <motion.div
                     initial={{opacity: 0, y: 70}}
                     whileInView={{opacity: 1, y: 0}}
                     transition={{duration: 3}}
                     className=" min-h-[20vh] grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[37rem] xl:max-w-[80rem] mx-auto md:max-w-[74rem] space-y-0 md:space-y-0 lg:gap-4 overflow-y-hidden"
                  >
                     <div className="sm:pl-3">
                        <h3 className="font-bold text-[#fe6700] sora float-left text-[70%]">Our Process</h3> <br />
                        <h1 className=" text-2xl font-extrabold leading-none tracking-normal md:text-3xl lg:text-4xl md:tracking-tight overflow-hidden">
                           <span className="block overflow-y-hidden"> our working process helps</span>
                           you get the best from <br />
                           our team skill.
                        </h1>
                     </div>
                     <div className="">
                        <p className=" sm:mt-8 grotesk text-[75%] sm:pl-4 text-[#cccccc]">
                           With Our team knowledge of different process <br /> We Choose the perfect process to suit the <br /> Development of your Product{" "}
                        </p>
                     </div>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 gap-2 space-y-2 sm:space-y-0 relative pb-6 lg:pb-20  max-w-[37rem] xl:max-w-[80rem] mx-auto md:max-w-[74rem] pt-[1rem] md:pt-[4.1rem]">
                     <Arrow1 width={"w-[11rem]"} />
                     <Arrow2 width={"w-[11rem]"} />
                     <Arrow3 width={"w-[11rem]"} />
                     {Process.map((item) => {
                        return (
                           <section key={item.id} className="">
                              <div className="flex gap-3 flex-row items-center justify-start ">
                                 <span className="sora font-extrabold text-[#fe6700] text-[110%]">0{item.id}</span> <h4 className="bold sora text-[110%] ">{item.header}</h4>
                              </div>
                              <p className="text-[#cccccc] text-xs grotesk">{item.title}</p>
                           </section>
                        );
                     })}
                  </div>
                  <TWE />
               </section>
            </div>
            <br />
         </div>
         <br />
         <br />
         <br />
      </div>
   );
};

export default Services;
