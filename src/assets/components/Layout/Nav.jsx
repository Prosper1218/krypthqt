import {Cross1Icon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import logo from "../../../../public/krypthqlogo.png";
import logo2 from "../../../../public/krypthqlogoLT.png";
import {Link, NavLink} from "react-router-dom";
import {BackgroundCircles2} from "../Header";
import {Links} from "../../../Data";
import "../../../App.css";
import cross from "/public/cross.png";
import menu from "/public/menu.png";
const Nav = () => {
   const [Navactive, setNavactive] = useState(false);
   // const pathname = usePathname();
   // const router = useRouter();

   const handlebtnclick = () => {
      if (Navactive === true) {
         setNavactive(false);
      } else {
         setNavactive(true);
      }
   };
   const handlelinkclick = () => {
      if (Navactive === false) {
         return;
      } else {
         setNavactive(false);
      }
   };
   const handlecontactus = () => {
      // router.push("/ContactUs");
   };
   const theme = "dark";

   return (
      <>
         <nav
            className={`flex justify-between h-[5.8rem] w-[100%] items-center px-4 md:px-8 xl:px-12 overflow-y-hidden fixed  top-0 z-20 md:border-b border-1 border-gray-600/40 ${
               theme === "light" ? "bg-white" : "bg-[#121212]"
            }`}
         >
            <Link href="/" className="">
               <img src={theme === "light" ? logo2 : logo} alt="logo" className="md:w-[8rem] md:h-[5.4rem] w-[6rem] h-[4rem]" />
            </Link>
            <section
               className={`md:flex justify-center gap-6 md:gap-8 uppercase md:items-center md:text-xs left-0 right-0 bottom-0 md:bg-transparent md:w-auto fixed md:static top-[5.5rem] md:h-screen flex-col md:flex-row font-semibold flex items-start pl-8 transition z-30 nav transform md:translate-x-0 text-n-1  ${
                  Navactive ? "translate-x-0 opacity-100" : "translate-x-[-50rem]"
               }
               ${theme === "light" ? "text-[#121212] bg-white" : "text-[#cccccc] bg-[#121212]"}
               `}
               onClick={handlelinkclick}
            >
               {Navactive ? <BackgroundCircles2 /> : ""}
               {Links.map((item) => {
                  return (
                     <NavLink id="link" key={item.id} to={item.to} className={({isActive, isPending}) => (isActive ? "text-[#fe6700]" : null)}>
                        {item.name}
                     </NavLink>
                  );
               })}

               <button
                  type="button"
                  className={`border-[#fe6700] rounded-lg border-solid border-2 px-5 py-3 uppercase text-[80%] tracking-wide  ${
                     theme === "light" ? "text-[#121212]" : "text-[#cccccc]"
                  }`}
                  onClick={handlecontactus}
               >
                  contact us
               </button>
            </section>
            <button type="button" className={`flex md:hidden ham border-[#fe6700] border-2 border-solid rounded-md p-2 z-auto`} onClick={handlebtnclick}>
               {Navactive ? <img src={cross} className="text-[#fe6700] scale-110 w-4 h-4 ham-style" /> : <img src={menu} className="text-[#fe6700] scale-150 w-4 h-4 ham-style" />}
            </button>
         </nav>
      </>
   );
};

export default Nav;
