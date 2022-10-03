import seta_play from "../assets/img/seta_play.png";
import Cards from "./Cards";
import Resposta from "./Resposta";
import Pergunta from "./Pergunta";
import styled from "styled-components";
import { useState } from "react";

function Flashcards(props) {
  const [showPerguntaFechada, setShowPerguntaFechada]= useState("true")
  const [showPergunta, setShowPergunta]= useState("false")
  const [showResposta, setshowResposta]= useState("false")
 

  function abrirPergunta (){
    setShowPerguntaFechada("false")
    setShowPergunta("true")
  }

  function abrirResposta() {
    setShowPergunta("false")
    setshowResposta("true")
  }

  function responderPergunta(botao){
    props.incContador();
    setShowPerguntaFechada("true")
    setshowResposta("false")
  }
 

   return (
    <>
      <PerguntaFechada display ={showPerguntaFechada} >
        <p>{props.nome}</p>
        <img onClick={abrirPergunta} src={seta_play} alt="seta play" />
      </PerguntaFechada>
      <Pergunta onClick={abrirResposta} display={showPergunta} pergunta={props.pergunta}></Pergunta>
      <Resposta onClick={responderPergunta} display={showResposta} resposta={props.resposta}></Resposta>
    </>
  );
}

export default function Deck(propos) {
  const [contador, setContador] = useState(0)

  function incContador() {
    setContador(contador + 1)
    console.log(contador)
  }

  return (
    <>
      {Cards.map((p) => (
        <Flashcards incContador={incContador} nome={p.nome} resposta={p.resposta} pergunta={p.pergunta} />
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
  display: ${(prop) => prop.display === "true" ? "flex" : "none"};
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
