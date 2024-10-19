import React, { useState } from "react";


const Counter = () => {

    const [num, setNum] = useState(1);


    const Click = () => {
        setNum(num + 1);
    };

    const Click2 = () => {
        setNum(num - 1);
    };


    return (
        <div>
            <h1>{num}</h1>
            <button onClick={Click}>+</button>
            <button onClick={Click2}>-</button>
        </div>
    );
};

export default Counter;

