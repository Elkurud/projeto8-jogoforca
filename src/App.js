import React from "react";
import styled from "styled-components";
import Jogo from "./components/Jogo.js"
import Botoes from "./components/Botoes.js";

export default function App() {

    
    const [letras, setLetras] = React.useState([]);
    const [pregame, setPregame] = React.useState("botao-off");
    const [erro, setErro] = React.useState(0)
    const [palavraEscolhida, setPalavraEscolhida] = React.useState("")

    return (
        <Container>
            
            <Jogo letras = {letras} setLetras = {setLetras} setPregame= {setPregame} setPalavraEscolhida = {setPalavraEscolhida} erro = {erro} />
            <Botoes setLetras = {setLetras} letras = {letras} pregame = {pregame} erro = {erro} setErro = {setErro} palavraEscolhida={palavraEscolhida} />

        </Container>
    )
}


const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`