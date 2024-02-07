import React, {useState} from "react"
import "./Contador.css"

function Contador(){

    const[numero, setNumero] = useState(0)

    function Adicionar(){
        if(numero < 20){
            setNumero(numero + 1)
        } 
    }

    function Remover(){
        if(numero > 0){
            setNumero(numero - 1)
        }
    }

    function Limpar(){
        setNumero(0)
    }

    return(
        <section className="contador">
            <h1>CONTADOR</h1>
            <h2 className="numero">{numero}</h2>
            <div className="boxButton">
                <button id="btn1" onClick={Adicionar}>+</button>
                <button id="btn2" onClick={Remover}>-</button>
                <button id="btn3" onClick={Limpar}>C</button>
                </div>
        </section>
    )
}

export default Contador