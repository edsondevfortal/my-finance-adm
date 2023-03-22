import ReactModal from "react-modal";
import { Container, ContainerNewTransactionsButtom } from "./styles";
import modalClose from "../../assets/modal-close.png";
import incomeModal from "../../assets/income-modal.png";
import outcomeModal from "../../assets/outcome-modal.png";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <h2>Cadastrar Transação</h2>
          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Categoria" />
          <ContainerNewTransactionsButtom>
            <button type="button">
              <img src={incomeModal} alt="Entrada" />
              <span>Entrada?</span>
            </button>
            <button type="button">
              <img src={outcomeModal} alt="Saída" />
              <span>ou Saída?</span>
            </button>
          </ContainerNewTransactionsButtom>
          <button type="submit">Confirmar</button>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={modalClose} alt="Fechar modal" />
          </button>
        </Container>
      </ReactModal>
    </>
  );
}
