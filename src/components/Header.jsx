import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
<<<<<<< HEAD
import Bread from "./Breadcrums";

// ====================== HELPER HOOK ======================
const useActive = (to) => {
  const { pathname } = useLocation();
  return pathname === to || pathname.startsWith(to + "/");
};

// ====================== HEADER COMPONENT ======================
export default function Header() {
=======

export default function Header() {
  const location = useLocation();
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [shrink, setShrink] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
<<<<<<< HEAD
  const closeMobile = () => setMobileOpen(false);
  const toggleDropdown = (key) =>
    setOpenDropdown(openDropdown === key ? null : key);

  // Scroll shrink effect
=======
  const toggleDropdown = (key) =>
    setOpenDropdown(openDropdown === key ? null : key);

>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
  // Auth state
  const [isAuth, setIsAuth] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const refreshAuth = () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      setIsAuth(!!token);
      setUserRole(role);
    };

    refreshAuth();
    const onStorage = () => refreshAuth();
    window.addEventListener("storage", onStorage);
    window.addEventListener("i2v:auth", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("i2v:auth", onStorage);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuth(false);
    setUserRole(null);
    window.location.href = "/";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300 ${
        shrink ? "py-1" : "py-4"
      }`}
      style={{ fontFamily: "Candara" }}
    >
      {/* Top Red Bar */}
      <div className="w-full h-1.5 bg-[#D32F2F] absolute top-0 left-0"></div>

      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 sm:gap-4">
          <img
            src="/assets/images/logo2.png"
            alt="Idea to Value logo"
            className={`object-contain transition-all duration-300 ease-in-out h-10 sm:h-12 lg:h-14 ${
              shrink ? "scale-90" : "scale-100"
            }`}
          />
          <span
            className={`hidden sm:inline-block font-bold tracking-wide text-[#222] whitespace-nowrap transition-all duration-300 ease-in-out ${
              shrink ? "opacity-0 -translate-x-2 w-0" : "opacity-100 translate-x-0 w-auto"
            } text-lg sm:text-xl lg:text-2xl`}
=======
  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl 
        border-b border-gray-300 shadow-md transition-all duration-300
        ${shrink ? "py-1" : "py-3"}
      `}
      style={{ fontFamily: "Candara" }}
    >
      <div className="w-full h-[3px] bg-[#D32F2F] absolute top-0 left-0"></div>

      <div className="flex items-center justify-between px-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/images/logo2.jpg"
            className={`rounded-lg shadow-md transition-all ${
              shrink ? "h-10" : "h-14"
            }`}
          />
          <span
            className={`font-bold tracking-wide text-[#222] transition-all ${
              shrink ? "text-xl" : "text-2xl"
            }`}
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
          >
            Idea to Value
          </span>
        </Link>

<<<<<<< HEAD
        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-4xl text-[#222] p-2 rounded hover:bg-gray-200 transition"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
=======
        {/* MOBILE ICON */}
        <button
          className="md:hidden text-4xl text-[#222]"
          onClick={toggleMobile}
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
        >
          {mobileOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>

        {/* DESKTOP NAV */}
<<<<<<< HEAD
        <nav className="hidden lg:flex justify-items-center justify-end items-center gap-8 flex-wrap font-semibold text-lg">
          <NavItem to="/" label="Home" />

          <Dropdown
            title="About Us"
            items={[
              { label: "Our Story", to: "/about/ourstory" },
              { label: "Team", to: "/about/team" },
              { label: "Mission", to: "/about/mission" },
            ]}
            to="/about"
          />

=======
        <nav className="hidden md:flex items-center gap-10 font-semibold text-lg">

          <NavItem to="/" label="Home" />

          {/* ABOUT */}
          <Dropdown
            title="About Us"
            items={[
              { label: "Our Story", to: "/ourstory" },
              { label: "Team", to: "/team" },
              { label: "Mission", to: "/mission" },
            ]}
          />

          {/* SERVICES WITH MULTI-LEVEL SUBMENU */}
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
          <Dropdown
            title="Services"
            items={[
              {
                label: "Consultancy",
                children: [
<<<<<<< HEAD
                  { label: "Go-To-Market", to: "/services/consultancy/go-to-market" },
                  { label: "Digital Transformation", to: "/services/consultancy/digital-transformation" },
                ],
                to: "/services/consultancy",
=======
                  { label: "Go-To-Market", to: "/go-to-market" },
                  { label: "Digital Transformation", to: "/digital-transformation" },
                ],
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
              },
              {
                label: "Execution",
                children: [
<<<<<<< HEAD
                  { label: "Staffing", to: "/services/execution/staffing" },
                  { label: "Training", to: "/services/execution/training" },
                  { label: "ATL / BTL", to: "/services/execution/atl-btl" },
                  { label: "Drones", to: "/services/execution/drones" },
                ],
                to: "/services/execution",
              },
            ]}
            to="/services"
=======
                  { label: "Staffing", to: "/staffing" },
                  { label: "Training", to: "/training" },
                  { label: "ATL / BTL", to: "/atl-btl" },
                  { label: "Drones", to: "/drones" },
                ],
              },
            ]}
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
          />

          <NavItem to="/clients" label="Clients" />

          <Dropdown
            title="Careers"
            items={[
<<<<<<< HEAD
              { label: "Vacancy", to: "/careers/vacancy" },
              { label: "Online Interview", to: "/careers/onlineinterview" },
              { label: "Referral Program", to: "/careers/referral" },
              { label: "Kyc", to: "/careers/kyc" },
            ]}
            to="/careers"
          />

          {isAuth ? (
            <Dropdown
              title="Account"
              items={[
                {
                  label: "My Dashboard",
                  to:
                    userRole === "employee"
                      ? "/employee/dashboard"
                      : userRole === "vendor"
                      ? "/vendor/dashboard"
                      : userRole === "customer"
                      ? "/customer/dashboard"
                      : "/user/dashboard",
                },
                { label: "Logout", action: logout },
                { label: "Change Password", to: `/forgot-password` },
              ]}
              to={
                userRole === "employee"
                  ? "/employee/dashboard"
                  : userRole === "vendor"
                  ? "/vendor/dashboard"
                  : userRole === "customer"
                  ? "/customer/dashboard"
                  : "/user/dashboard"
              }
            />
          ) : (
            <Dropdown
              title="Login"
              items={[
                { label: "Customer Login", to: "/login/client" },
                { label: "Vendor Login", to: "/login/vendor" },
                { label: "Employee Login", to: "/login/employee" },
              ]}
              to="/login"
            />
          )}
=======
              { label: "Vacancy", to: "/vacancy" },
              { label: "Online Interview", to: "/onlineinterview" },
              { label: "Referral Program", to: "/referral" },
            ]}
          />

          <Dropdown
            title="Login"
            items={[
              { label: "Login", to: "/login" },
              { label: "Customer Login", to: "/customer-login" },
              { label: "Vendor Login", to: "/vendor-login" },
              { label: "Employee Login", to: "/employee-login" },
            ]}
          />
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7

          <NavItem to="/contact" label="Contact" />
        </nav>
      </div>

<<<<<<< HEAD
      {/* MOBILE MENU */}
      {mobileOpen && (
        <MobileMenu
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          closeMobile={closeMobile}
          isAuth={isAuth}
          userRole={userRole}
          logout={logout}
        />
      )}

      <Bread />
=======
      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <MobileMenu openDropdown={openDropdown} toggleDropdown={toggleDropdown} />
      )}
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
    </header>
  );
}

<<<<<<< HEAD
// ====================== NAV ITEM ======================
const NavItem = ({ to, label }) => {
  const active = useActive(to);
  return (
    <Link
      to={to}
      className={`relative group px-2 py-1 rounded-md transition-colors duration-200 ${
        active ? "text-[#D32F2F]" : "text-[#222] hover:text-[#D32F2F] hover:bg-gray-100"
=======
/* ======================================================================================
   NAV ITEM
====================================================================================== */
const NavItem = ({ to, label }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      className={`relative group ${
        active ? "text-[#D32F2F]" : "text-[#222] hover:text-[#D32F2F]"
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-[2px] bg-[#D32F2F] transition-all ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
};

<<<<<<< HEAD
// ====================== DROPDOWN ======================
const Dropdown = ({ title, items, to }) => {
  const activeParent = useActive(to);
  return (
    <div className="relative group cursor-pointer">
      <Link
        to={to}
        className={`relative px-2 py-1 rounded-md transition-colors duration-200 ${
          activeParent ? "text-[#D32F2F]" : "text-[#222] hover:text-[#D32F2F] hover:bg-gray-100"
        }`}
      >
        {title}
        <span
          className={`absolute -bottom-1 left-0 h-[2px] bg-[#D32F2F] transition-all ${
            activeParent ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </Link>

      {/* Dropdown Panel */}
      <div className="absolute left-0 top-full mt-1 hidden group-hover:block max-w-md lg:max-w-lg bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200 rounded-xl p-4 z-50">
        {items.map((item, i) => {
          const hasChildren = item.children?.length > 0;
          return (
            <div key={i} className="relative">
              {hasChildren ? (
                <div className="group/submenu relative">
                  <Link
                    to={item.to}
                    className={`block px-3 py-2 text-md rounded-md transition-colors duration-200 ${
                      useActive(item.to) ? "bg-[#D32F2F] text-white" : "hover:bg-[#D32F2F] hover:text-white"
                    }`}
                  >
                    {item.label} <span className="ml-1">›</span>
                  </Link>
                  <div className="absolute left-full top-0 hidden group-hover/submenu:block max-w-sm lg:max-w-md bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200 rounded-xl p-3">
                    {item.children.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.to}
                        className={`block px-2 py-1 text-md rounded-md transition-colors duration-200 ${
                          useActive(sub.to) ? "bg-[#D32F2F] text-white" : "hover:bg-[#D32F2F] hover:text-white"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.action ? (
                <button
                  onClick={item.action}
                  className="w-full text-left block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#D32F2F] hover:text-white"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.to}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    useActive(item.to) ? "bg-[#D32F2F] text-white" : "hover:bg-[#D32F2F] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ====================== MOBILE MENU ======================
const MobileMenu = ({ openDropdown, toggleDropdown, closeMobile, isAuth, userRole, logout }) => (
  <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-300 rounded-b-2xl px-6 py-6 space-y-3 flex flex-col text-left shadow-lg">
    <MobileLink to="/" label="Home" closeMobile={closeMobile} />

    <MobileDropdown
      title="About Us"
      to="/about"
      openDropdown={openDropdown}
      toggleDropdown={toggleDropdown}
      closeMobile={closeMobile}
      list={[
        { label: "Our Story", to: "/about/ourstory" },
        { label: "Team", to: "/about/team" },
        { label: "Mission", to: "/about/mission" },
      ]}
    />

    <MobileDropdown
      title="Services"
      to="/services"
      openDropdown={openDropdown}
      toggleDropdown={toggleDropdown}
      closeMobile={closeMobile}
      list={[
        {
          label: "Consultancy",
          to: "/services/consultancy",
          children: [
            { label: "Go-To-Market", to: "/services/consultancy/go-to-market" },
            { label: "Digital Transformation", to: "/services/consultancy/digital-transformation" },
          ],
        },
        {
          label: "Execution",
          to: "/services/execution",
          children: [
            { label: "Staffing", to: "/services/execution/staffing" },
            { label: "Training", to: "/services/execution/training" },
            { label: "ATL / BTL", to: "/services/execution/atl-btl" },
            { label: "Drones", to: "/services/execution/drones" },
          ],
        },
      ]}
    />

    <MobileLink to="/clients" label="Clients" closeMobile={closeMobile} />

    <MobileDropdown
      title="Careers"
      to="/careers"
      openDropdown={openDropdown}
      toggleDropdown={toggleDropdown}
      closeMobile={closeMobile}
      list={[
        { label: "Vacancy", to: "/careers/vacancy" },
        { label: "Online Interview", to: "/careers/onlineinterview" },
        { label: "Referral Program", to: "/careers/referral" },
        { label: "Kyc", to: "/careers/kyc" },
      ]}
    />

    {isAuth ? (
      <MobileDropdown
        title="Account"
        to={
          userRole === "employee"
            ? "/employee/dashboard"
            : userRole === "vendor"
            ? "/vendor/dashboard"
            : userRole === "customer"
            ? "/customer/dashboard"
            : "/user/dashboard"
        }
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        closeMobile={closeMobile}
        list={[
  {
    label: "My Dashboard",
    to:
      userRole === "employee"
        ? "/employee/dashboard"
        : userRole === "vendor"
        ? "/vendor/dashboard"
        : userRole === "customer"
        ? "/customer/dashboard"
        : "/user/dashboard",
  },
  {
    label: "Logout",
    action: () => {
      logout();
      closeMobile();
    },
  },
  {
    label: "Change Password",
    to: `/forgot-password`,
  },
]}

      />
    ) : (
      <MobileDropdown
        title="Login"
        to="/login"
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        closeMobile={closeMobile}
        list={[
          { label: "Customer Login", to: "/login/client" },
          { label: "Vendor Login", to: "/login/vendor" },
          { label: "Employee Login", to: "/login/employee" },
        ]}
      />
    )}

    <MobileLink to="/contact" label="Contact" closeMobile={closeMobile} />
  </div>
);

// ====================== MOBILE LINK ======================
const MobileLink = ({ to, label, closeMobile }) => {
  const active = useActive(to);
  return (
    <Link
      to={to}
      onClick={closeMobile}
      className={`flex items-center w-full text-base font-semibold py-3 px-2 rounded-md transition-colors duration-200 ${
        active ? "text-[#D32F2F] bg-gray-100" : "text-[#222] hover:text-[#D32F2F] hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );
};

// ====================== MOBILE DROPDOWN ======================
const MobileDropdown = ({ title, to, openDropdown, toggleDropdown, list, closeMobile }) => {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path || pathname.startsWith(path + "/");

  return (
    <div>
      <button
        onClick={() => toggleDropdown(to)}
        className={`flex items-center justify-between w-full text-base font-semibold py-3 px-2 rounded-md transition-colors duration-200 ${
          isActive(to) ? "text-[#D32F2F] bg-gray-100" : "text-[#222] hover:text-[#D32F2F] hover:bg-gray-100"
        }`}
        aria-expanded={openDropdown === to}
        aria-controls={`${to}-submenu`}
      >
        {title}
        <span
          className={`transform transition-transform duration-300 ${
            openDropdown === to ? "rotate-90" : ""
          }`}
        >
          ›
        </span>
      </button>

      {openDropdown === to && (
        <div
          id={`${to}-submenu`}
          className="mt-1 space-y-1 border-l border-gray-200 pl-4"
          role="region"
          aria-labelledby={to}
        >
          {list.map((item, i) =>
            item.children ? (
              <div key={i}>
                <Link
                  to={item.to}
                  onClick={closeMobile}
                  className={`flex items-center w-full text-base font-semibold py-2 px-2 rounded-md transition-colors duration-200 ${
                    isActive(item.to)
                      ? "text-[#D32F2F] bg-gray-100"
                      : "text-[#222] hover:text-[#D32F2F] hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
                <div className="ml-4 space-y-1">
=======
/* ======================================================================================
   MULTI-LEVEL DROPDOWN (DESKTOP)
====================================================================================== */
const Dropdown = ({ title, items }) => {
  return (
    <div className="relative group cursor-pointer">
      <span className="hover:text-[#D32F2F]">{title}</span>

      <div
        className="
          absolute left-0 top-full -mt-1 hidden group-hover:block
          w-64 bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200
          rounded-xl p-3 z-50
        "
      >
        {items.map((item, i) => (
          <div key={i} className="relative">
            {/* Parent item WITH children */}
            {item.children ? (
              <div className="group/submenu">
                <div className="px-3 py-2 font-semibold rounded-md hover:bg-[#D32F2F] hover:text-white flex justify-between">
                  {item.label}
                  <span>›</span>
                </div>

                {/* SUB-SUBMENU */}
                <div
                  className="
                    absolute left-full top-0 hidden group-hover/submenu:block
                    w-56 bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200
                    rounded-xl p-3 ml-1
                  "
                >
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
                  {item.children.map((sub, j) => (
                    <Link
                      key={j}
                      to={sub.to}
<<<<<<< HEAD
                      onClick={closeMobile}
                      className={`flex items-center py-2 px-2 text-sm rounded-md transition-colors duration-200 ${
                        isActive(sub.to)
                          ? "text-[#D32F2F] bg-gray-100"
                          : "text-[#555] hover:text-[#D32F2F] hover:bg-gray-100"
                      }`}
=======
                      className="
                        block px-3 py-2 text-sm rounded-md
                        hover:bg-[#D32F2F] hover:text-white transition
                      "
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
<<<<<<< HEAD
            ) : item.action ? (
              <button
                key={i}
                onClick={() => item.action()}
                className={`w-full text-left flex items-center py-2 px-2 text-sm rounded-md transition-colors duration-200 ${
                  isActive(item.to)
                    ? "text-[#D32F2F] bg-gray-100"
                    : "text-[#555] hover:text-[#D32F2F] hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={i}
                to={item.to}
                onClick={closeMobile}
                className={`flex items-center py-2 px-2 text-sm rounded-md transition-colors duration-200 ${
                  isActive(item.to)
                    ? "text-[#D32F2F] bg-gray-100"
                    : "text-[#555] hover:text-[#D32F2F] hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};
=======
            ) : (
              /* Single-level items */
              <Link
                to={item.to}
                className="
                  block px-3 py-2 rounded-md
                  hover:bg-[#D32F2F] hover:text-white transition
                "
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ======================================================================================
   MOBILE MENU (supports nested items)
====================================================================================== */
const MobileMenu = ({ openDropdown, toggleDropdown }) => (
  <div
    className="
      md:hidden bg-white/95 backdrop-blur-xl 
      border-t border-gray-300 rounded-b-2xl 
      px-6 py-4 space-y-4
    "
  >
    <MobileLink to="/" label="Home" />

    <MobileDropdown
      title="About Us"
      id="about"
      openDropdown={openDropdown}
      toggleDropdown={toggleDropdown}
      list={[
        { label: "Our Story", to: "/ourstory" },
        { label: "Team", to: "/team" },
        { label: "Mission", to: "/mission" },
      ]}
    />

    {/* SERVICES MULTILEVEL MOBILE */}
    <MobileDropdown
      title="Services"
      id="services"
      openDropdown={openDropdown}
      toggleDropdown={toggleDropdown}
      list={[
        {
          label: "Consultancy",
          children: [
            { label: "Go-To-Market", to: "/go-to-market" },
            { label: "Digital Transformation", to: "/digital-transformation" },
          ],
        },
        {
          label: "Execution",
          children: [
            { label: "Staffing", to: "/staffing" },
            { label: "Training", to: "/training" },
            { label: "ATL / BTL", to: "/atl-btl" },
            { label: "Drones", to: "/drones" },
          ],
        },
      ]}
    />

    <MobileLink to="/clients" label="Clients" />

    <MobileDropdown
      title="Careers"
      id="careers"
      openDropdown={openDropdown}
      toggleDropdown={toggleDropdown}
      list={[
        { label: "Vacancy", to: "/vacancy" },
        { label: "Online Interview", to: "/onlineinterview" },
        { label: "Referral Program", to: "/referral" },
      ]}
    />

    <MobileDropdown
      title="Login"
      id="login"
      openDropdown={openDropdown}
      toggleDropdown={toggleDropdown}
      list={[
        { label: "Login", to: "/login" },
        { label: "Customer Login", to: "/customer-login" },
        { label: "Vendor Login", to: "/vendor-login" },
        { label: "Employee Login", to: "/employee-login" },
      ]}
    />

    <MobileLink to="/contact" label="Contact" />
  </div>
);

/* ======================================================================================
   MOBILE NESTED COMPONENTS
====================================================================================== */

const MobileLink = ({ to, label }) => (
  <Link className="block text-lg text-[#333]" to={to}>
    {label}
  </Link>
);

const MobileDropdown = ({ title, id, openDropdown, toggleDropdown, list }) => (
  <div>
    <button
      className="w-full text-left text-lg font-semibold text-[#222]"
      onClick={() => toggleDropdown(id)}
    >
      {title}
    </button>

    {openDropdown === id && (
      <div className="ml-4 mt-2 space-y-2">
        {list.map((item, i) =>
          item.children ? (
            <div key={i}>
              <div className="font-semibold text-[#444]">{item.label}</div>
              <div className="ml-4 space-y-1 mt-1">
                {item.children.map((sub, j) => (
                  <Link
                    key={j}
                    to={sub.to}
                    className="block text-[#666] hover:text-[#D32F2F]"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={i}
              to={item.to}
              className="block text-[#555] hover:text-[#D32F2F]"
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    )}
  </div>
);
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
