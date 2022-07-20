import React, {Component} from 'react';

class TodoListStatefull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Tomate',
                'Alface',
                'Melancia'
            ]
        }
    }

    addItem = (item) => {
        this.setState({items: [...this.state.items, item]});
    }

    removeItem = () => {
        this.setState({items: [...this.state.items.slice(1)]})
    }

    render() {
        const {items} = this.state;
        return (
            <div className='bloco-lista'>
                <p>Minha lista Classname</p>
                <ul className='lista-estilizada'>
                    {items.map(item => <li>(item)</li>)}
                </ul>
                <button onClick={() => this.addItem('Abóbora')}>Adicionar item</button>
                <button onClick={() => this.removeItem()}>Remover item</button>
            </div>
        )
    }
}

export default TodoListStatefull;