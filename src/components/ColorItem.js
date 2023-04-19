import React from 'react'

 function ColorItem(props) {
  return (
    <>
     <li style={{ color: props.color }}>{props.color}</li>;
     <div>ColorItem</div>
     </> 
  )
}
export default ColorItem;
