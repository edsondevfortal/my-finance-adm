import { Container } from "./styles";
import income from "../../assets/income-modal.png";
import outcome from "../../assets/outcome-modal.png";
import total from "../../assets/total.png";

export function Summary() {
  return (
    <>
      <Container>
        <div className="bg-income">
          <header>
            <p>Entradas</p>
            <img src={income} alt="Entradas" />
          </header>
          <strong>1000,00</strong>
        </div>
        <div className="bg-outcome">
          <header>
            <p>Saídas</p>
            <img src={outcome} alt="Saídas" />
          </header>
          <strong> - 500,00</strong>
        </div>
        <div className="bg-balance">
          <header>
            <p>Saldo</p>
            <img src={total} alt="Total" />
          </header>
          <strong>500,00</strong>
        </div>
      </Container>
    </>
  );
}
