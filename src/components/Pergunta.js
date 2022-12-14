import seta_virar from "../assets/img/seta_virar.png";
import styled from "styled-components";

export default function Pergunta(props) {

  return (
    <PerguntaAberta display={props.display}>
      <h1 data-identifier="flashcard-question">{props.pergunta}</h1>
      <img data-identifier="flashcard-turn-btn" onClick={props.onClick} src={seta_virar} alt="seta virar" />
    </PerguntaAberta>
  );
}

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: ${(prop) => prop.display  === "true" ? "inline" : "none"};

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
