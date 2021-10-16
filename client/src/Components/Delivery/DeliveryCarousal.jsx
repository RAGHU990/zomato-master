import React from 'react';
import Slider from "react-slick"

//components
import DelivertCatagory from './DelivertCatagory';
import { NextArrow, PrevArrow } from '../CarousalArrow';


const DeliveryCarousal = () => {

    const categories = [{
      [{
      
        image:"https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
        title:"pizaa",
      },
      {
        image:"https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
        title:"pizaa",
      },
      {
        image:"https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
        title:"pizaa",
      },
      {
        image:"https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
        title:"pizaa",
      },{
        image:"https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
        title:"pizaa",
      },{
        image:"https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
        title:"pizaa",
      },{
        image:"https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
        title:"pizaa",
      },
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <h1 className="text-xl mb-4 font-semibold">
                Inspiration for your first order
            </h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                {
                    categories.map((food) => <DelivertCatagory {...food} />)
                }
                
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                {
                    categories.map((food) => <DelivertCatagory {...food} />)
                }
                </Slider>
            </div>
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">Dine-Out Restaurant in Kalavasal</h1> 
        </>
    );
}

export default DeliveryCarousal;
