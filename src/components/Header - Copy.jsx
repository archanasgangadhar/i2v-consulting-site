import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-40">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="/assets/images/logo2.jpg" className="h-18" />
          <h1 className="text-lg font-bold font-sans">Idea to Value</h1>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden border p-2 rounded"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
       
        <nav className="hidden lg:flex gap-6 text-sm font-sans">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/services">services</Link>
             <Link to="/Clients">Clients</Link>
             <Link to="/Careers">Careers</Link>
              {/* LOGIN DROPDOWN */}
  <div className="relative group">
    <button className="cursor-pointer">
      Login ▼
    </button>

    {/* Dropdown menu */}
    
    <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:flex flex-col transition">
      <Link
        to="/login/client"
        className="px-4 py-1 hover:bg-gray-100 whitespace-nowrap"
      >
        Client Login
      </Link>
      <Link
        to="/login/employee"
        className="px-4 py-1 hover:bg-gray-100 whitespace-nowrap"
      >
        Employee Login
      </Link>
      <Link
        to="/login/vendor"
        className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
      >
        Vendor Login
      </Link>
    </div>
  </div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact us</Link>         
         
        </nav>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="lg:hidden bg-white border-t p-4 space-y-2 font-sans">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link><br />
          <Link to="/about" onClick={() => setOpen(false)}>About us</Link><br />
          <Link to="/services" onClick={() => setOpen(false)}>services</Link><br />
           <Link to="/Clients" onClick={() => setOpen(false)}>Clients</Link><br />
            <Link to="/Careers" onClick={() => setOpen(false)}>Career</Link><br />
          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link><br />
          <Link to="/contact" onClick={() => setOpen(false)}>Contact us</Link>
        </nav>
      )}
    </header>
  );
}
