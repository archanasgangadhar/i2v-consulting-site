import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LeftRedBand from "./components/LeftRedBand";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ClientLogin from "./pages/ClientLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import VendorLogin from "./pages/VendorLogin";
import AssessmentWizard from "./pages/AssessmentWizard";
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
          <Route path="/services" element={<Services />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/client" element={<ClientLogin />} />
          <Route path="/login/employee" element={<EmployeeLogin />} />
          <Route path="/login/vendor" element={<VendorLogin />} />
           <Route path="/assessment" element={<AssessmentWizard />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
