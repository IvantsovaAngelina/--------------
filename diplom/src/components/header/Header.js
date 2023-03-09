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
                                <a className="nav-link one" href="../index.html">О конкурсе</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Номинации</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Правила</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Архив</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Галерея</a>
                              </li>
                            </ul>
                          </nav>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <button type="button" className="btn-reg" >Регистрация</button>
                        <button type="button" className="btn-login">Авторизация</button>
                    </div>
                </div>
            </div>
        </div>
);
}
 
export default Header;