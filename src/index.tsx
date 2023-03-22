import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "mock",
          value: 203.02,
          category: "mock",
          data: "00/00/00",
        },
        {
          id: 2,
          title: "mock",
          value: 203.02,
          category: "mock",
          data: "00/00/00",
        },
        {
          id: 3,
          title: "mock",
          value: 244.02,
          category: "mock",
          data: "00/00/00",
        },
        {
          id: 4,
          title: "mock",
          value: 5.622,
          category: "mock",
          data: "00/00/00",
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
