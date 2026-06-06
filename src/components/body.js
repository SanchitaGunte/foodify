import RestaurantCard from "./restaurantcard";
import { restlist } from "../utils/constants";
import { useState } from "react"; 
const Body = () => {
    const [listOfRestaurants, setlistofrestaurant] = useState(restlist);
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setlistofrestaurant(filteredList);
          }}
        >
            Top Rated Restaurants 
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
            return(
                <RestaurantCard key ={restaurant.info.id} restData={restaurant} />
            );
        })}
      </div>
      {restlist.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        );
      })}
    </div>
  );
};

export default Body;
