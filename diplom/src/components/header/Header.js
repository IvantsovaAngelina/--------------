import {Link} from "react-router-dom";
import './style-head.css'
import logo from './../../img/sgspu.png'




const Header = () => {

  return (
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

   
);
}
 
export default Header;