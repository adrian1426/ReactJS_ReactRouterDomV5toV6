import { Link, Route, Routes } from "react-router-dom";

const Portafolio = () => {
  return (
    <div>
      <h1>Protafolio component</h1>
      <ul>
        <li>
          <Link to="proyecto1">Proyecto 1</Link>
        </li>
        <li>
          <Link to="proyecto2">Proyecto 2</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="proyecto1" element={<h1>Estamos en proyecto 1</h1>} />
          <Route path="proyecto2" element={<h1>Estamos en proyecto 2</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Portafolio;