import { Routes, Route, Link } from 'react-router-dom';
import Portafolio from './components/Portafolio';

function App() {
  return (
    <div >
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/portafolio/*" element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
