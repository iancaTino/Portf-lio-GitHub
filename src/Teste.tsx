import styled from "styled-components";

interface BotaoProps {
  principal?: boolean;
  fontSize?: string;
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "blue" : "gray")};
  color: white;
  font-size: ${(props) => props.fontSize || "16px"};
`;

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span{
  text-decoration: line-through;}
`;

function Teste() {
  return (
    <div>
      <Botao principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Excluir</span>
      </BotaoPerigo>
    </div>
  );
}

export default Teste;
