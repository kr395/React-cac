import { useState } from "react";
function App() {
  let [counterValue, setCounterValue] = useState(0);
  // const increment = () => {
  //   setCounterValue(counterValue + 1);
  // };

  return (
    <>
      <h1>Hello JS I am Gopal</h1>
      <h2>Counter Value : {counterValue}</h2>
      <button
        onClick={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        Increment
      </button>{" "}
      <br />
      <button onClick={() => {
        if (counterValue >= 1) {
        setCounterValue(counterValue - 1);
        }
        }}>Decrement</button>
    </>
  );
}

export default App;
