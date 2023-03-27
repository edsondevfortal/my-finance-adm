import { FormEvent, useState, useContext } from "react";
import ReactModal from "react-modal";
import {
  Container,
  ContainerNewTransactionsButton,
  RadioBoxButton,
} from "./styles";
import modalClose from "../../assets/modal-close.png";
import incomeModal from "../../assets/income-modal.png";
import outcomeModal from "../../assets/outcome-modal.png";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, settype] = useState("entrada");

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    onRequestClose();
  }
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <ContainerNewTransactionsButton>
            <RadioBoxButton
              type="button"
              onClick={() => settype("entrada")}
              isActive={type == "entrada"}
              isActiveBgColor={"green"}
            >
              <img src={incomeModal} alt="entrada" />
              <span>entrada?</span>
            </RadioBoxButton>

            <RadioBoxButton
              type="button"
              onClick={() => settype("saida")}
              isActive={type == "saida"}
              isActiveBgColor={"red"}
            >
              <img src={outcomeModal} alt="entrada" />
              <span>ou saída?</span>
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
