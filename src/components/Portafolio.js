import { Link, Route, Routes } from "react-router-dom";
import Proyecto from "./Proyecto";

const Portafolio = () => {
  return (
    <div>
      <h1>Protafolio component</h1>
      <ul>
        <li>
          <Link to="proyecto1/1">Proyecto 1</Link>
        </li>
        <li>
          <Link to="proyecto1/2">Proyecto 2</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="proyecto1/:id" element={<Proyecto />} />
        </Routes>
      </div>
    </div>
  );
};

export default Portafolio;