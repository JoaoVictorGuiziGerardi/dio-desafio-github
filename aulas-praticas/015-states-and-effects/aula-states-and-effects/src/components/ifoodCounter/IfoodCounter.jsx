import React, { useState, useEffect } from 'react';
import './IfoodCounter.css';

const IfoodCounter = () => {
    const [value, setValue] = useState(0);
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active');

    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2 * value;
    }, [value]);

    useEffect(() => {
        console.log(`Estilo do botão atual: ${buttonStyle}`)
    }, [buttonStyle]);

    const decrescer = () => {

        if (value <= 1) {
            setButtonStyle('counter-button-minus-desactive');
        }

        if (value > 0) {
            setValue(value - 1);
        }
    }

    const incrementar = () => {

        if (value == 0){
            setButtonStyle('counter-button-minus-active');
        }

        setValue(value + 1);
    }

    return (
        <div className="countex-wrapper">
            <button onClick={decrescer} className={buttonStyle}>-</button>
            <p>{value}</p>
            <button onClick={incrementar} className='counter-button-plus-active'>+</button>

            <button>R$ <span id="moeda"></span></button>
        </div>
    )
}

export default IfoodCounter;