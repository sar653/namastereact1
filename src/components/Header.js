import { useState } from "react";
import { LOGO_url } from "../utils/contants";
import { Link } from "react-router-dom";


const Header = () => {
  const[btnNameReact,setBtnNameReact]=useState("LOGIN")
    return (
      <div className="header">
        <div className="logocontainer">
          <img
            className="logo"
            src={LOGO_url}
            alt="food"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to ="/" >home</Link></li>
            <li><Link to ="/Aboutus" >aboutus</Link></li>
            <li><Link to ="Contactus" >contactus</Link></li>
            <li>cart</li>
            <button className="login" onClick={()=>{btnNameReact==="LOGIN" ?setBtnNameReact("Logout"):setBtnNameReact("LOGIN")}}> {btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header
  