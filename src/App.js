import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Portafolio from './components/Portafolio';
import Redirect from './components/Redirect';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function App() {
  const history = useNavigate();
  const location = useQuery();

  console.log(location.get('edad'));

  const forward = () => {
    history(1);
  };

  const back = () => {
    history(-1);
  };

  const push = (url) => {
    history(url);
  };

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
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => push('/chanchitofeliz')}>Push</button>
        <Routes>
          <Route path="/" element={<Redirect to="/home" />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/portafolio/*" element={<Portafolio />} />
          <Route path="*" element={<h1>404: Ruta no encontrada</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
