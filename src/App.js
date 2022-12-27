import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Contact from "./Pages/Contact"
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/contact' exact component={<Contact/>} /> */}
      </Routes>

    </Router>
  );
}

export default App;