import logo from './logo.svg';
import './App.css';

function App() {
  const java = process.env.SECRET ?? 'nothings';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> { java }.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
      </header>
    </div>
  );
}

export default App;
