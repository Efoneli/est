import FlashCard from "../pages/FlashCard";
import Home from "../pages/Home";


import { Routes, Route } from "react-router-dom";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flashCard" element={<FlashCard />} />
    </Routes>
  );
};

export default Routers;
