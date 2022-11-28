import Jogo from "./Jogo"
import Letras, { letraClickada } from "./Letras"
import Chute from "./Chute.js"
import palavras from "../palavras"

export default function App() {
    return (
        <div class="root container">

            <Jogo/>
            <Letras/>
            <Chute/>
            
        </div>
    )
}

export function teste(letra){ 

    console.log(letra)
    return letra
}

export function randomWord() {

    let word = Array.from(palavras[Math.floor((Math.random()*palavras.length))]);

    return word
}

export const component = randomWord()