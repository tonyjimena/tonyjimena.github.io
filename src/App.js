import React, { useEffect } from "react";
import "./App.scss";

import Header from "./components/Header/";
import CardsSection from "./components/CardsSection/";
import MeSection from "./components/MeSection/";
import Footer from "./components/Footer/";

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
      <CardsSection />
      <MeSection />
      <Footer />
    </div>
  );
}

export default App;
