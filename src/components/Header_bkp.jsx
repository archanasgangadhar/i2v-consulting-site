import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = (key) =>
    setOpenDropdown(openDropdown === key ? null : key);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/65 backdrop-blur-xl
        shadow-lg border-b border-gray-300
      "
    >
      {/* TOP NAV BAR */}
      <div className="flex items-center justify-between px-4 py-3">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/logo2.jpg"
            alt="I2V logo"
            className="h-14 rounded-md shadow-md"
          />
          <span
            className="text-2xl font-bold tracking-wide text-[#222]"
            style={{ fontFamily: "Candara" }}
          >
            Idea to Value
          </span>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden text-4xl text-[#222]"
          onClick={toggleMobile}
        >
          {mobileOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>

        {/* DESKTOP NAV */}
        <nav
          className="
            hidden md:flex items-center gap-10 
            text-lg font-semibold
          "
          style={{ fontFamily: "Candara" }}
        >
          <NavLink to="/">Home</NavLink>

          <Dropdown
            title="About Us"
            list={[
              { label: "Our Story", to: "/OurStory" },
              { label: "Team", to: "/team" },
              { label: "Mission", to: "/mission" },
            ]}
          />

          <Dropdown
            title="Services"
            list={[
              { label: "Consultancy", to: "/consultancy" },
              { label: "Execution", to: "/Execution" },
            ]}
          />

          <NavLink to="/clients">Clients</NavLink>

          <Dropdown
            title="Careers"
            list={[
              { label: "Vacancy", to: "/vacancy" },
              { label: "Online Interview", to: "/onlineinterview" },
              { label: "Referral Program", to: "/referral" },
            ]}
          />

          <Dropdown
            title="Login"
            list={[
              { label: "Login", to: "/login" },
              { label: "Customer Login", to: "/customer-login" },
              { label: "Vendor Login", to: "/vendor-login" },
              { label: "Employee Login", to: "/employee-login" },
            ]}
          />

          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div
          className="
            md:hidden 
            bg-white/95 backdrop-blur-xl
            border-t border-gray-300 
            rounded-b-2xl px-6 py-4 space-y-4
            text-black
          "
          style={{ fontFamily: "Candara" }}
        >
          <MobileLink to="/" label="Home" />

          <MobileDropdown
            title="About Us"
            open={openDropdown === "about"}
            onToggle={() => toggleDropdown("about")}
            list={[
              { label: "Our Story", to: "/OurStory" },
              { label: "Team", to: "/team" },
              { label: "Mission", to: "/mission" },
            ]}
          />

          <MobileDropdown
            title="Services"
            open={openDropdown === "services"}
            onToggle={() => toggleDropdown("services")}
            list={[
              { label: "Consultancy", to: "/consultancy" },
              { label: "Execution", to: "/Execution" },
            ]}
          />

          <MobileLink to="/clients" label="Clients" />

          <MobileDropdown
            title="Careers"
            open={openDropdown === "careers"}
            onToggle={() => toggleDropdown("careers")}
            list={[
              { label: "Vacancy", to: "/vacancy" },
              { label: "Online Interview", to: "/interview" },
              { label: "Referral Program", to: "/referral" },
            ]}
          />

          <MobileDropdown
            title="Login"
            open={openDropdown === "login"}
            onToggle={() => toggleDropdown("login")}
            list={[
              { label: "Login", to: "/login" },
              { label: "Customer Login", to: "/customer-login" },
              { label: "Vendor Login", to: "/vendor-login" },
              { label: "Employee Login", to: "/employee-login" },
            ]}
          />

          <MobileLink to="/contact" label="Contact" />
        </div>
      )}
    </header>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="
      relative group 
      text-[#222] hover:text-[#800000] 
      transition-all duration-300
    "
  >
    {children}
    <span
      className="
        absolute -bottom-1 left-0 w-0 h-[2px] bg-[#800000] 
        group-hover:w-full transition-all duration-300
      "
    ></span>
  </Link>
);

/* ---------------- DESKTOP DROPDOWN ---------------- */

const Dropdown = ({ title, list }) => (
  <div className="relative group cursor-pointer">
    <span className="hover:text-[#800000]">{title}</span>

    <div
      className="
        absolute left-0 top-full mt-.5 hidden group-hover:block 
        text-white shadow-2xl rounded-xl p-3 
        w-56 border border-gray-300 animate-fadeIn
        bg-gradient-to-b from-[#ffffff] via-[#2b1b1a] to-[#7a312c]
      "
      style={{ backdropFilter: "blur(6px)" }}
    >
      {list.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="
            block px-3 py-2 rounded-md text-sm 
            hover:bg-white/20 hover:text-white
            transition-all
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);

/* ---------------- MOBILE LINKS ---------------- */

const MobileLink = ({ to, label }) => (
  <Link className="block text-lg text-[#333]" to={to}>
    {label}
  </Link>
);

const MobileDropdown = ({ title, open, onToggle, list }) => (
  <div>
    <button
      className="w-full text-left text-lg font-semibold text-[#222]"
      onClick={onToggle}
    >
      {title}
    </button>
    {open && (
      <div className="ml-4 mt-1 space-y-2">
        {list.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block text-[#555] hover:text-[#800000]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);
