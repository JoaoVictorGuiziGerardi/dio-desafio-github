import React from "react";

const listCustomer = [
    {
        id: 1,
        name: "João",
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: "Fulano",
        skills: ['HTML', 'Node', 'C++', 'JS']
    },
    {
        id: 3,
        name: "Ciclano",
        skills: ['Webpack']
    },
    {
        id: 4,
        name: "Beltrano",
        skills: ['React']
    },
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente X</button></li>
                {customer.skills.map(renderSkills)}
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

    const handleClick = (e, id) => {
        window.alert(`ID do Cliente: ${id}`)
    }
    
    const Button = <button onClick={showEvent}>Mostrar Evento</button>
    const deleteButton = <button onClick={showEvent}>Mostrar Evento</button>
    
    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo à aula de ReactJS</p>
            <input onChange={handleChange} />
            {Button}
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
                
            </div>
        </div>
    );
};

export default App;