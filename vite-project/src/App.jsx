import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "tailwindcss";
import './App.css';
import Header from '../src/components/header.jsx';
import Footer from '../src/components/footer.jsx';
import Home from '../src/components/home.jsx';
import { Outlet } from 'react-router-dom';

function App() {
 

  return (
    <>

      <Header/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
