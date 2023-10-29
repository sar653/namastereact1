import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";

const RestarauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.083696976863374&lng=80.19907616078854&restaurantId=" +resId+" &catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessages } =  resInfo?.cards[0]?.card?.card?.info;

 const { itemCards } =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log("resInfo",resInfo);
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
