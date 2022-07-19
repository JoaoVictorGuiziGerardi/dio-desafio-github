import React from 'react';

function Botao({ onClick, children}) {
    return(
        <button onClick={onClick}>{children}</button>
    )
}

export default Botao;