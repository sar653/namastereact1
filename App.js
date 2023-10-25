import React from "react";
import ReactDOM from "react-dom/client";

//const heading= React.createElement(
//  "h1",{id:"heading"
//},"nam6aste react")

const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>aboutus</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { recipe,resName}=props
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr"/>
      <h3>{props.recipe}</h3>
      <h4>{props.resName}</h4>
      <h4>4.4stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
        <RestaurantCard resName="baghdad" recipe="briyani"/>
        <RestaurantCard resName="hyderabad" recipe="briyani"/>
        <RestaurantCard />
        
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />

      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
//<div>
//<div>
//  <h1>im from h1 tag</h1>
// <h2>im from h2 tag</h2>
//   </div> <div>
//<h1>im from h1 tag</h1>
//<h2>im from h2 tag
//</h2>
//</div>
//</div>

/*const parent=React.createElement
("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"im from h1 tag"),
React.createElement("h2",{},"im from h2 tag")]
    ),
    
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"im from h1 tag"),
React.createElement("h2",{},"im from h2 tag")]
    )
)
console.log(parent)

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)*/

//const heading=React.createElement("h1",{id:"heading"},"hello world from react");
//const root= ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)
//console.log(heading)
//REACT element is js object
//props are children and attributes we pass
