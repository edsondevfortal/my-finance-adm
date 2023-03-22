import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.png";

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Logo FinanceADM" />
          <button type="button" onClick={openNewTransactionModal}>
            Nova transação
          </button>
        </Content>
      </Container>
    </>
  );
}
