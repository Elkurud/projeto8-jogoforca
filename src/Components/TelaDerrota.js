import styled from "styled-components";

export default function TelaDerrota({ erro }) {

  if (erro === 6) {

    return (
      <Aviso>
        <Caixa>you lose</Caixa>
      </Aviso>
    );
  } else if(erro === 10){
    return (
        <Aviso>
          <Caixa>you win</Caixa>
        </Aviso>
      );
  }
}

const Aviso = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Caixa = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 40%;
  background-color: white;
  border-radius: 26px;
  font-size: 34px;
`;