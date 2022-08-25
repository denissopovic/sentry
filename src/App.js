import logo from "./logo.svg";
import "./App.css";

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const throwError = () => {
  throw new Error("This is an error");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The random number is: {randomNumber(10)}</p>
        <button onClick={throwError}>Break the world</button>
      </header>
    </div>
  );
}

export default App;
