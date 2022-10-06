import logo from '../images/logo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Projects
        </h1>
        <nav>
          <ul className='project-sites'>
            <li>Scrimbra Projects</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Home