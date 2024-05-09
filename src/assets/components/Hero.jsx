import trader from "../../../public/traderbg.jpg";
import {BackgroundCircles, BackgroundCircles2, BackgroundCircles3} from "./Header";
import {motion} from "framer-motion";
import square from "/square.png";
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Hero = () => {
   const theme = "dark";
   const navigate = useNavigate();
   return (
      <>
         <section className="pt-[10rem] z-40 pb-[3rem] overflow-x-hidden">
            <div className="hidden lg:block">
               <BackgroundCircles />
            </div>{" "}
            <div className=" hidden md:block">
               <BackgroundCircles2 />
            </div>
            <div className=" md:hidden">
               <BackgroundCircles3 />
            </div>
            <img src={square} alt="square" className="w-[4rem] h-[4rem] absolute right-40 bottom-8 lg:bottom-[4.3rem] xl:bottom-9 rotate rotate-90 hidden md:block" />
            <img src={square} alt="square" className="w-[4rem] h-[4rem] absolute right-40 bottom-8 lg:bottom-[4.3rem] xl:bottom-9 rotate rotate hidden md:block" />
            {/* <SideLines/> */}
            <div className="px-6 mx-auto max-w-7xl py-4">
               <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 sm:text-center overflow-y-hidden">
                  <motion.h1
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     transition={{duration: 4}}
                     viewport={{once: "true"}}
                     className={`mb-4 text-4xl font-extrabold leading-none overflow-hidden tracking-normal md:text-6xl md:tracking-tight py-2  ${
                        theme === "light" ? "text-[#121212]" : "text-[#fdfef2]"
                     } `}
                  >
                     <span>Explore</span> <span className="block w-full py-2 leading-12 overflow-hidden lg:inline">the web3 world with</span>{" "}
                     <span className="py-2 block overflow-y-hidden text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] ">Krypt HQ</span>
                  </motion.h1>
                  <motion.p
                     initial={{opacity: 0, y: 70}}
                     animate={{opacity: 1, y: 0}}
                     transition={{duration: 2}}
                     viewport={{once: "true"}}
                     className={`px-0 mb-4 text-sm md:text-lg lg:px-32 sora ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"}`}
                  >
                     Join us at the forefront of Web3 evolution. Embrace decentralization and unlock new pathways to success with our solutions.
                  </motion.p>
                  <motion.button
                     initial={{opacity: 0, y: 70}}
                     animate={{opacity: 1, y: 0}}
                     transition={{duration: 3}}
                     viewport={{once: "true"}}
                     onClick={() => {
                        navigate("/ContactUs");
                     }}
                     className={` outline-none focus:outline-none border-[#fe6700] sora rounded-lg border-solid border-2 px-5 py-2 uppercase text-[80%] tracking-wide  ${
                        theme === "light" ? "text-[#121212]" : "text-[white]"
                     }`}
                  >
                     Contact us
                  </motion.button>
               </div>
            </div>
            <div className=" px-5  xl:px-5">
               <div className=" relative max-w-[35rem] mx-auto md:max-w-6xl xl:mb-22 mt-[6rem] md:mt-[8rem] xl:mt-[12rem]">
                  <div className=" relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#3fc8d5] to-purple-500 overflow-hidden">
                     <div className="relative rounded-[1rem] overflow-hidden  z-10">
                        <div className=" relative aspect-[33/30] rounded-b-[0.9rem] overflow-y-hidden md:aspect-[688/400] lg:aspect-[1024/450]">
                           <LazyLoadImage visibleByDefault="true" src={trader} alt="trader" className="w-full h-full object-cover" width={1024} height={490} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Hero;
