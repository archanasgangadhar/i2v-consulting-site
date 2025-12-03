import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="bg-[#3A3A3A] text-white mt-0 pt-10 pb-6"
      style={{ fontFamily: "Candara" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID 4-COLUMN FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ABOUT I2V */}
          <div>
            <h3 className="text-lg font-bold mb-3">About I2V</h3>
            <p className="text-sm text-neutral-300 leading-6">
              We enable agri-businesses to unlock value through GTM strategies,
              digital innovation, and disciplined field execution.  
              Our mission is to build a smarter, connected, future-ready
              agricultural ecosystem.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/ourstory" className="hover:text-white">Our Story</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/clients" className="hover:text-white">Clients</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>

            <p className="text-sm flex items-start gap-2 text-neutral-300 mb-2">
              <FiMapPin className="text-[#D32F2F] mt-1" />
              The Fountain Head, 101A,<br />
              Chaitanya Enclave, Khajaguda,<br />
              Hyderabad, Telangana 500104
            </p>

            <p className="text-sm flex items-center gap-2 text-neutral-300 mb-2">
              <FiMail className="text-[#D32F2F]" />
              info@i2vworld.com
            </p>

            <p className="text-sm flex items-center gap-2 text-neutral-300">
              <FiPhone className="text-[#D32F2F]" />
              +91-8143558397
            </p>
          </div>

          {/* BUSINESS HOURS + SOCIAL */}
          <div>
            <h3 className="text-lg font-bold mb-3">Business Hours</h3>
            <p className="text-sm text-neutral-300 leading-6 mb-4">
              Monday–Friday: 9:30 AM – 6:00 PM <br />
              Saturday–Sunday: Closed
            </p>

            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#D32F2F] rounded-full hover:bg-[#B71C1C] transition"
              >
                <FiLinkedin className="text-white text-xl" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT LINE */}
        <div className="border-t border-neutral-600 mt-10 pt-4 text-center">
          <p className="text-sm text-neutral-400">
            © I2V Consulting 2025 — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
