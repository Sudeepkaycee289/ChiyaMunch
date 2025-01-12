import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Profile from "./Profile/Profile";
import { Layout } from "./Components/Layout";
import Logged from "./Components/LogedIn/Logged";


export const App = () => { return(
  <Routes>
    <Route path="/" element={<Layout ><Hero/></Layout>} />
    <Route path="/profile" element={<Layout ><Profile/></Layout>} />
    <Route path="/ChiyaMunch" element={<Layout ><Logged/></Layout>} />
  </Routes>)
};
