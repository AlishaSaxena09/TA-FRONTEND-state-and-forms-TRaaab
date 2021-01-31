import "./App.css";
import React from "react";
import Modal from "./modal";
import Toggle from "./toggle";

function App(props) {
  return (
    <div>
      <Toggle />
      <Modal />
    </div>
  );
}

export default App;
