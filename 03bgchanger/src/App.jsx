import { useState } from "react";
import "./App.css";
import ColorButtons from "./components/ColorButtons";

function App() {
  const collors = [
    "aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "orange",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ];


  
  return (
    <>
     <ColorButtons colors= {collors}/>
    </>
  );
}

export default App;
