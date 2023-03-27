import { Container } from "./styles";
import income from "../../assets/income-modal.png";
import outcome from "../../assets/outcome-modal.png";
import total from "../../assets/total.png";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
  const { transactionData } = useContext(TransactionsContext);

  // calc balance, deposit, widthdraw from and transactions

  const {
    totalDepositTransaction,
    totalWithdrawTransaction,
    balanceTransaction,
  } = transactionData.reduce(
    (acc, transaction) => {
      if (transaction.type === "entrada") {
        acc.totalDepositTransaction += transaction.amount;
      } else {
        acc.totalWithdrawTransaction += transaction.amount;
      }
      acc.balanceTransaction =
        acc.totalDepositTransaction - acc.totalWithdrawTransaction;
      return acc;
    },
    {
      totalDepositTransaction: 0,
      totalWithdrawTransaction: 0,
      balanceTransaction: 0,
    }
  );

  return (
    <>
      <Container>
        <div className="bg-income">
          <header>
            <p>Entradas</p>
            <img src={income} alt="Entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalDepositTransaction)}
          </strong>
        </div>
        <div className="bg-outcome">
          <header>
            <p>Saídas</p>
            <img src={outcome} alt="Saídas" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalWithdrawTransaction)}
          </strong>
        </div>
        <div className="bg-balance">
          <header>
            <p>Saldo</p>
            <img src={total} alt="Total" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(balanceTransaction)}
          </strong>
        </div>
      </Container>
    </>
  );
}
