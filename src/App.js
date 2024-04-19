import React, { useState } from "react";
import Header from "./components/Header";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import "./app.css";

function App(props) {
  const [showResister, setResister] = useState(false);

  const handleShowResister = () => {
    setResister(true);
  };
  const handleCloseResister = () => {
    setResister(false);
  };
  return (
    <div className="App">
      <Header
        handleShowResister={handleShowResister}
        showResister={showResister}
        handleCloseResister={handleCloseResister}
      />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

export default App;
