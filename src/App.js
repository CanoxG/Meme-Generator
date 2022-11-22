import "./App.css";
import Main from "./components/Main";
import Meme from "./components/Meme";
import Api from "./components/Api";

function App() {
  return (
    <div className="flex-container">
      <div className="App">
        <Main />
        <Meme />
      </div>
      <div className="App">
        <Api />
      </div>
    </div>
  );
}

export default App;
