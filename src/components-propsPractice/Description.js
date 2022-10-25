//import react
import React from "react";

function Description(props){
    return (
        <div>
            <h3>Description:</h3>
            <p{props.children}></p>
        </div>
    )
}

export default Description