import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();
var color;
var text;

if (currentTime < 12) {
  text = "Good Morning";
  color = { color: "red" };
} else if (currentTime < 18) {
  text = "Good Afternoon";
  color = { color: "green" };
} else {
  text = "Good Evening";
  color = { color: "blue" };
}

ReactDOM.render(
  <h1 className="heading" style={color}>
    {text}
  </h1>,
  document.getElementById("root")
);
