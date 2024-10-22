import "./App.css";
import Anasayfa from "./components/Anasayfa";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-1">
        <Anasayfa />
      </div>
    </>
  );
}

export default App;
