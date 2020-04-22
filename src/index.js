import React from "react";
import ReactDOM from "react-dom";
import { string } from "prop-types";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

var today = new Date();
var hr = today.getHours();
var min = today.getMinutes();
var time = hr + ":" + min;
console.log(time);

if (hr < 12) {
  var greet = "Good morning";
  var edit = { color: "red" };
} else if (hr >= 12 && hr < 18) {
  greet = "Good afternoon";
  edit = { color: "green" };
} else if (hr >= 18 && hr < 24) {
  greet = "Good Evening";
  edit = { color: "blue" };
}

ReactDOM.render(
  <h1 style={edit} className="heading">
    {greet}
  </h1>,
  document.getElementById("root")
);
