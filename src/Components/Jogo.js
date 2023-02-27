import styled from "styled-components";
import React from "react";

export default function Jogo({
  letras,
  setLetras,
  setPregame,
  setPalavraEscolhida,
  erro,
  word,
  setWord,
  palavra,
  setPalavra
}) {
  const palavras = [
    "abacate",
    "abacaxi",
    "abelha",
    "abanador",
    "antologia",
    "amor",
    "aba",
    "abrigo",
    "abrir",
    "banana",
    "boi",
    "batata",
    "bacalhau",
    "bexiga",
    "bowl",
    "batedeira",
    "bisturi",
    "barreira",
    "banco",
    "caixa",
    "chantilly",
    "cachorro",
    "cuidado",
    "caneta",
    "carinho",
    "cabra",
    "cesto",
    "dados",
    "dizer",
    "danone",
    "dente",
    "diamante",
    "diafragma",
    "detonar",
    "dia",
    "elefante",
    "esmeralda",
    "esfinge",
    "esfera",
    "encontro",
    "ema",
    "escola",
    "economia",
    "formiga",
    "fama",
    "festa",
    "fiador",
    "ferver",
    "flauta",
    "figo",
    "fiapo",
    "fotografia",
    "goiaba",
    "gelo",
    "grito",
    "guria",
    "goleiro",
    "golfinho",
    "golfe",
    "girar",
    "harmonia",
    "haste",
    "hectare",
    "hepatite",
    "hiena",
    "hidrante",
    "igreja",
    "importante",
    "idoso",
    "irado",
    "identidade",
    "idioma",
    "idade",
    "idiota",
    "jantar",
    "jumento",
    "jararaca",
    "janela",
    "jerimum",
    "jaula",
    "jabuti",
    "jaleco",
    "laranja",
    "lua",
    "luz",
    "lindo",
    "lacraia",
    "lactose",
    "lacrar",
    "manga",
    "morango",
    "mico",
    "matar",
    "mingau",
    "moqueca",
    "mocassin",
    "nectarina",
    "nada",
    "navio",
    "namorado",
    "ninja",
    "natal",
    "narciso",
    "narina",
    "nabo",
    "ovo",
    "ostra",
    "obstetra",
    "orangotango",
    "olhar",
    "ortodoxo",
    "ouro",
    "ornamento",
    "pato",
    "polvo",
    "povoar",
    "pano",
    "princesa",
    "pizza",
    "patroa",
    "queijo",
    "quitanda",
    "quinta",
    "quantia",
    "quarentena",
    "quadrilha",
    "quaresma",
    "quartzo",
    "quebrar",
    "risada",
    "rio",
    "remar",
    "rato",
    "racional",
    "rainha",
    "radioatividade",
    "raiz",
    "raiva",
    "rachadura",
    "salada",
    "salamandra",
    "sacola",
    "siri",
    "sabre",
    "sucarose",
    "sabedoria",
    "sacerdote",
    "tatu",
    "tabacaria",
    "taberneiro",
    "torrada",
    "tamanho",
    "tatuagem",
    "trem",
    "uva",
    "universo",
    "unanimidade",
    "ubuntu",
    "universidade",
    "urso",
    "uivar",
    "unir",
    "vela",
    "valeta",
    "vacilo",
    "valor",
    "vagem",
    "vadiagem",
    "vaca",
    "valentia",
    "vidro",
    "valsa",
    "xadrez",
    "xilofone",
    "xarope",
    "xenofobia",
    "xereta",
    "xerife",
    "xaveco",
    "xixi",
    "xale",
    "zebra",
    "zagueiro",
    "zero",
    "zoeira",
    "zepelim",
    "zinco",
    "zumbido",
  ];

  const [i, setI] = React.useState(0);

  function gerar() {
    if (i < 1) {
      setPalavraEscolhida(word);
      console.log(word)
      setPalavra(
        word.map(
          (f) => (
            (<li className={`${letras.includes(f) ? "l-on" : "l"}`}>{f}</li>)
          )
        )
      );
      setWord(
        Array.from(palavras[Math.floor(Math.random() * palavras.length)])
      );
      setPregame("");
      setI(2);
    }
  }

  return (
    <>
      <Topo>
        <Forca src={`assets/forca${erro}.png`} />
        <Container>
          <Escolher onClick={() => gerar(letras)}>Escolher Palavra</Escolher>
          <Container2>{palavra}</Container2>
        </Container>
      </Topo>
    </>
  );
}

const Topo = styled.div`
  margin: 59px 38px;
  display: flex;
  justify-content: space-between;
  height: 466px;
  width: 90%;
`;

const Forca = styled.img`
  height: 466px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 30px;
`;

const Escolher = styled.button`
  height: 60px;
  width: 200px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27ae60;
  border-radius: 8px;
  border: solid 0px;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 285px;
`;
const Container2 = styled.ul`
  display: flex;
  gap: 5px;
`;
