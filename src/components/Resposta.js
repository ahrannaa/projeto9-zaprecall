import styled from "styled-components";

export default function Resposta(props) {
  
  return (
    <PerguntaAberta display={props.display}>
      <h1>{props.resposta}</h1>
      <FooterConcluido>
        <ContainerBotoes>
          <BotaoVermelho onClick={props.onClick}>Não lembrei</BotaoVermelho>
          <BotaoLaranja onClick={props.onClick}>Quase não lembrei</BotaoLaranja>
          <BotaoVerde onClick={props.onClick}>Zap!</BotaoVerde>
        </ContainerBotoes>
      </FooterConcluido>
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
  display: ${(prop) => prop.display === "true" ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;
`;

const FooterConcluido = styled.div`
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 5px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-left: 20px;
`;

const BotaoVerde = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: green;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
  margin-right: 6px;
  margin-top: 65px;
  border:none;
`;

const BotaoVermelho = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: red;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
  margin-right: 6px;
  margin-top: 65px;
  border:none;
`;

const BotaoLaranja = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: orange;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
  margin-right: 6px;
  margin-top: 65px;
  border:none;
`;