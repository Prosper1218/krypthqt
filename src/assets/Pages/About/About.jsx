import {ArrowRightIcon} from "@radix-ui/react-icons";
import {Link} from "react-router-dom";
import TheTeam from "../../components/TheTeam";
import {BackgroundCircles2} from "../../components/Header";

const page = () => {
   return (
      <div className="min-h-[100vh] h-auto mt-28 relative bg-transparent">
         <BackgroundCircles2 />
         <p className="sora text-white text-center pt-4 pb-1">About Us</p>
         <div className="flex justify-center">
            {" "}
            <h1 className=" text-4xl font-extrabold leading-none tracking-normal text-white md:text-5xl md:tracking-tight overflow-hidden pb-4 max-w-[50rem] text-center">
               <span className=" text-transparent text-center  bg-clip-text leading-12 bg-gradient-to-r from-[#FF4A00] to-[#ef9e2c] lg:inline px-4">
                  our vision is to become trusted partners for businesses worldwide
               </span>
            </h1>
         </div>

         <div className="flex justify-center overflow-y-hidden h-auto">
            <p className="text-xs overflow-y-hidden md:text-[100%] text-white sora px-4 max-w-[50rem] text-center ">
               we aim to drive transformative growth through innovative marketing strategies, cutting-edge technology, and unparalleled customer experiences. We envision a future
               where brands thrive, communities flourish, and connections are made meaningful
            </p>
         </div>

         <section className="flex justify-center mt-6 w-full">
            <div className="grid grid-cols-1 justify-center border md:grid-cols-2 max-w-[80%] w-[90%]">
               <div className="border">
                  <p className="grotesk text-xs">
                     HRLink was established in 2009 as a U.S.-based software development & consulting company with development centers in Vietnam. <br />
                     Besides providing outsourcing services, HRLink has built and successfully launched its own software companies. The most notable companies with millions of
                     users worldwide. <br />
                     <br />
                      HRLink is reliable, secure, and backed by a team of HR experts with a proven track record of developing high-quality technology solutions. <br />
                      <br />
                     With the growing size of many startups and SME companies and the increasing complexity of HR regulations and employee expectations, manual HR processes can
                     become time-consuming, error-prone, and difficult to manage. HR management software provides a centralized platform for storing and automating HR processes to
                     offer more free time for HR staff.
                  </p>
               </div>
               <div className="border">hi</div>
            </div>
         </section>
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
