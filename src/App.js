import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//  Занятие № 1 Компоненты и коллекции
// const link = React.createElement(
//   "a",
//   { href: "https://yandex.ru", target: "_blank", rel: "noreferrer noopener" },
//   "ссылка на yandex"
// );

export default App;
