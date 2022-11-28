import React from "react";
import { randomWord } from "./App"

export default function Jogo() {

    const palavra = randomWord()

    const [estado, setEstado] = React.useState("")

    function gerar() {
        setEstado(palavra.map((f) => <Letra data={f}/>));
    }

    return(
        <div class="jogo">
            <img src="assets/forca0.png" class="forca"/>
            <div>
                <buttom onClick={gerar}>Escolher Palavra</buttom>
                <ul class="palavra">
                    {estado}
                </ul>
            </div>
        </div>
    )
}

function Letra(props) {

    return(
        <li>{props.data}</li>
    )
}