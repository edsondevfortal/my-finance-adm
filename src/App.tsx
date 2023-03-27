import { Globalstyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import ReactModal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

// accessibility | informing that the modal is on the page
ReactModal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function transactionModal() {
    if (!isNewTransactionModalOpen) {
      setIsNewTransactionModalOpen(true);
      return;
    }
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header openNewTransactionModal={transactionModal} />
      <Dashboard />
      <Globalstyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={transactionModal}
      />
    </TransactionsProvider>
  );
}
