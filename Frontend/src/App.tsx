import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Profile from "./Profile/Profile";
import { Layout } from "./Components/Layout";


export const App = () => { return(
  <Routes>
    <Route path="/" element={<Layout ><Hero/></Layout>} />
    <Route path="/profile" element={<Layout ><Profile/></Layout>} />
  </Routes>)
};
