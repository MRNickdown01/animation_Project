import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderSection from "./Pages/HeaderSection";
import AboutSection from "./Pages/AboutSection";
import MainRoutePage from "./Pages/MainRoutePage";
import AmazingProduct from "./Pages/AmazingProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoutePage />}></Route>
        {/* <Route path="/product-section" element={<AmazingProduct />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
