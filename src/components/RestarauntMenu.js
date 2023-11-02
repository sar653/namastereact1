
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";

const RestarauntMenu = () => {
  
const {resId}=useParams()
  
const resInfo =useRestaurantMenu(resId)

  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessages } =  resInfo?.cards[0]?.card?.card?.info;

 const { itemCards } =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 
   console.log("resInfo",resInfo);
   console.log("itemCards",itemCards);
   console.log("what inside",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  console.log("categories",categories)
  
   return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p  className="font-bold text-lg">{cuisines.join(", ")} {costForTwoMessages}</p>
      {/* <ul>
        {itemCards.map((item=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price   ||  item.card.info.defaultPrice}</li>))}
      </ul> */}
     { categories.map((category)=><RestaurantCategory data={category?.card?.card}/>)}
    </div>
  );
};

export default RestarauntMenu;
