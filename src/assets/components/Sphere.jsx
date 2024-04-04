import sphere from "../../../public/sphere.png";
import {SphereBackgroundCircles1} from "./Header";

const Sphere = () => {
   return (
      <div className="py-12 lg:py-16 relative ">
         <SphereBackgroundCircles1/>
         <img src={sphere} alt="sphere" className="max-w-[8rem] h-auto m-auto z-20 sphere" />
         <div className="hidden lg:block">
         </div>
         <p className="grotesk mb-4 py-4 text-xs text-center font-bold tracking-wider text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#fe6700] to-[#ef9e2c] uppercase">
            [&nbsp; Krypt HQ &nbsp;]
         </p>
      </div>
   );
};

export default Sphere;
