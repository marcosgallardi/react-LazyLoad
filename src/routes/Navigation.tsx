import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";
import { ShoppingPage } from "../02-Componets-Patterns/Pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={"hola1"} />
          <Route path="/home" element={"hola1"} />
          <Route path="/" element={<ShoppingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
