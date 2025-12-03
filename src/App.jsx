import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LeftRedBand from "./components/LeftRedBand";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Consultancy from "./pages/consultancy";
import Execution from "./pages/Execution";

import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ClientLogin from "./pages/ClientLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import VendorLogin from "./pages/VendorLogin";
import Assessment from "./pages/AssessmentWizard";
import OurStory from "./pages/OurStory";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Vacancy from "./pages/Vacancy";
import OnlineInterview from "./pages/OnlineInterview";
import Referral from "./pages/Referral";
import GoToMarket from "./pages/GoToMarket";
import DigitalTransformation from "./pages/DigitalTransformation";
import Staffing from "./pages/Staffing";
import Training from "./pages/Training";
import ATLBTL from "./pages/ATLBTL";
import Drones from "./pages/Drones";







export default function App() {
  return (
    <Router>
      <LeftRedBand />
      <Header />

      {/* Push content down so it's not behind header */}
      <div className="pt-20 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/client" element={<ClientLogin />} />
          <Route path="/login/employee" element={<EmployeeLogin />} />
          <Route path="/login/vendor" element={<VendorLogin />} />
          <Route path="/consultancy" element={<Consultancy/>} />
          <Route path="/Execution" element={<Execution />} />
           <Route path="/assessment" element={<Assessment />} />
           <Route path="/ourstory" element={<OurStory />} />
           <Route path="/mission" element={<Mission />} />
           <Route path="/team" element={<Team />} />
           <Route path="/vacancy" element={<Vacancy />} />
           <Route path="/onlineinterview" element={<OnlineInterview />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/go-to-market" element={<GoToMarket />} />
<Route path="/digital-transformation" element={<DigitalTransformation />} />
<Route path="/staffing" element={<Staffing />} />
<Route path="/training" element={<Training />} />
<Route path="/atl-btl" element={<ATLBTL />} />
<Route path="/drones" element={<Drones />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
