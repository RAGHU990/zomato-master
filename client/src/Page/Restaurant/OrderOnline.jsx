import React from "react";
import {AiOutlineCompass} from "react-icons/ai";
import {IoTimeOutline} from "react-icons/io5";

// components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import Fooditem from "../../Components/restaurant/Order-Online/Fooditem";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full flex">
        <aside className="hidden md:flex flex-col gap-3 overflow-y-scroll  border-r h-screen border-gray-200 w-1/4"> 
        <MenuListContainer />
        <MenuListContainer />
        <MenuListContainer />


        </aside>
        <div className="w-full md:3/4">
          <h2 className="text-xl font-semibold">Order Online</h2>
          <h4 className="flex items-center gap-2 font-light text-gray-500"> 
            <AiOutlineCompass />  Live Track Your Order | <IoTimeOutline />
          </h4>
          <section>
            <Fooditem
             image= "https://b.zmtcdn.com/data/dish_photos/db1/a7ec0734459e3fb75c16e9df36419db1.jpg?fit=around|130:130&crop=130:130;*,*"
              price="280" 
              rating= {3} 
             description="A novel combination of our classic seeraga samba Biryani crowned with succulent chicken 65 chunks - Served With Boiled egg, Raita & Salna."
             tilte ="Thalappakatti Chicken 65 Biryani" />
          </section> 
           </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;     