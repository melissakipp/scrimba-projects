
import './scss/App.scss';
import Home from './Pages/Home';
import ScrimbaProjects from './Pages/ScrimbaProjects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='scrimba-projects' element={<ScrimbaProjects />} />
        <Route path='contact' element={
        <div>
          <h2>Contact Page</h2>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
