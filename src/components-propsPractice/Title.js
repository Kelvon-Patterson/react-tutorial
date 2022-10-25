//import react
import React from "react";

//create function component and set props as the argument
function Title(props) {
  return (
    <div>
      <h3>Title:</h3>
      <h1 className="App-title">{props.appTitle}></h1>
    </div>
  );
}

export default Title;
