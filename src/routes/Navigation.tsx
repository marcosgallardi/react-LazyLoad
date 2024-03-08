import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";

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
          <Route path="/home" element={"Home"} />
          <Route path="/lazy1" element={"About"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
