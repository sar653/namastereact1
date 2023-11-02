import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import Aboutus from "./components/Aboutus";
import Contactus from "./components/contactus";
import Error from "./components/Error";
import RestarauntMenu from "./components/RestarauntMenu";
//import Grocery from "./components/Grocery";

//const heading= React.createElement(
//  "h1",{id:"heading"
//},"nam6aste react")

const Grocery = lazy(() => import("./components/Grocery"));
const Aboutus = lazy(() => import("./components/Aboutus"));

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout></Applayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/Aboutus",
        element: (
          <Suspense fallback={<h1> loading...</h1>}>
            <Aboutus />
          </Suspense>
        ),
      },
      {
        path: "/Contactus",
        element: <Contactus></Contactus>,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1> loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
        //element:<Grocery></Grocery>
      },
      {
        path: "/restaurants/:resId",
        element: <RestarauntMenu></RestarauntMenu>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
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
