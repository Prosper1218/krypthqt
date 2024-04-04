import {MouseParallax} from "react-just-parallax";
import sphere from "../../../public/sphere.png";
import {SphereBackgroundCircles1} from "./Header";

const Sphere = () => {
   const theme = "dark";
   return (
      <div className="py-12 lg:py-16 relative ">
         <img src={sphere} alt="sphere" className="max-w-[8rem] h-auto m-auto z-20 sphere p-1" />
         <div className="hidden lg:block"></div>
         <p className="grotesk py-2 text-xs text-center font-bold tracking-wider text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] uppercase">
            [&nbsp; Krypt HQ &nbsp;]
         </p>
         <p className={`px-4 lg:mb-4 text-sm ${theme === "light" ? "text-[#121212]" : "text-[#cccccc]"} md:text-sm text-center sora`}>
            You've discovered the ultimate destination for all things Web3.<br />
         </p>
      </div>
   );
};

export default Sphere;
