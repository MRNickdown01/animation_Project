import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderSection from "./Pages/HeaderSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderSection />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
