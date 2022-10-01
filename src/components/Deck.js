import seta_play from "../assets/img/seta_play.png";
import Cards from "./Cards";
import Resposta from "./Resposta";
import Pergunta from "./Pergunta";
import styled from "styled-components";

function Flashcards(props) {
  return (
    <>
      <PerguntaFechada>
        <p>{props.nome}</p>
        <img src={seta_play} alt="seta play" />
      </PerguntaFechada>
      <Pergunta pergunta={props.pergunta}></Pergunta>
      <Resposta resposta={props.resposta}></Resposta>
    </>
  );
}

export default function Deck() {
  return (
    <>
      {Cards.map((p) => (
        <Flashcards nome={p.nome} resposta={p.resposta} pergunta={p.pergunta} />
      ))}
    </>
  );
}


const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  }
`;
