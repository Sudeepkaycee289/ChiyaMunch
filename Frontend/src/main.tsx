import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Ensure this points to your Tailwind CSS file
import Header from './Header/header'
import Hero from './Hero'
import HeaderL from './Header/HeaderL';
import Logged from './Home-Loggedin/Logged';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header/>
      <Hero/>
      {/* <HeaderL/> */}
      {/* <Logged/> */}
    </Router>
  </StrictMode>,
)
