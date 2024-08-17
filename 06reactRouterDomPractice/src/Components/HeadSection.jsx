import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeadSection() {
  return (
    <header className=" flex justify-evenly items-center  w-full h-[60px] text-white bg-slate-700 text-2xl text-center">
      <Link className="" to="/">
        <img className=" w-20 b" src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?t=st=1723902279~exp=1723905879~hmac=160f27ef7e8667e9ad0372928fd86762fc1989b12fcb485195b4c221115b6007&w=1060"></img>
      </Link>
      <nav className=" w-1/4 h-full flex">
       <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
         <li>
        <NavLink className={({isActive})=>`${isActive? " text-red-600":" text-gray-300"}`}  to="/">
          Home
        </NavLink>

         </li>
         <li>
        <NavLink className={({isActive})=>`${isActive? " text-red-600":" text-gray-300"}`}  to="aboutUs">
          About
        </NavLink>

         </li>
         <li>
        <NavLink className={({isActive})=>`${isActive? " text-red-600":" text-gray-300"}`}  to="contactUs">
          Contact Us
        </NavLink>

         </li>

       </ul>
      </nav>
    

    </header>
  );
}

export default HeadSection;
