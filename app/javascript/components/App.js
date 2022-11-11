import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Index from './pages/Index';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


const App = () => {
  const [pastas, setPastas] = useState([])
 
    return (
      <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index pastas={pastas} />} />
        <Route path="/show" element={<Show />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
    );
  }


export default App
