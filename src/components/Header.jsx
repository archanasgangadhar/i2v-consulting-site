import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  return (
    <header className="fixed top-0 left-0 w-full 
                   bg-white/30 backdrop-blur-lg shadow-md 
                   border-b border-white/20 z-50">

                        

      {/* NAV CONTAINER */}
      <div className="flex items-center justify-between px-2 py-1">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/assets/images/logo2.jpg" className="h-20" alt="I2V Logo" />
          <span style={{ fontFamily: "Candara" }} className="font-bold text-xl tracking-wide text-[#222]">
            Idea to value
          </span>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-3xl text-[#222]" onClick={toggleMobile}>
          {mobileOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>

        {/* DESKTOP MENU */}
        <nav 
          className="hidden md:flex items-center gap-8 text-lg"
          style={{ fontFamily: "Candara" }}
        >
          <NavLink to="/">Home</NavLink>

          <Dropdown title="About Us" list={[
            { label: "Our Story", to: "/our-story" },
            { label: "Team", to: "/team" },
            { label: "Mission", to: "/mission" }
          ]} />

          <Dropdown title="Services" list={[
            { label: "Consultancy", to: "/consultancy" },
            { label: "Execution", to: "/execution" }
          ]} />

          <NavLink to="/clients">Clients</NavLink>

          <Dropdown title="Careers" list={[
            { label: "Vacancy", to: "/vacancy" },
            { label: "Online Interview", to: "/interview" },
            { label: "Referral Program", to: "/referral" }
          ]} />

          <Dropdown title="Login" list={[
            { label: "Login", to: "/login" },
            { label: "Customer Login", to: "/customer-login" },
            { label: "Vendor Login", to: "/vendor-login" },
            { label: "Employee Login", to: "/employee-login" }
          ]} />

          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 
                     rounded-b-2xl px-6 py-4 space-y-4 animate-slideDown"
          style={{ fontFamily: "Candara" }}
        >
          <MobileLink to="/" label="Home" />

          <MobileDropdown
            title="About Us"
            open={openDropdown === "about"}
            onToggle={() => toggleDropdown("about")}
            list={[
              { label: "Our Story", to: "/our-story" },
              { label: "Team", to: "/team" },
              { label: "Mission", to: "/mission" }
            ]}
          />

          <MobileDropdown
            title="Services"
            open={openDropdown === "services"}
            onToggle={() => toggleDropdown("services")}
            list={[
              { label: "Consultancy", to: "/consultancy" },
              { label: "Execution", to: "/execution" }
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
              { label: "Referral Program", to: "/referral" }
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
              { label: "Employee Login", to: "/employee-login" }
            ]}
          />

          <MobileLink to="/contact" label="Contact" />
        </div>
      )}
    </header>
  );
}

/* ---------- SUB COMPONENTS ---------- */

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative group text-[#222] hover:text-[#D32F2F] transition"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D32F2F] group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const Dropdown = ({ title, list }) => (
  <div className="relative group cursor-pointer">
    <span className="hover:text-[#D32F2F]">{title}</span>
    <div className="absolute left-0 top-full mt-3 hidden group-hover:block 
                    bg-white shadow-2xl rounded-xl p-3 w-44 border border-gray-100 
                    animate-fadeIn">
      {list.map((item) => (
        <Link
          key={item.to}
          className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 hover:text-[#D32F2F]"
          to={item.to}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);

const MobileLink = ({ to, label }) => (
  <Link className="block text-lg text-[#222]" to={to}>
    {label}
  </Link>
);

const MobileDropdown = ({ title, open, onToggle, list }) => (
  <div>
    <button className="w-full text-left text-lg font-semibold" onClick={onToggle}>
      {title}
    </button>
    {open && (
      <div className="ml-4 mt-1 space-y-2 animate-fadeIn">
        {list.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block text-[#444] hover:text-[#D32F2F]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);
