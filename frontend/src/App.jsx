import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Navbar from "./components/Navbar";
// Import other components you want to route to
import Hakkımızda from "./components/Hakkımızda"; // Example component
import Footer from "./components/Footer";
import Works from "./components/Works";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/about" element={<Hakkımızda />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
