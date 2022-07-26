// Aula Smart Components
import React from "react";
import PhotosGallery from "./aula-smart-components/gallery/PhotosGallery";
import Button from './aula-dumb-components/button/Button';
function App () {

    const photos = [
        'http://placeimg.com/140/60/people',
        'http://placeimg.com/140/60/animals',
        'http://placeimg.com/140/60/tech',
        'http://placeimg.com/140/60/nature'
    ]

    return(
        <>
            <h1>Galeria de Fotos</h1>
            <PhotosGallery 
                photos={photos}
            />
        </>
    )
}

/* Aula Dumb Components
import React, { useState } from "react";
import Button from "./aula-dumb-components/button/Button";
import Calc from "./aula-dumb-components/calc/Calc";

function App () {

    const [value, setValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(30)

    const handleClick = () => {
        setMin(10);
    }

    const handleCalc = ({target}) => {
        const value = Number(target.value);
        setValue(min+max+value);
    }

    return(
        <>
        <div>
           <Button onClick={handleClick}>
                Adicionar no carrinho
            </Button> 
        </div>
            <br />
            <div>
                <h1>Valor calculado: {value}</h1>
                <Calc 
                    min={min}
                    max={max}
                    onChange={handleCalc}
                />
            </div>
        </>
    )
}
*/

/* Aula Refs
import React, { useRef, useEffect, useState } from "react";

function App () {
    const inputRef = useRef();
    const count = useRef(1);
    const [value, setValue] = useState(false);

    const handleClick = () => {
        inputRef.current.focus();
        console.log('inputRef.current', inputRef.current);
    }

    useEffect(() => {
        setTimeout(() => {
            console.log('passou aqui')
            count.current = 300
            setValue(true);
        }, 3000)
    })

    return(
        <>
            <h1>Valor de count: {count.current}</h1>
            Foco: <input ref={inputRef} />
            <br />
            <button onClick={handleClick}>Focar</button>
        </>
    )
}
*/

/* Aula Type Checking
import React from "react";
import PetShop from "./aula-type-checking/PetShop";

function App () {
    const handleClick = () => {
        console.log('Iniciando o banho...')
    }

    return(
        <div>
            <PetShop
                dogs={2}
                customerName={'João Victor'}
                onClick={handleClick}
                status={'Completed'}
            />
        </div>
    )
}
*/

/* Aula de Render Props
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
*/

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