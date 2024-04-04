import trader from "../../../public/traderbg.jpg";
import {BackgroundCircles, BackgroundCircles2, BackgroundCircles3, SideLines} from "./Header";

const Hero = () => {
   const theme = "dark";
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
            {/* <SideLines/> */}
            <div className="px-6 mx-auto max-w-7xl py-4">
               <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 sm:text-center">
                  <h1
                     className={`mb-4 text-4xl font-extrabold leading-none overflow-hidden tracking-normal md:text-6xl md:tracking-tight py-2  ${
                        theme === "light" ? "text-[#121212]" : "text-[#fdfef2]"
                     } `}
                  >
                     <span>Explore</span> <span className="block w-full py-2 leading-12 overflow-hidden lg:inline">the web3 world with</span>{" "}
                     <span className="py-2 block overflow-y-hidden text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] ">Krypt HQ</span>
                  </h1>
                  <p className={`px-0 mb-4 text-sm md:text-lg lg:px-32 sora ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"}`}>
                     Join us at the forefront of Web3 evolution. Embrace decentralization and unlock new pathways to success with our solutions.
                  </p>
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
            <div className=" px-5  xl:px-5">
               <div className=" relative max-w-[35rem] mx-auto md:max-w-5xl xl:mb-22 mt-[6rem] md:mt-[8rem] xl:mt-[12rem]">
                  <div className=" relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#3fc8d5] to-purple-500 overflow-hidden">
                     <div className="relative rounded-[1rem] overflow-hidden  z-10">
                        <div className="h-[1.4rem] rounded-t-[0.8rem] bg-gray-500" />
                        <div className=" relative aspect-[33/40] rounded-b-[0.9rem] overflow-y-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                           <img src={trader} alt="trader" className="w-full h-full object-cover" width={1024} height={490} />
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
