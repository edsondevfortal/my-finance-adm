import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.7rem;
    th {
      color: #5a608c;
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-size: 1.2rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: #efefef70;
      color: #424242;
      border-radius: 0.25rem;

      &:first-child {
        font-weight: 500;
      }

      &.entrada {
        color: #08b049;
      }
      &.saida {
        color: #d2024a;
      }
    }
  }
`;
