import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; //
import Hero from "./Hero";
import Header from "./Components/Header/Header";
import Logged from "./Components/Home-Loggedin/Logged";
import ItemsPage from "./Components/Home-Loggedin/ItemsPage";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderProvider } from "./Components/Header/HeaderContext";
import Profile from "./Profile/Profile";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Profile />
      {/*    
      <Hero />
      <Logged />
      <ItemsPage /> */}
    </Router>
  </StrictMode>
);
