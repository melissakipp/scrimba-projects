import '../scss/ScrimbaProjects.scss';
import BusinessCard from '../Projects/BusinessCard';

function ScrimbaProjects() {
  return (
    <div className='scrimba-main-content'>
      <h1>Scrimba Projects</h1>
      <ul className='scrimba-list'>
        <li><BusinessCard /></li>
      </ul>
      <a
      className="App-link"
      href="https://scrimba.com/learn/learnreact"
      target="_blank"
      rel="noopener noreferrer"
      >
        Learn React for free
      </a>
    </div>
  );
}

export default ScrimbaProjects;



