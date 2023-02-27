import React from "react";
import styled from "styled-components";
import Jogo from "./components/Jogo.js";
import Botoes from "./components/Botoes.js";
import TelaDerrota from "./components/TelaDerrota.js";

export default function App() {
  const [letras, setLetras] = React.useState([]);
  const [pregame, setPregame] = React.useState("botao-off");
  const [erro, setErro] = React.useState(0);
  const [palavraEscolhida, setPalavraEscolhida] = React.useState("");
  const [word, setWord] = React.useState([]);
  const [palavra, setPalavra] = React.useState("");
  const [acerto, setAcerto] = React.useState(0);

  return (
    <Container>
      <Jogo
        letras={letras}
        setLetras={setLetras}
        setPregame={setPregame}
        setPalavraEscolhida={setPalavraEscolhida}
        erro={erro}
        word={word}
        setWord={setWord}
        palavra={palavra}
        setPalavra={setPalavra}
      />
      <Botoes
        setLetras={setLetras}
        letras={letras}
        pregame={pregame}
        erro={erro}
        setErro={setErro}
        palavraEscolhida={palavraEscolhida}
        word={word}
        setPalavra={setPalavra}
        setAcerto={setAcerto}
        acerto={acerto}
      />
      <TelaDerrota erro={erro} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
