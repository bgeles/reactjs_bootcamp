import React from "react";
import ReactDOM from "react-dom";

const fName = "Bruno";
const lName = "Eles";
const number = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
