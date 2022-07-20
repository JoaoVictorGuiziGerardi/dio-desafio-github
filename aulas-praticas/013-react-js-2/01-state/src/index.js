import React from "react"
import ReactDOM from "react-dom"
import NameForm from "./components/NameForm"
import SorveteForm from "./components/SorveteForm"
import "./styles.css"

const App = () => {
    return (
        <div className="App">
            <NameForm />
            <SorveteForm />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)