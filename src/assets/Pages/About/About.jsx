import {Link, useNavigate} from "react-router-dom";
import square from "/square.png";
import {motion} from "framer-motion";
import Section2 from "../../components/Section2";
import Section4 from "../../components/Section4";
import krypthqlogo from "/krypthqlogo.png";

const page = () => {
   const theme = "dark";
   const navigate = useNavigate();
   return (
      <div className="min-h-[100vh] h-auto mt-[5.8rem] relative bg-transparent">
         <div className="min-h-[45vh] h-[35vh] md:h-[65vh] xl:h-[70vh] bg-img-about relative flex flex-col justify-center items-center">
            <div className=" bg-[#0B1215]/60 absolute top-0 bottom-0 left-0 right-0" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
               <img src={square} alt="square" className=" w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] absolute right-12 bottom-7 sm:bottom-12 rotate " />
               <img src={square} alt="square" className=" w-[3rem] h-[3rem] sm:w-[4rem]  sm:h-[4rem] absolute right-12 bottom-7 sm:bottom-12 rotate rotate-90 " />
               <img src={square} alt="square" className="w-[4rem] h-[4rem] absolute left-9 top-9 rotate hidden sm:block" />
               <img src={square} alt="square" className="w-[4rem] h-[4rem] absolute left-9 top-9 rotate rotate-90  hidden sm:block" />
               {/* content */}
               <h1 className=" text-white text-center pt-4 pb-1 text-5xl sora font-extrabold overflow-y-hidden">About Us</h1>

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
         <br />
         <Section2 img={krypthqlogo} header2={"About Krypthq"} />
         <br />

         <br />
         <Section4 img={krypthqlogo} header1={"The founders of"} header2={"Krypthq"} />
         <br />
         <br />
      </div>
   );
};

export default page;
