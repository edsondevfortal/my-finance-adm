import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4rem;
  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 3px 3px -4px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #146c8a;
      font-weight: 500;
      font-size: 1.1rem;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: normal;
      line-height: 3rem;
      color: #424242;
    }

    &.bg-income {
      background: #f3ffda;
    }

    &.bg-outcome {
      background: #f6f6f6;
      strong {
        color: #b84c4c;
      }
    }

    &.bg-balance {
      background: #f3ffda;
      
    }
  }
`;
