
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestarauntMenu = () => {
  
  const {resId}=useParams()
  
const resInfo =useRestaurantMenu(resId)

  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessages } =  resInfo?.cards[0]?.card?.card?.info;

 const { itemCards } =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log("resInfo",resInfo);
   console.log("itemCards",itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} {costForTwoMessages}</p>
      <ul>
        {itemCards.map((item=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price   ||  item.card.info.defaultPrice}</li>))}
      </ul>
    </div>
  );
};

export default RestarauntMenu;
