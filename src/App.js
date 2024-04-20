import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/page/home';
import Portofolio from './Components/page/portofolio';
import Form from './Components/page/form';
import './Styles/App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portofolio' element={<Portofolio/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
