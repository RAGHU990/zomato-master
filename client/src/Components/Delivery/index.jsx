import React, {useState} from 'react'


//components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {

  const [restaurantList, setRestaurantList] =useState([
    {
      _id: "123456",
      photos: ["https://b.zmtcdn.com/data/reviews_photos/35a/75dae7b7e28a84a0f0335712bc90635a_1618478292.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    ],
    name:"Classic Rider Cafe",
    cuisine:["Lebanese, Fast Food, BBQ, Beverages"],
    averageCost: 100,
    isPro: true,
    isOff: 80,
    duarationOfdelivery: 47,
    restaurantReviewValue: 4.1,
    },
    {
      _id: "123456",
      photos: ["https://b.zmtcdn.com/data/reviews_photos/35a/75dae7b7e28a84a0f0335712bc90635a_1618478292.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    ],
    name:"Classic Rider Cafe",
    cuisine:["Lebanese, Fast Food, BBQ, Beverages"],
    averageCost: 100,
    isPro: true,
    isOff: 80,
    duarationOfdelivery: 47,
    restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-2",
      photos: ["https://b.zmtcdn.com/data/pictures/7/18695047/31925247a0141db017dbfa5d780c3cb5.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    ],
    name:"Deen Biriyani Stall",
    cuisine:["South Indian, Biryani"],
    averageCost: 100,
    isPro: true,
    isOff: 80,
    duarationOfdelivery: 47,
    restaurantReviewValue: 4.1,
    },
  ]);
 
    return (
        <>
          <DeliveryCarousal />  
        {/*  <Brand /> */}
        <div className="flex justify-between flex-wrap">
        {
                restaurantList.map((restaurant) =>(
                    <RestaurantCard { ...restaurant } key={ restaurant._id }/>
                ))
            }
        </div>
        </>
    );
};

export default Delivery;
