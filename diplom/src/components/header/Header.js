import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './style-head.css'
import logo from './../../img/sgspu.png'
import Home from "../../page/Home/Home";
import Nominations from "../../page/nomination/Nominations";
import Konkurs from "../../page/Konkurs/Konkurs";
import Gallary from "../../page/Gallary/Gallary";
import GallaryActive from "../../page/GallaryActive/GallaryActive";
import Registration from "../../page/Registration/Registration";
import Login from "../../page/Login/Login";



const Header = () => {

  return (
    <Router>
        <div className="header">
          <div className="container">
              <div className="row">
                  <div className="col-md-2 align-self-center">
                      <img src={logo} alt="logo" className="logoSGSPU"/>
                  </div>
                  <div className="col-md-6 align-self-center">
                      <nav className="menu">
                          <ul className="nav justify-content-end">
                            <li className="nav-item dropdown">
                              <Link to="/" className="nav-link one">О конкурсе</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/nomination" className="nav-link">Номинации</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/rules" className="nav-link">Правила</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/archive" className="nav-link">Архив</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/gallery" className="nav-link">Галерея</Link>
                            </li>
                          </ul>
                        </nav>
                  </div>
                  <div className="col-md-4 align-self-center">
                      <Link to="/registration"><button type="button" className="btn-reg" >Регистрация</button></Link>
                      <Link to="/login"><button type="button" className="btn-login">Авторизация</button></Link>
                  </div>
              </div>
          </div>
      </div>

      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/nomination" element={<Nominations/>}>
          </Route>
          <Route path="/rules" element={<Konkurs/>}>   
          </Route>
          <Route path="/archive" element={<Gallary/>}>
          </Route>
          <Route path="/gallery" element={<GallaryActive/>}>
          </Route>
          <Route path="/registration" element={<Registration/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
        </Routes>
    </Router> 
   
);
}
 
export default Header;