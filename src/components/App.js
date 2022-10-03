import Deck from "./Deck";
import Iniciar from "./Iniciar";
import styled from "styled-components";
import { useState } from "react";

export default function App(props) {
  const [iniciar, setIniciar] = useState("true");
  const [deck, setDeck] = useState("false");
 

  function jogar() {
    setIniciar("false");
    setDeck("true");
  }

  return (
    <>
       <ScreenContainer>
        <Iniciar onClick={jogar} display={iniciar}/>
        <Deck display={deck} />
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  
`;
