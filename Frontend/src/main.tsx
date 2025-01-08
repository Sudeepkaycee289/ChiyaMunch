import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Ensure this points to your Tailwind CSS file
import Hero from './Hero'
import Header from './Components/Header/header';
import Logged from './Components/Home-Loggedin/Logged';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header/>
      <Hero/>
      {/* <Logged/> */}
    </Router>
  </StrictMode>,
)
