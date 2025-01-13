import { Route, Routes } from "react-router-dom";
import Hero from "./Pages/Home/Hero.tsx";
import { Layout } from "./Components/Layout";
import Logged from "./Components/LogedIn/Logged";
import ItemsViewPage from './Components/Items/Items-View-Page';
import Profile from "./Pages/Profile/Profile";
import Checkout from "./Pages/Checkout/Checkout.tsx";

export const App = () => { return(
  <Routes>
    <Route path="/" element={<Layout ><Hero/></Layout>} />
    <Route path="/profile" element={<Layout ><Profile/></Layout>} />
    <Route path="/ChiyaMunch" element={<Layout ><Logged/></Layout>} />
    <Route path="/items/:category" element={<Layout ><ItemsViewPage/></Layout>} />
    <Route path="/Checkout" element={<Layout ><Checkout/></Layout>} />
  </Routes>)
};
