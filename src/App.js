import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/page/home';
import Portofolio from './Components/page/portofolio';
import Farewell from './Components/page/farewell';
import Cek from './Components/page/cek';
import Indah from './Components/page/indah';
import PageTransition from './Components/page/PageTransition';
import './Styles/App.css';

function App() {
  const [message] = useState("");

  useEffect(() => {
    fetch('/api/comments', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error!!!!! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching API:", error));
    
  }, []);

  console.log(message);

  return (
    <BrowserRouter>
      <ConditionalNavbar />
      {/* <div> className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
        </header>
      </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/portofolio' element={<Portofolio />} />
        <Route path='/GwKangen' element={<Cek />} />
        <Route path='/farewell' element={<Farewell />} />
        <Route path='/farewell/indah' element={<PageTransition><Indah /></PageTransition>} />
      </Routes>
    </BrowserRouter>
  );
}

const ConditionalNavbar = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/farewell','/farewell/indah']; // Daftar rute yang tidak menampilkan Navbar
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return shouldShowNavbar ? <Navbar /> : null;
};

export default App;
