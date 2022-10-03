import seta_play from "../assets/img/seta_play.png";
import icone_certo from "../assets/img/icone_certo.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_quase from "../assets/img/icone_quase.png";
import Cards from "./Cards";
import Resposta from "./Resposta";
import Pergunta from "./Pergunta";
import styled from "styled-components";
import { useState } from "react";
import Resultado from "./Resultado";
import ZapRecall from "./ZapRecall";

function Flashcards(props) {
  const [showPerguntaFechada, setShowPerguntaFechada] = useState("true");
  const [showPergunta, setShowPergunta] = useState("false");
  const [showResposta, setshowResposta] = useState("false");
  const [cor, setCor] = useState("");
  const [img, setImg] = useState(seta_play);

  const styles = {
    ORANGE: {
      color: "orange",
      img: icone_quase,
    },
    RED: {
      color: "red",
      img: icone_erro,
    },
    GREEN: {
      color: "green",
      img: icone_certo,
    }
  }

  function abrirPergunta() {
    setShowPerguntaFechada("false");
    setShowPergunta("true");
  }

  function abrirResposta() {
    setShowPergunta("false");
    setshowResposta("true");
  }

  function responderPergunta(botao)  {
    props.incContador();
    setShowPerguntaFechada("true");
    setshowResposta("false");

    setCor(styles[botao].color)
    setImg(styles[botao].img)

  }

  return (
    <>
      <PerguntaFechada data-identifier="flashcard-index-item" 
        display={showPerguntaFechada}
        color={cor}
        decoration={cor === "" ? "" : "line-through"}
      >
        <p>{props.nome}</p>
        <img data-identifier="flashcard-show-btn"onClick={abrirPergunta} src={img} alt="seta play" />
      </PerguntaFechada>
      <Pergunta
        onClick={abrirResposta}
        display={showPergunta}
        pergunta={props.pergunta}
      ></Pergunta>
      <Resposta
        onClick={responderPergunta}
        display={showResposta}
        resposta={props.resposta}
      ></Resposta>
    </>
  );
}

export default function Deck (props) {
  const [contador, setContador] = useState(0);

  function incContador() {
    setContador(contador + 1);
  }

  if (props.display === "true") {
    return (
      <>
      <ZapRecall />
        {Cards.map((p) => (
          <Flashcards data-identifier="flashcard"
            incContador={incContador}
            nome={p.nome}
            resposta={p.resposta}
            pergunta={p.pergunta}
          />
        ))}
        <Resultado data-identifier="flashcard-counter" contador={contador}/>
      </>
    );
  } else {
    return (<></>)
  }

}


const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(prop) => (prop.display === "true" ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: ${(prop) => prop.decoration};
    color: ${(prop) => prop.color};
  }
`;
