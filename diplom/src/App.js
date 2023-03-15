// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header/Header';
import Login from './page/Login/Login';
import PersonalAccountUser from './page/PersonalAccount_user/PersonalAccount_user';
import PersonalAccountJury from './page/PersonalAccount_jury/PersonalAccount_jury';
import Gallary from './page/Gallary/Gallary'
import Registration from './page/Registration/Registration';
import Nominations from './page/nomination/Nominations'
import Home from './page/Home/Home';
import Konkurs from './page/Konkurs/Konkurs';
import GallaryActive from './page/GallaryActive/GallaryActive';

import Footer from './components/footer/Footer';
import './style/main.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='flex-shrink-0'>
        <GallaryActive/>
        {/* <Login/> */}
        {/* <PersonalAccountUser/> */}
        {/* <PersonalAccountJury/> */}
        {/* <Gallary/> */}
        {/* <Registration/> */}
        {/* <Home/> */}
        {/* <Nominations/> */}
        {/* <Konkurs/> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
