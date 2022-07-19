import React from "react";
import mock from '../mock';
import Lista from "../components/List";
import Botao from '../components/Button';

const App = () => {

    const renderCustomers = (mock, index) => {
        return (
            <div key={`customer-${mock.id}`}>
                <li>{mock.name} <Botao onClick={() => handleClick(mock.id)}>Deletar Cliente</Botao></li>
                {mock.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px'}} key={`skill-${index}`}>
                <li>{skill}</li>
            </div> 
        )
    }

    const name = 'Digital Innovation One'

    const handleChange = (e) => {
        const {value} = e.target;
        console.log(value);
    }
    
    const showEvent = (e) => {
        console.log(e);
        console.log("Evento Disparado");
        alert(name);
    }

    const handleClick = (id) => {
        window.alert(`ID do Cliente: ${id}`)
    }
    
    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo à aula de ReactJS</p>
            <input onChange={handleChange} />
            <Botao onClick={() => showEvent}>Mostrar Evento</Botao>
            <div>
                <Lista>
                    {mock.map(renderCustomers)}
                </Lista>
            </div>
        </div>
    );
};

export default App;