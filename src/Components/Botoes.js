import styled from "styled-components"

export default function Botoes({setLetras, letras, pregame, erro, setErro, palavraEscolhida}) {

    function chute(i){
        setLetras([...letras, i]);
        console.log(letras);
        palavraEscolhida.includes(i) ? a() : setErro(erro + 1);
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function a(){
        return
    }

    return(

        <Container>
            {alfabeto.map((f) => (
             <button key={f} className={`${letras.includes(f) ? "botao-off" : "botao-on"} ${pregame}`}
             onClick={letras.includes(f) ? a() : () => chute(f)}>
                {f.toUpperCase()}
            </button>))}
        </Container>

    )

}

const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 664px;
    gap: 12px;
    justify-content: center;
    margin-bottom: 152px;
`