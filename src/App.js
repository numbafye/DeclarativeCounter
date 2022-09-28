import React, { useState } from "react";

function App() {
  let [counter, changeCounter] = useState(1);
  //access changecounter through dev tools (global)
  window.changeCounter = changeCounter;
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
