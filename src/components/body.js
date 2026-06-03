import RestaurantCard from "./restaurantcard";
import { restlist } from "../utils/constants";
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container"></div>
      {restlist.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        );
      })}
    </div>
  );
};

export default Body;
