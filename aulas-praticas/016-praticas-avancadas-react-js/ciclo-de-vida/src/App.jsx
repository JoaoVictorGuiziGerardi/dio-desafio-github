import React, { Component } from "react";
import Counter from './aula-render-props/Counter'

const Buttons = ({ increment, decrement, count }) => (
    <div>
        <h1>Valor atual: {count}</h1>
        <div>
            <button onClick={increment}>Incrementar</button>
        </div>
        <div>
            <button onClick={decrement}>Decrementar</button>
        </div>
    </div>
)

class App extends Component {
    render() {
        return(
            <div>
                <Counter render={ ({increment, decrement, count }) => (
                    <Buttons
                        increment={increment}
                        decrement={decrement}
                        count={count}
                    />
                )}>
                </Counter>
            </div>
        )
    }
}

/* Aula Error Boundary
import React, { Fragment } from "react";

const store = [{
    type: 'Roupa'
}, {
    type: 'Calçado'
}, {
    type: 'Camiseta'
}]

function Column( {type} ) {
    return (
        <tr>
            <td>{type.name.console}</td> -> Linha que dá erro
        </tr>
    )
}

function App() {

    const renderColumns = (element, key) => (
        <Fragment key={`column-${key}`}>
            <Column type={element.type}/>
        </Fragment>
    )

    return (
        <table>
            {store.map(renderColumns)}
        </table>
    )
}
*/

/* Aula Fragment
import React, { Fragment } from "react";

const store = ['', '', '']

function Column() {
    return (
        <tr>
            <td>Tênis</td>
            <td>Roupa</td>
        </tr>
    )
}

function App() {

    const renderColumns = (element, key) => (
        <Fragment key={`column-${key}`}>
            <Column/>
        </Fragment>
    )

    return (
        <table>
            {store.map(renderColumns)}
        </table>
    )
}
*/

/* Aula Context API
import React, { useState, useEffect} from 'react';
import { ThemeContext, themes } from './aula-context-api/Theme';
import Card from './aula-context-api/Card';

function App() {
    const [token, setToken] = useState();

    useEffect(() => {
        setTimeout(() => {
            setToken('453tmof35')
        }, 4000)
    }, [setToken])

    return (
        <ThemeContext.Provider value={ {...themes.primary, token} }>
            <Card/>
        </ThemeContext.Provider>
    )
}
*/

/* Aula Hooks e Aula Components
import React, { Component } from 'react';
import Twitter from './aula-components/Twitter';
import TwitterHooks from './aula-hooks/TwitterHooks';

class App extends Component {

    state = {
        loading: false,
        activated: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 3000)
    }

    onRemove = () => {
        this.setState({
            activated: false
        })
    }

    render() {
        const posts = [{
            title: 'xpto',
            description: 'foo'
        },{
            title: 'xpto',
            description: 'foo'
        }]

        return (
            <div>
                <button onClick={this.onRemove}>Remover Component</button>
                {this.state.activated && (
                    <TwitterHooks posts={posts} loading={this.state.loading} />
                )}
                
            </div>
            
        )
    }
}
*/

export default App;