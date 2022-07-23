import React from "react";

function Counter() {
    let quantidade = 10;

    const aumentar = () => {
        quantidade = quantidade + 1;
        document.getElementById("counter-box").innerHTML = quantidade;
    }

    return(
        <div>
            <h1 id="counter-box">{quantidade}</h1>
            <button onClick={aumentar}>Aumentar</button>
        </div>
        
    )
}

export default Counter;