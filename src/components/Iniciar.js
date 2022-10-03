import styled from "styled-components";
import logo from "../assets/img/logo.png";



export default function Iniciar(props) {
 
  return (
    <>
      <IniciarJogo display={props.display}>
        <img src={logo} alt="logo" />
        <p>ZapRecall!</p>
        <Botao data-identifier="start-btn"  onClick={props.onClick}>Iniciar Recall</Botao>
      </IniciarJogo>
      
    </>
  );
}

const IniciarJogo = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display:  ${(prop) => (prop.display === "true" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  margin-top: 80px;

  p {
    font-size: 40px;
    color: white;
    margin-top: 20px;
  }
`;
const Botao = styled.button`
  background-color: #ffffff;
  color: #d70900;
  width: 246px;
  height: 54px;
  border-radius: 5px;
  font-size: 20px;
  border: solid 1px #d70900;
  margin-top: 40px;

  &:hover {
  background-color: yellow;
  }
`;
