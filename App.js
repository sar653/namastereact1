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

const parent=React.createElement
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

root.render(parent)




//const heading=React.createElement("h1",{id:"heading"},"hello world from react");
//const root= ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)
//console.log(heading)
//REACT element is js object
//props are children and attributes we pass