import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
import LeftRedBand from "./components/LeftRedBand";
import Header from "./components/Header";
import Footer from "./components/Footer";

<<<<<<< HEAD

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Consultancy from "./pages/Consultancy";
import Execution from "./pages/Execution";
=======
import Home from "./pages/Home";
import About from "./pages/About";
import Consultancy from "./pages/consultancy";
import Execution from "./pages/Execution";

>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import Login from "./pages/Login";
=======
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
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
<<<<<<< HEAD
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Style  from "./components/Style";
import Service from"./pages/Services1";
import CustomerDashboard from "./pages/CustomerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import UserDashboard from "./pages/UserDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import {ProtectedRoute} from "./components/ProtectedRoute";
import RouteGuard from "./components/ProtectedRoute";
//import Kyc from "./pages/Kyc";
import EmployeeJoiningWizard from "./components/employee-form/EmployeeJoiningWizard";

export default function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
=======







export default function App() {
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
  return (
    <Router>
      <LeftRedBand />
      <Header />
<<<<<<< HEAD
      
      <Style/>
      {/* Breadcrumbs below header */}
       <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset-password" element={<ResetPassword />} /> 
        <Route path="/login" element={ 
          <RouteGuard isPublic={true}>
      <Login />
    </RouteGuard>} />

        <Route path="/login/client" element={<ClientLogin />} />
        <Route path="/login/employee" element={<EmployeeLogin />} />
        <Route path="/login/vendor" element={<VendorLogin />} />

        {/* Role-Based Dashboards */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute allowedRoles={["general", "user"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/dashboard"
          element={
            <ProtectedRoute allowedRoles={["employee","hr"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vendor/dashboard"
          element={
            <ProtectedRoute allowedRoles={["vendor"]}>
              <VendorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customer/dashboard"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />


        {/* <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} /> */}

        {/* Services */}
        <Route path="/services" element={<Service/>}/>
        <Route path="/services/consultancy" element={<Consultancy />} />
        <Route path="/services/execution" element={<Execution />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/about/ourstory" element={<OurStory />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/careers/vacancy" element={<Vacancy />} />
        <Route path="/careers/onlineinterview" element={<OnlineInterview />} />
        <Route path="/careers/referral" element={<Referral />} />
        <Route path="/services/consultancy/go-to-market" element={<GoToMarket />} />
        <Route path="/services/consultancy/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/services/execution/staffing" element={<Staffing />} />
        <Route path="/services/execution/training" element={<Training />} />
        <Route path="/services/execution/atl-btl" element={<ATLBTL />} />
        <Route path="/services/execution/drones" element={<Drones />} />
        <Route path="/careers/kyc" element={<EmployeeJoiningWizard/>}/>
        {/* <Route path="/kyc" element={<EmployeeJoiningWizard/>}/> */}
      </Routes> 
=======

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

>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
      <Footer />
    </Router>
  );
}
