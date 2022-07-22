import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
