import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/page/home';
import Portofolio from './Components/page/portofolio';
import Form from './Components/page/form';
import Adduser from './Components/page/addUser';
import Edituser from './Components/page/editUser';
import './Styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portofolio' element={<Portofolio/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/addUser' element={<Adduser/>} />
          <Route path='/editUser/:id' element={<Edituser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
