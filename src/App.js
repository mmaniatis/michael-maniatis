import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Contact from "./Pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/contact' exact component={<Contact/>} /> */}
      </Routes>

    </Router>
  );
}

export default App;