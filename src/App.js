import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header/";
import ThemePicker from "./components/ThemePicker/";

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight / 100}px`
    );
  }, []);
  return (
    <div className="App">
      <Header />
      <ThemePicker />
    </div>
  );
}

export default App;
