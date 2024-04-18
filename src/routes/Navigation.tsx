import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                RegisterPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikBasic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Formik Yup
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
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/formikBasic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/lazy1" element={"About"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
