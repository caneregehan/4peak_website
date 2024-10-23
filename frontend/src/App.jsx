import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Navbar from "./components/Navbar";
// Import other components you want to route to
import Hakkımızda from "./components/Hakkımızda"; // Example component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/about" element={<Hakkımızda />} />
      </Routes>
    </Router>
  );
}

export default App;
