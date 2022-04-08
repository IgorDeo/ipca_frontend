import React, { useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import * as ReactDOMClient from "react-dom/client";

const App = () => {
//   useEffect(() => {
//     document.title = "MCS Markup - IPCA Acumulado";
//   }, []);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(<App tab="home" />);
