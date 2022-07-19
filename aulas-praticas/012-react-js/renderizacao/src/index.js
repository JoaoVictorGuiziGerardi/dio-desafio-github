import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import "./styles.css"

/* Aula Renderização
const element = "Digital Innovation"
const element2 = <h1>Olá!</h1>
*/

/* Aula Props*/
function soma(a, b){
    alert(a + b)
}


const App = () => {
    /* Aula Renderização
    return (
        <div className="App teste">
            {element}
            {element2}
        </div>
    )
    */

    /* Aula props*/
    return (
        <div className="App">
            <Button onClick={() => soma(10,30)} name="Clique Aqui!"/>
        </div>
    )


}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)