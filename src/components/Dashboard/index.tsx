import { Summary } from "../Summary";
import { TransitionTable } from "../TransitionTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <>
      <Container>
        <Summary />
        <TransitionTable />
      </Container>
    </>
  );
}
