import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import ClientSupport from "./Pages/ClientSupport";
import Contact from "./Pages/Contact"
import LandingPage from "./Pages/LandingPage";
import SoftwareConsultation from "./Pages/SoftwareConsultation";
import SoftwareDevelopment from "./Pages/SoftwareDevelopment";
import TheTeam from "./Pages/TheTeam";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/client-support' element={<ClientSupport/>} />
        <Route path='/meet-the-team' element={<TheTeam />} />
        <Route path='/software-development' element={<SoftwareDevelopment />} />
        <Route path='/software-consultation' element={<SoftwareConsultation />} />
      </Routes>

    </Router>
  );
}

export default App;