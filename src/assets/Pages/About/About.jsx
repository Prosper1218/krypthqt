import {ArrowRightIcon} from "@radix-ui/react-icons";
import {Link} from "react-router-dom";
import TheTeam from "../../components/TheTeam";
import {BackgroundCircles2} from "../../components/Header";

const page = () => {
   return (
      <div className="min-h-[100vh] h-auto mt-28 relative bg-transparent">
         <BackgroundCircles2 />

         <p className="sora text-white text-center pt-4 pb-1">About Us</p>
         <h1 className=" text-4xl font-extrabold leading-none tracking-normal text-white md:text-5xl md:tracking-tight overflow-hidden pb-4 text-center">
            <span className=" text-transparent text-center bg-clip-text leading-12 bg-gradient-to-r from-[#FF4A00] to-[#ef9e2c] lg:inline px-4">
               our vision is to become trusted <br /> partners for business worldwide
            </span>
         </h1>
         <div className="flex justify-center z-40">
            <p className= "text-xs md:text-[100%] text-white sora px-4 max-w-[50rem] text-center margin-auto">
               we aim to drive transformative growth through innovative marketing strategies, cutting-edge technology, and unparalleled customer experiences. We envision a future
               where brands thrive, communities flourish, and connections are made meaningful
            </p>
         </div>

         {/* <h1 className=" text-4xl font-extrabold leading-none tracking-normal text-white md:text-5xl md:tracking-tight overflow-hidden py-6 text-center">
            <span className="py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#FF4A00] to-[#ef9e2c] lg:inline">About us</span>
            <BackgroundCircles2 />
         </h1>

         <div className="flex justify-center flex-col items-center">
            <p className="text-white sora md:w-[35rem] text-center px-4 text-xs">
               CryptoHeadquarters is a Digital agencay founded 2022, that create User Centred Product that help her client to evolve ,our core idealogy is Perfection , our goal is
               to make usefull and easy to use products And help people to grow their busineses!
            </p>

            <Link href="/#services">
               <button type="button " className="flex items-center justify-center cursor-pointer gap-1 mt-3">
                  <span className="font-semibold text-[#FF4A00] capitalize text-xs sora"> check our services</span> <ArrowRightIcon className="height-4 text-white " />
               </button>
            </Link>
         </div>

         <section className="">
            <TheTeam />
         </section> */}
      </div>
   );
};

export default page;
