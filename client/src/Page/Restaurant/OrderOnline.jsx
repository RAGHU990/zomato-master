import React from "react";
import {AiOutlineCompass} from "react-icons/ai";
import {IoTimeOutline} from "react-icons/io5";

// components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import Fooditem from "../../Components/restaurant/Order-Online/FoodItem";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import FoodList from "../../Components/restaurant/Order-Online/FoodList";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full flex">
        <aside className="hidden md:flex flex-col gap-3 overflow-y-scroll  border-r h-screen border-gray-200 w-1/4"> 
        <MenuListContainer />
        <MenuListContainer />
        <MenuListContainer />


        </aside>
        <div className="w-full px-3 h-screen overflow-y-scroll md:3/4">
         <div className="pl-3 mb-4">
         <h2 className="text-xl font-semibold">Order Online</h2>
          <h4 className="flex items-center gap-2 font-light text-gray-500"> 
            <AiOutlineCompass />  Live Track Your Order | <IoTimeOutline />
          </h4>
         </div>

          <section className="flex flex-col gap-3 md:gap-5">
                <FoodList
                 title="Recommended"
                 items={[
                  {
                    price:"280" ,
                    rating: 3 ,
                    description:"A novel combination of our classic seeraga samba Biryani crowned with succulent chicken 65 chunks - Served With Boiled egg, Raita & Salna.",
                    title :"Thalappakatti Chicken 65 Biryani" ,
                    image:"https://b.zmtcdn.com/data/dish_photos/db1/a7ec0734459e3fb75c16e9df36419db1.jpg"}
                  ]
                }
                   />
                   <FoodList
                 title="Briyani"
                 items={[
                  {
                    price:"280" ,
                    rating: 3 ,
                    description:"A novel combination of our classic seeraga samba Biryani crowned with succulent chicken 65 chunks - Served With Boiled egg, Raita & Salna.",
                    title :"Thalappakatti Chicken 65 Biryani" ,
                    image:"https://b.zmtcdn.com/data/dish_photos/db1/a7ec0734459e3fb75c16e9df36419db1.jpg"}
                  ]
                }
                   />
            </section>
            
            </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;     