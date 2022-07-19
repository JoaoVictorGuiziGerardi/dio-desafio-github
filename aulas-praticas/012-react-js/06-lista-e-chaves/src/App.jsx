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

const hasCustomer = true;

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
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

    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo à aula de ReactJS</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
                
            </div>
        </div>
    );
};

export default App;