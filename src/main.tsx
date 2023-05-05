import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Card from "./components/Card.tsx";
import CardList from "./components/CardList.tsx";
import "./index.css";
import "tachyons";
import { robots } from "./robots.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>
);
