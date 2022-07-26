import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Food from "./Components/Travelblog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Travel' exact element={<Food />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
