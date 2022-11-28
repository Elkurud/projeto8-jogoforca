import React from "react"
import { teste } from "./App"

let letraClickada

export default function Letras() {

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    return(
        <div class="letras">
            {alfabeto.map((f) => <Letra data={f}/>)}
        </div>
    )
}



function Letra(props) {

    const [letra, setLetra] = React.useState(<button onClick={() => letraClickada(props.data)}>{props.data}</button>)

    const letraClickada = (letra) => {

        const resposta = <button class= "apagada">{props.data}</button>
        setLetra(resposta)

        teste(letra)
        return(letra)
    }

    return(
        <>
            {letra}
        </>
    )
}

export {letraClickada}