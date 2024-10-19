import React, { useState } from "react";


const Traffic = () => {

    const [light, setLight] = useState("yellow");


    const yellow = () => {
        setLight("yellow");
    };

    const green = () => {
        setLight("green");
    };


    const red = () => {
        setLight("Red");
    };

    // const handlelight=(changedLight)=>{
    //     setLight(changedLight);
    // }


    return (
        <div>
            <h1>{light}</h1>
            <button onClick={yellow}>Yellow</button>
            <button onClick={green}>Green</button>
            <button onClick={red}>Red</button>
        </div>
    );
};

export default Traffic;


