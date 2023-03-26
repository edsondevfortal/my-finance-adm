import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface TransactionData_Type {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  date: string;
}

type transactionDataOmit = Omit<TransactionData_Type, "id" | "date">;

interface TransactionProviderProps {
  children: ReactNode;
}

interface createContext_Type {
  transactionData: TransactionData_Type[];
  createTransaction: (transaction: transactionDataOmit) => Promise<void>;
}

export const TransactionsContext = createContext<createContext_Type>(
  {} as createContext_Type
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactionData, setTransactionData] = useState<
    TransactionData_Type[]
  >([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactionData(response.data.transactions));
  }, []);

  async function createTransaction(transactionOmit: transactionDataOmit) {
    const response = await api.post("/transactions", {
      ...transactionOmit,
      date: new Date(),
    });
    const { transaction } = response.data;

    setTransactionData([...transactionData, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactionData, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
