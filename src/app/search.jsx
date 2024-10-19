import React, { useState } from "react";

export default function Search() {
    const [text, setText] = useState("");

    const handleText = (event) => {
        console.log(event);
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleText} />
        </div>
    );
}
