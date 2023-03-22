import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransitionTable() {
  useEffect(() => {
    api.get("transactions").then((data) => console.log(data));
  }, []);

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
            <tr>
              <td>mock</td>
              <td className="widthdraw">- 99,04</td>
              <td>mock</td>
              <td>00/00/00</td>
            </tr>
            <tr>
              <td>mock</td>
              <td className="widthdraw">- 85.98</td>
              <td>mock</td>
              <td>00/00/00</td>
            </tr>
            <tr>
              <td>mock</td>
              <td className="deposit">74.99</td>
              <td>mock</td>
              <td>00/00/00</td>
            </tr>
            <tr>
              <td>mock</td>
              <td className="widthdraw">- 250.00</td>
              <td>Alimentação</td>
              <td>00/00/00</td>
            </tr>
            <tr>
              <td>mock</td>
              <td className="deposit">4.700</td>
              <td>mock</td>
              <td>00/00/00</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
