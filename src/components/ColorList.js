import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorElements = colors.map((color)=>{
    return <ColorItem key={color} style={{color:color}}>{color}</ColorItem>
  });
  return (
    <div>
    <h1>Top 5 CSS Colors</h1>
    <ol>
      {/* display the array of <li> elements here! */}
      {colorElements}
    </ol>
  </div>
  )

  // return (
  //   <div>
  //     <h1>Top 5 CSS Colors</h1>
  //     <ol>
  //       <li style={{ color: colors[0] }}>{colors[0]}</li>
  //       <li style={{ color: colors[1] }}>{colors[1]}</li>
  //       <li style={{ color: colors[2] }}>{colors[2]}</li>
  //       <li style={{ color: colors[3] }}>{colors[3]}</li>
  //       <li style={{ color: colors[4] }}>{colors[4]}</li>
  //     </ol>
  //   </div>
  // );
}

export default ColorList;
