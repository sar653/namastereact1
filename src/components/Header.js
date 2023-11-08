import { useState } from "react";
import { LOGO_url } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LOGIN");

  const onlineStatus = useOnlineStatus();

  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-150" src={LOGO_url} alt="food" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>
            
            onlineStatus:
            {onlineStatus ? (
            <span>🟢</span>  
              
            ) : (<span>🔴</span>
            )}
          </li>
          <li className="px-4">
            <Link to="/">home</Link>
          </li>
          <li className="px-4">
            <Link to="/Aboutus">aboutus</Link>
          </li>
          <li className="px-4">
            <Link to="Contactus">contactus</Link>
          </li>
          <li className="px-4">
            <Link to="Grocery">Grocery</Link>
          </li>
          <li className="px-4"> <Link to="Cart">cart ({cartItems.length}items )</Link></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "LOGIN"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("LOGIN");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
