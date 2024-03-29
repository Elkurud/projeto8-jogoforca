import styled from "styled-components";

export default function Botoes({
  setLetras,
  letras,
  pregame,
  erro,
  setErro,
  palavraEscolhida,
  word,
  setPalavra,
  setAcerto,
  acerto,
}) {
  function chute(i) {
    setLetras([...letras, i]);
    word.includes(i) ? acertou() : setErro(erro + 1);
    setPalavra(
      word.map((f) => (
        <li className={`${letras.includes(f) ? "l-on" : "l"}`}>{f}</li>
      ))
    );
  }

  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function nada() {
    return;
  }

  function acertou() {
    console.log(word.length)
    if (acerto === word.length - 1) {
      setErro(10);
    } else {
      setAcerto(acerto + 1);
      console.log(acerto)
    }
  }

  return (
    <Container>
      {alfabeto.map((f) => (
        <button
          key={f}
          className={`${
            letras.includes(f) ? "botao-off" : "botao-on"
          } ${pregame}`}
          onClick={letras.includes(f) ? nada() : () => chute(f)}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 664px;
  gap: 12px;
  justify-content: center;
  margin-bottom: 152px;
`;
