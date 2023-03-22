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
    border: 1 solid #d7d7d7;
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
