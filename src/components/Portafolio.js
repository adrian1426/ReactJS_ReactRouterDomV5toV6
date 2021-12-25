import { NavLink, Route, Routes } from "react-router-dom";
import Proyecto from "./Proyecto";

const Portafolio = () => {
  return (
    <div>
      <h1>Protafolio component</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => "miClassActive"}
            to="proyecto1/1"
          >
            Proyecto 1
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            to="proyecto1/2"
          >
            Proyecto 2
          </NavLink>
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