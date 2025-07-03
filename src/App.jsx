import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./page/Services";
import Home from "./page/Home";
import Support from "./page/Support";
import Goal from "./page/Goal";
import RegistrationForm from "./page/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/form" element={<RegistrationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
