import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./pages/Homepage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
