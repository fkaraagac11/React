import React from "react";
import ReactDOM from "react-dom";

//JSX

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
    </div>,
    document.getElementById("root")
);

var Element = document.createElement("p");
Element.innerHTML = "This is a paragraph";
