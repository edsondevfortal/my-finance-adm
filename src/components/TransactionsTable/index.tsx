import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactionData } = useContext(TransactionsContext);

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactionData.reverse().map((response) => (
              <tr key={response.id}>
                <td>{response.title}</td>
                <td className={response.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(response.amount)}
                </td>
                <td>{response.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(response.date)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
