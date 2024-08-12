import React, { useState } from "react";

function ColorButtons({ colors }) {
   const [bgColor,setBgColor] = useState("green");
   
  return (
    <div className="w-full h-screen bg-green-100" style={{backgroundColor : bgColor}}>

      {colors.map((colorName, index) => {
        return (
          <button
            onClick={()=>{
                setBgColor(colorName);
  
            }}
            className="text-white text-lg m-2 p-2 rounded-md"
            key={index}
            style={{ backgroundColor: colorName }}
          >
            {colorName}
          </button>
        );
      })}
    </div>
  );
}

export default ColorButtons;
