import "./App.css";
import Modal from "./Modal/Modal";
import { useState } from "react";

function App() {
  const [isActive, toggleActive] = useState(false);

  return (
    <div className="app__wrap">
      <button className="open__modal" onClick={() => toggleActive(true)}>
        Register
      </button>
      {isActive ? (
        <Modal onEsc={toggleActive} onOutside={toggleActive} />
      ) : null}
    </div>
  );
}

export default App;
