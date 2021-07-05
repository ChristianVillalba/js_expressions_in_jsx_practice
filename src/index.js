//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const myName = "Christian Villalba";
const currentYear = new Date().getFullYear();
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
ReactDOM.render(
  <div>
    <p>Created by: {myName} </p>
    <p>Copyright: {currentYear}</p>
  </div>,
  document.getElementById("root")
);

//E.g.
//Created by Angela Yu.
//Copyright 2019.
