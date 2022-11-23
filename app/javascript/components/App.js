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
import CssBaseline from '@mui/material/CssBaseline';



const App = (props) => {
 
  const [pastas, setPastas] = useState([])

  useEffect(() => {
    readPastas()
  }, [])

  const readPastas = () => {
    fetch("https://perfect-pasta-pairings.herokuapp.com/pasta")
      .then((response) => response.json())
      .then((payload) => {
        setPastas(payload)
      })
      .catch((error) => console.log(error))
  }

  const createPasta = (newPasta) => {
    fetch("https://perfect-pasta-pairings.herokuapp.com/pasta", {
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
    fetch(`https://perfect-pasta-pairings.herokuapp.com/pasta/${id}`, {
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
    fetch(`https://perfect-pasta-pairings.herokuapp.com/pasta/${id}`, {
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
        paper: '#ECECDC',
        default: '#F9F9F1',
      },
      text: {
        primary: '#083D77',
        secondary: '#083D77',
        disabled: '#083D77',
        hint: '#083D77',
      },
      info: {
        main: '#F9F9F1',
      }
    },
  });
  

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
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