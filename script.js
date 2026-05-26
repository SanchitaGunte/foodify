import React from "react";
import ReactDOM from "react-dom/client"



const container = React.createElement("div", { id: "heading" }, "Hello EveryOne !!!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
