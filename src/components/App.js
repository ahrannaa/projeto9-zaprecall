import ZapRecall from "./ZapRecall";
import Deck from "./Deck";
import Resultado from "./Resultado";
import styled from "styled-components";


export default function App(props) {

   return (
    <ScreenContainer>
      <ZapRecall />
      <Deck/>
      <Resultado/>
      </ScreenContainer>
    
  );
}

const ScreenContainer = styled.div`
   background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
