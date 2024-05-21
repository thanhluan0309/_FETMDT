import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "../src/output.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
