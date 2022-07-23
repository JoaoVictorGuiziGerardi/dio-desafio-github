import React from "react";
import { useState } from "react";

function SmartCounter() {
    const [quantidade, setQuantidade] = useState(1);
    
    return(
        <div>
            <h1 id="counter-box">{quantidade}</h1>
            <button onClick={() => setQuantidade(quantidade + 1)}>Aumentar</button>
        </div>
        
    )
}

export default SmartCounter;