import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import { Layout } from "./Components/Layout";
import Logged from "./Components/LogedIn/Logged";
import ItemsViewPage from './Components/Items/Items-View-Page';
import ProfileInfo from "./Profile/ProfileInfo";

export const App = () => { return(
  <Routes>
    <Route path="/" element={<Layout ><Hero/></Layout>} />
    <Route path="/profile" element={<Layout ><ProfileInfo/></Layout>} />
    <Route path="/ChiyaMunch" element={<Layout ><Logged/></Layout>} />
    <Route path="/items/:category" element={<Layout ><ItemsViewPage/></Layout>} />
  </Routes>)
};
