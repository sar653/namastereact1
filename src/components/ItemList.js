import { CDN_url } from "../utils/contants";


const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-grey-200 border-b-2 text-left"
        >
            <img src={CDN_url + item.card.info.imageId} className="w-14"/>
          <div className="p-2">
            <span>{item.card.info.name}</span>
            <span>
              -₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
