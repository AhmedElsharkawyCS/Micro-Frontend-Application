import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

//to fix class name collision issue
const generateClassName = createGenerateClassName({ productionPrefix: "co-a" });
export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
