import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #ededed;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #5a608c;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: rgb(0, 87, 172);
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerNewTransactionsButton = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxButtonProps {
  isActive: boolean;
  isActiveBgColor: "green" | "red";
}

const colors = {
  green: "#faffef",
  red: "#ffd2d2",
};

export const RadioBoxButton = styled.button<RadioBoxButtonProps>`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  color: #fff;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    display: block;
    font-size: 1rem;
    color: #5a608c;
    margin-left: 1rem;
  }
  &:hover {
    border-color: rgb(170, 170, 170, 0.52);
  }
  background: ${(props) =>
    props.isActive ? colors[props.isActiveBgColor] : "transparent"};
`;
