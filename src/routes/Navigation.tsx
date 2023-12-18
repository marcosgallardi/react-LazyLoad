import {
  BrowserRouter ,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>

       
       <Routes>
         <Route path="/lazy1" element={} />
       </Routes>
      </div>
    </BrowserRouter>
  );
}