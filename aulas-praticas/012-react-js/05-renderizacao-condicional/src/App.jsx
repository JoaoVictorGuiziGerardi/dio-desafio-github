import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Clinete</button>

const customer = 'João Victor Guizi Gerardi';

const hasCustomer = true;

const App = () => {

    const renderShowHistory = (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = (
        <div>
            Clique no botão abaixo para cadastrar cliente
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => {
        if (!hasCustomer) return null;

        return (
            <div>
                <h1>Nome do Cliente: {customer}</h1>
            </div>
        )
    }

    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo à aula de ReactJS</p>
            Valor de hasCustomer: {String(hasCustomer)}
            {hasCustomer ? renderShowHistory : renderAddCustomer}
            <div>
                {showCustomer()}
            </div>
        </div>
    );
};

export default App;