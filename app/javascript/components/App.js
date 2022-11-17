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
import MockData from "./MockData";
import AboutUs from "./pages/AboutUs";



const App = (props) => {
 
  const [pastas, setPastas] = useState(MockData)

  const readPastas = () => {
    fetch("/pastas")
      .then((response) => response.json())
      .then((payload) => {
        setPastas(payload)
      })
      .catch((error) => console.log(error))
  }

  const createPasta = (pasta) => {
    fetch("http://localhost:3000/pasta", {
      body: JSON.stringify(pasta),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then((payload)=> readPastas(payload))
    .catch((errors) => console.log("Pasta create errors: ", errors))
  }

  const updatePasta = (pasta, id) => {
    fetch(`http://localhost:3000/${id}`, {
      body: JSON.stringify(pasta, id),
      headers: {
        "Content-Type": "application/json"
      },
      method: "Patch"
    })
    .then(response => response.json())
    .then((payload)=> readPastas(payload))
    .catch((errors) => console.log("Pasta edit errors: ", errors))
  }
 
    return (
      <>
    <Header {...props}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index pastas={ pastas } />} />
        <Route path="/show/:id" element={<Show pastas={ pastas }/>} />
        <Route path="/new" element={<New createPasta={ createPasta } />} />
        <Route path = "/edit/:id" element = {<Edit pastas={ pastas } updatePasta={ updatePasta }/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
    );
  }


export default App