import ReactModal from "react-modal";
import {
  Container,
  ContainerNewTransactionsButton,
  RadioBoxButton,
} from "./styles";
import modalClose from "../../assets/modal-close.png";
import incomeModal from "../../assets/income-modal.png";
import outcomeModal from "../../assets/outcome-modal.png";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [newTransactionType, setNewTransactionType] = useState("deposit");

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
          <ContainerNewTransactionsButton>
            <RadioBoxButton
              type="button"
              onClick={() => setNewTransactionType("deposit")}
              isActive={newTransactionType == "deposit"}
              isActiveBgColor={"bgDepositColor"}
            >
              <img src={incomeModal} alt="Entrada" />
              <span>Entrada?</span>
            </RadioBoxButton>

            <RadioBoxButton
              type="button"
              onClick={() => setNewTransactionType("widthdraw")}
              isActive={newTransactionType == "widthdraw"}
              isActiveBgColor={"bgWidthdrawColor"}
            >
              <img src={outcomeModal} alt="Entrada" />
              <span>ou Saída?</span>
            </RadioBoxButton>
          </ContainerNewTransactionsButton>
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
