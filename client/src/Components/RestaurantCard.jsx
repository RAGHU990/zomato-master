import React from 'react'
import {AiFillStar} from 'react-icons/ai';

const RestaurantCard = () => {
    return (
        <>
            <div className="bg-white p-2 mb-20 w-full rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3">
                <div className="w-full lg:h-64 h-56 relative">
                <div className="absolute w-full bottom-4 flex items-end justify-between">
                    <div className=" flex flex-col gap-2 items-start">
                        <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
                         <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹80 OFF</span>
                    </div>
                          <span className="bg-white bg-opacity- p-1 rounded mr-2">42 min</span>
                 </div>
                   
                    <img src="https://b.zmtcdn.com/data/pictures/chains/3/18694293/a3f876979c7b1a123ff8d0548d774cb1_featured_v2.jpg"
                     alt="food" 
                     className="w-full h-full rounded-2xl"/>
                </div>
                <div className="flex my-2 flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-medium">Domino's Pizza</h4>
                    <span className="bg-green-800 text-white text-sm flex items-center bg-opacity- p-1 rounded ">
                        4.1 <AiFillStar /> 
                    </span>
                </div>
                <div  className="flex items-center justify-between text-gray-500">
                    <p>Pizza, Fast Food, Desserts, Beverages</p>
                    <p> ₹350</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default RestaurantCard;
