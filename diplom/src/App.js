import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import axios from 'axios';
import './style/main.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nominations from './page/nomination/Nominations';
import Home from './page/Home/Home'
import Konkurs from './page/Konkurs/Konkurs'
import Gallary from './page/Gallary/Gallary'
import GallaryActive from './page/GallaryActive/GallaryActive'
import Registration from './page/Registration/Registration'
import Login from './page/Login/Login'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
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
        <Footer/>
      </div>
    
    </Router>
    
  );
}

export default App;
