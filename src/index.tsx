import { createServer, Model } from "miragejs";
import ReactDOM from "react-dom/client";
import { App } from "./App";

createServer({
  // mirageJS Model | create transaction as the table entity
  models: {
    transaction: Model,
  },

  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: "Mercado",
  //         amount: 350,
  //         category: "Alimentação",
  //         type: "entrada",
  //         date: new Date("2023-06-02 19:40:33"),
  //       },
  //       {
  //         id: 2,
  //         title: "Terapia",
  //         amount: 120,
  //         category: "Saúde",
  //         type: "saida",
  //         date: new Date("2023-06-01 21:00:33"),
  //       },
  //     ],
  //   });
  // },

  routes() {
    this.namespace = "api";

    // create get request
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    // create post request
    this.post("/transactions", (schema, request) => {
      // insert the data into the data variable and convert the request text type to object JS
      const data = JSON.parse(request.requestBody);

      // insert the data into the transaction entity
      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
