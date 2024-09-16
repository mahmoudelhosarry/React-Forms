import React, { useState } from "react";

function App() {
  const [header, setheader] = useState("");
  const [name, setname] = useState("");
  function write(event) {
    setname(event.target.value);
  }
  function change() {
    setheader(name);
  }
  return (
    <div className="container">
      <h1>Hello {header} </h1>
      <input onChange={write} type="text" placeholder="What's your name?" />
      <button onClick={change}>Submit</button>
    </div>
  );
}

export default App;
