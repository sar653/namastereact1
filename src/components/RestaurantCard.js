import { CDN_url } from "../utils/contants";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo,
    } = resData?.info;
    return (
      <div className="m-4 p-4 w-[200px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
       {/* // <div className="img-container"> */}
          <img
            className="rounded-lg"
            alt="res-logo"
            src={
              CDN_url +
              cloudinaryImageId
            }
          />
       {/* // </div> */}
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCard