import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Meme from "./components/Meme";
import Api from "./components/Api";
import Tracker from "./components/Tracker";

function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prev) => !prev)
  }

  return (
    <>
      <button onClick={toggle}>Show</button>
      <div className="flex-container">
        <div className="App">
          <Main />
          <Meme />
        </div>
        <div className="App">
          <Api />
        </div>
        <div className="App">
          {show && <Tracker />}
        </div>
      </div>
    </>
  );
}

export default App;
