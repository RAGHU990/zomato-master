import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
 
// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import TabContainer from "../Components/restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";
const RestaurantLayout = (props) => {
  return (
    <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 ">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
          ]}
        />
        <RestaurantInfo
          name="Madurai Xpress"
          restaurantRating="3.5"
          deliveryRating="3.2"
          cuisine="North Indian, Fast Food, Chinese, Street Food"
          address="P.P.Chavadi,Madurai"
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        { props.children }
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;