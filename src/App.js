import logo from './images/logo.svg';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Scrimba Projects
        </h1>
        <ol className='project-list'>
          <li>Digital Business Card</li>
        </ol>
        <a
          className="App-link"
          href="https://scrimba.com/learn/learnreact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React for free
        </a>
      </header>
    </div>
  );
}

export default App;
