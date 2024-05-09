import bitcoin from "/public/images-coins/bitcoin.svg";
import ethereum from "/public/images-coins/ethereum.svg";
import binance from "/public/images-coins/binance.svg";
import tether from "/public/images-coins/tether.svg";
import dogecoin from "/public/images-coins/dogecoin.svg";
import litecoin from "/public/images-coins/litecoin.svg";
import codeicon from "/public/codeicon.png";
import filecoin from "/public/images-coins/filecoin.svg";
import "../../index.css";
import "../../App.css";
import arrow1 from "/public/arrowVector1.png";
import arrow2 from "/public/arrowVector2.png";
// import {MouseParallax, ScrollParallax} from "react-just-parallax";

export const Rings = () => {
   return (
      <div className="absolute top-1/2 left-1/2 w-[59.375rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2  bg-transparent">
         <div className="absolute top-1/2 left-1/2 w-[46.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 bg-transparent "></div>
         <div className="absolute top-1/2 left-1/2 w-[31.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 bg-transparent"></div>
         <div className="absolute top-1/2 left-1/2 w-[18.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 bg-transparent "></div>
         <div className="absolute top-1/2 left-1/2 w-[8.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 bg-transparent "></div>
      </div>
   );
};

export const SideLines = () => {
   return (
      <>
         <div className="absolute top-0 md:left-14 w-[1px] h-full bg-gray-600/40 hidden xl:block"></div>
         <div className="absolute top-0 md:right-12 w-[1px] h-full bg-gray-600/40 hidden xl:block"></div>
      </>
   );
};

export const BackgroundCircles = () => {
   return (
      <>
         <div className="absolute top-[8rem] left-16 w-5 h-5  rounded-full breathe jump">
            <img src={bitcoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[12.6rem] right-16 w-5 h-5 rounded-full breathe">
            <img src={ethereum} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[12.6rem] right-40 w-4 h-4 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full breathe">
            <img src={dogecoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[26.8rem] left-4 w-6 h-6  rounded-full hidden sm:block breathe">
            <img src={tether} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[30.8rem] left-60 md:left-80 w-6 h-6   rounded-full jump ">
            <img src={binance} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[36rem] left-[10rem] md:left-[40rem] w-10 h-10   rounded-full p-1 breathe">
            <img src={codeicon} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[22rem] md:top-[29rem] left-[15rem] md:left-[60rem] w-8 h-8   rounded-full overflow-hidden breathe">
            <img src={filecoin} alt="crptocurency-icon" />
         </div>
      </>
   );
};
export const BackgroundCircles2 = () => {
   return (
      <>
         <div className="absolute top-[5rem] left-[35rem]  w-4 h-4 rounded-full breathe">
            <img src={bitcoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[4rem] right-[22rem] w-5 h-5 rounded-full breathe">
            <img src={ethereum} alt="crptocurency-icon" />
         </div>

         <div className="absolute top-[15rem] left-[10rem] w-3 h-3  bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full hidden sm:block"></div>
         <div className="absolute top-[10rem] left-60 md:left-80 w-6 h-6   rounded-full ">
            <img src={binance} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[21rem] left-[20rem] w-8 h-8   rounded-full breathe ">
            <img src={litecoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[19rem] right-[10rem] w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full jump"></div>
         <div className="absolute top-[14rem] right-[16rem] w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full jump"></div>
         <div className="absolute top-[24rem] right-[20rem] w-2 h-2 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full jump"></div>
         <div className="absolute top-[22rem] right-[32rem] w-1 h-1 bg-gradient-to-b bg-gray-200/60 rounded-full jump"></div>
      </>
   );
};

export const BackgroundCircles3 = () => {
   return (
      <>
         <div className="absolute top-[8rem] left-16 w-5 h-5  rounded-full breathe jump">
            <img src={bitcoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[12.6rem] right-16 w-5 h-5 rounded-full breathe">
            <img src={ethereum} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[9.6rem] right-40 w-4 h-4 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full breathe">
            <img src={dogecoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[26.8rem] left-4 w-6 h-6  rounded-full hidden sm:block breathe">
            <img src={tether} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[30.8rem] left-60 md:left-80 w-6 h-6   rounded-full jump ">
            <img src={binance} alt="crptocurency-icon" />
         </div>
         <div className="absolute top-[32rem] left-[10rem] md:left-[40rem] w-10 h-10   rounded-full p-1 breathe">
            <img src={codeicon} alt="crptocurency-icon" />
         </div>
      </>
   );
};

export const SphereBackgroundCircles1 = () => {
   return (
      <>
         <div className="absolute w-5 h-5 left-[30rem]  rounded-full">
            <img src={bitcoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute w-5 h-5 rounded-full left-[28rem] top-[6.5rem]">
            <img src={ethereum} alt="crptocurency-icon" />
         </div>
         <div className="absolute w-4 h-4  rounded-full left-[32rem] top-[10rem]">
            <img src={dogecoin} alt="crptocurency-icon" />
         </div>
         <div className="absolute w-6 h-6  rounded-full left-[47rem] ">
            <img src={tether} alt="crptocurency-icon" />
         </div>
         <div className="absolute w-6 h-6   rounded-full left-[50rem] top-[7.4rem]">
            <img src={binance} alt="crptocurency-icon" />
         </div>
         <div className="absolute w-10 h-10   rounded-full p-1 left-[49rem] top-[11rem]">
            <img src={codeicon} alt="crptocurency-icon" />
         </div>
      </>
   );
};

export const Ham = () => {
   return (
      <>
         <label className="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
               <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
               ></path>
               <path className="line" d="M7 16 27 16"></path>
            </svg>
         </label>
      </>
   );
};

export const Arrow1 = ({width, height}) => {
   return (
      <>
         <img src={arrow1} alt="arrow" className={`hidden lg:block  absolute object-cover bottom-2 left-[10rem] xl:left-[13rem] ${width} ${height}`} />
      </>
   );
};

export const Arrow2 = ({width, height}) => {
   return (
      <>
         <img src={arrow2} alt="arrow" className={` hidden lg:block  absolute object-cover top-1 left-[24rem]  xl:left-[34rem] ${width} ${height}`} />
      </>
   );
};

export const Arrow3 = ({width, height}) => {
   return (
      <>
         <img src={arrow1} alt="arrow" className={`hidden lg:block absolute object-cover bottom-2 right-[10rem] xl:right-[13rem] ${width} ${height}`} />
      </>
   );
};
