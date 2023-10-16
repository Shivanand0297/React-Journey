import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { client } from "./queryClientProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>
);
