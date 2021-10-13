import React from "react";

// Components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
    return (
        <>
           <div>
               <h2 className="bg-white top-0 w-full px-3 py-1 z-10 sticky text-xl font-semibold">
                   { props.title }
                </h2>
               <div className="flex flex-col gap-3">
               {
                   props.items.map((item) => (
                    <FoodItem {...item } />
                   ))
               }
               </div>
          </div>
  
        </>
    );
};

export default FoodList;