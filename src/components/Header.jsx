import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [shrink, setShrink] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = (key) =>
    setOpenDropdown(openDropdown === key ? null : key);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          >
            Idea to Value
          </span>
        </Link>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-4xl text-[#222]"
          onClick={toggleMobile}
        >
          {mobileOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>

        {/* DESKTOP NAV */}
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
          <Dropdown
            title="Services"
            items={[
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

          <NavItem to="/clients" label="Clients" />

          <Dropdown
            title="Careers"
            items={[
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

          <NavItem to="/contact" label="Contact" />
        </nav>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <MobileMenu openDropdown={openDropdown} toggleDropdown={toggleDropdown} />
      )}
    </header>
  );
}

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
                  {item.children.map((sub, j) => (
                    <Link
                      key={j}
                      to={sub.to}
                      className="
                        block px-3 py-2 text-sm rounded-md
                        hover:bg-[#D32F2F] hover:text-white transition
                      "
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
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
