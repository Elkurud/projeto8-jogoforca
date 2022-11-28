import React from "react";
import { component } from "./App";



export default function Jogo() {

    let palavra = component
    const [estado, setEstado] = React.useState("")

    function gerar() {
        setEstado(palavra.map((f) => <Letra data={f}/>));
    }

    return(
        <div class="jogo">
            <img src="assets/forca0.png" class="forca"/>
            <div class='container2'>
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
        <li class="off">{props.data}</li>
    )

}