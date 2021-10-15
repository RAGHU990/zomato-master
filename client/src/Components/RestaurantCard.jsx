import React, { useEffect, useState } from "react";
import {AiFillStar} from 'react-icons/ai';
import { getImage } from "../Redux/Reducer/Image/Image.action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    console.log(props.whereIsthisres);
    const [image, setImage] = useState({
        images: [],
      });
      const dispatch = useDispatch();
    
      useEffect(() => {
        props.photos &&
          dispatch(getImage(props.photos)).then((data) => 
          setImage(data.payload.image)
          );
      }, [props.photos]);
    
    return (
        <Link to={`/restaurant/${props._id}`} className="w-full">
            <div className="bg-white p-4 mb-4 w-full rounded-2xl transition duration-700
                           ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3">

                <div className="w-full h-56 lg:h-64 relative">
                <div className="absolute w-full bottom-4 flex items-end justify-between">

                    <div className=" flex flex-col gap-2 items-start">
                        {
                        props.isPro && (
                         <span 
                        className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                            Pro extra 10% off
                        </span>

                         )}
                         {
                             props.isOff && (
                                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                ₹{`${props.isOff}`} OFF
                                </span>
                             )
                         }
                        
                    </div>
                          <span className="bg-white bg-opacity-75 p-1 rounded mr-2">
                              {props.durationOfdelivery} min
                              </span>
                 </div>
                   
                    <img 
                       src={image.images.length && image.images[0].location}
                     alt="food" 
                     className="w-full h-full rounded-2xl"/>
                </div>
                <div className="flex my-2 flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-medium">{props.name}</h4>
                    <span className="bg-green-800 text-white text-sm flex items-center bg-opacity- p-1 rounded ">
                       {props.restaurantReviewValue} <AiFillStar /> 
                    </span>
                </div>
                <div  className="flex items-center justify-between text-gray-500">
                    <p>{props.cuisine.join(", ")}</p>
                    <p> ₹ {props.averageCost} for one </p>
                </div>
            </div>
            </div>
        </Link>
    )
}

export default RestaurantCard;
