import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/router/AppRouter";
import TopBar from "./components/router/TopBar";
//import "./App.css";
import "./bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
