import React from 'react';
import {FaUser} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {RiSearchLine} from "react-icons/ri";



const MobileNav = () => {
return (
    <div className=" flex items-center w-full justify-between lg:hidden">
        <div className="w-28" >
                   <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                     alt="zomato logo" 
                     className="w-full h-full "/> 
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full"> 
                    Use App 
                    </button>
                    <span className="border p-2 gap-3 border-gray-500 text-zomato-300 rounded-full">
                        <FaUser/>
                        </span>
                </div>
    </div>
);
};

const LargeNav = () => {
    return (
        <> 
        <div className=" hidden lg:inline  container px-20 mx-auto"> 
    <div className="hidden w-full lg:flex gap-4 items-center  justify-between ">
    <div className="w-28"  >
                   <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                     alt="zomato logo" 
                     className="w-full h-full  "/> 
                </div>
                <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
                    <div className="flex gap-2 items-center border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-400">
                            <HiLocationMarker />
                        </span>
                    <input type="text" placeholder = "Madurai" className="focus:outline-none" />
                    <IoMdArrowDropdown />
                    </div>

                    <div className="flex w-full items-center gap-2">
                        <RiSearchLine />
                        <input type="search" placeholder="Search for restaurant, cuisine or a dish"
                        className="w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex  ml-20 gap-4">
                    <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
                    <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
                </div>
    </div>
    </div>
    
        </>
    );
}



const Navbar = () => {
    return (
        <>
            <nav className="p-4 bg-white flex items-center w-full shadow-md">     
          <MobileNav />
          <LargeNav />
            </nav>
        </>
    )
}

export default Navbar;