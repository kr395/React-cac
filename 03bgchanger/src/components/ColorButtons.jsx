import React from "react";

function ColorButtons({ colors }) {
  return (
    <>
      {colors.map((colorName, index) => {
        return (
          <button
            onClick={()=>{
                console.log();
  
            }}
            className="text-white text-lg m-2 p-2 rounded-md"
            key={index}
            style={{ backgroundColor: colorName }}
          >
            {colorName}
            
          </button>
        );
      })}
    </>
  );
}

export default ColorButtons;
