import {Card_URL, card_URL} from "../utils/mockdata";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    cuisines,
    costForTwo,
    avgRating,
    sla
  } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={ Card_URL +
              cloudinaryImageId 
        }
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      <h6>{locality}</h6>
      <h6>{areaName}</h6>
      <h6>{cuisines.join(",")}</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} Min</h6>
      <h6>{avgRating} stars</h6>
    </div>
  );
};

export default RestaurantCard ;