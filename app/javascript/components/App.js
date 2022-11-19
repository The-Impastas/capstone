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
import { useState, useEffect } from 'react';
import AboutUs from "./pages/AboutUs";
import ProtectedIndex from "./pages/ProtectedIndex";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css" 



const App = (props) => {
 
  const [pastas, setPastas] = useState([])

  useEffect(() => {
    readPastas()
  }, [])

  const readPastas = () => {
    fetch("http://localhost:3000/pasta")
      .then((response) => response.json())
      .then((payload) => {
        setPastas(payload)
      })
      .catch((error) => console.log(error))
  }

  const createPasta = (newPasta) => {
    fetch("http://localhost:3000/pasta", {
      body: JSON.stringify(newPasta),
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
    fetch(`http://localhost:3000/pasta/${id}`, {
      body: JSON.stringify(pasta, id),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then((payload)=> readPastas(payload))
    .catch((errors) => console.log("Pasta edit errors: ", errors))
  }

  const deletePasta = (pasta, id) => {
    fetch(`http://localhost:3000/pasta/${id}`, {
      body: JSON.stringify(pasta, id),
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then((payload)=> readPastas(payload))
    .catch((errors) => console.log("Pasta delete errors: ", errors))
  }


  // adding theme for website// 
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F95738',
      },
      secondary: {
        main: '#EE964B',
      },
      background: {
        default: '#f2f2e7',
        paper: '#ECECDC',
        card: '#F95738',
      },
      text: {
        primary: '#083D77',
        secondary: '#083D77',
        disabled: '#083D77',
        hint: '#083D77',
      },
      info: {
        main: '#083D77',
      }
    },
  });
  

    return (
      <ThemeProvider theme={theme}>
    <Header {...props}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index pastas={ pastas } />} />
        <Route path="/new" element={<New createPasta={ createPasta } {...props}/>} />
        <Route path="/protectedindex" element={<ProtectedIndex pastas={ pastas } {...props}/>} />
        <Route path="/show/:id" element={<Show pastas={ pastas } {...props}/>} />
        <Route path="/edit/:id" element = {<Edit pastas={ pastas } deletePasta={ deletePasta } updatePasta={ updatePasta } {...props}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </ThemeProvider>
    );
  }
export default App