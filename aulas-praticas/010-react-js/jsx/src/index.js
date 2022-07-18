import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function primeiroJSX() {
    return (
        <span>
            João Victor Guizi Gerardi
        </span>
    )
}

function introducao() {
    return (
    <h1>
        Introdução ao ReactJS
    </h1>
    )
}

function soma(a, b) {
    return a + b;
}

const App = () => {
    return (
        <div className="App teste">
            {introducao()}
            <p>Meu nome é {primeiroJSX()}!</p>
            <p>Soma: {soma(10,23)}</p>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)