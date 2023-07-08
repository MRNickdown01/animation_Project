import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderSection from "./Pages/HeaderSection";
import AboutSection from "./Pages/AboutSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderSection />}></Route>
        <Route path="/about-section" element={<AboutSection />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
