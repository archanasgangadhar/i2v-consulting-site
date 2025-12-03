import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if (!form.name.trim()) temp.name = "Name is required.";
    if (!form.email.trim()) temp.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Invalid email address.";
    if (!form.phone.trim()) temp.phone = "Phone number is required.";
    if (!form.message.trim()) temp.message = "Message cannot be empty.";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div
      className="bg-white min-h-screen pt-6 pb-20"
      style={{ fontFamily: "Candara" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#222]">
            Let’s Build <span className="text-[#D32F2F]">Value Together</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Whether you're exploring Go-To-Market transformation, capability building,
            or digital execution programs — connect with our team to start a conversation.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-2 shadow-sm">
            <FiCheckCircle className="text-lg" />
            Your message has been sent. Our team will reach out shortly.
          </div>
        )}

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT PANEL */}
          <div className="bg-[#F7F7F7] rounded-2xl shadow-sm border border-neutral-300 p-8">
            <h2 className="text-2xl font-bold text-[#222] mb-5">Contact Details</h2>

            <p className="text-sm text-neutral-700 mb-6">
              We work with leadership teams across agri-input, seeds, and allied industries 
              to design execution-led transformation programs.
            </p>

            {/* Info List */}
            <div className="space-y-6 text-sm text-neutral-700">

              {/* Address */}
              <div>
                <p className="font-semibold text-[#D32F2F] flex items-center gap-2">
                  <FiMapPin className="text-lg" /> Address
                </p>
                <p className="mt-1 leading-6">
                  The Fountain Head, 101A,<br />
                  Chaitanya Enclave, Khajaguda,<br />
                  Hyderabad, Telangana 500104
                </p>

                {/* MAP */}
                <div className="mt-4 rounded-xl overflow-hidden border border-neutral-300 shadow-sm">
                  <iframe
                    title="I2V Location"
                    width="100%"
                    height="170"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4081940408476!2d78.381667!3d17.437966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7013b39f7%3A0x3e7c06c574ea506!2sThe%20Fountain%20Head%2C%20Chaitanya%20Enclave%2C%20Khajaguda%2C%20Telangana%20500104!5e0!3m2!1sen!2sin!4v1700000000001"
                  ></iframe>
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="font-semibold text-[#D32F2F] flex items-center gap-2">
                  <FiMail className="text-lg" /> Email
                </p>
                <a href="mailto:info@i2vworld.com" className="mt-1 block hover:text-[#800000]">
                  info@i2vworld.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="font-semibold text-[#D32F2F] flex items-center gap-2">
                  <FiPhone className="text-lg" /> Phone
                </p>
                <a href="tel:+91-8143558397" className="mt-1 block hover:text-[#800000]">
                  +91-8143558397
                </a>
              </div>

              {/* Business Hours */}
              <div>
                <p className="font-semibold text-[#D32F2F] flex items-center gap-2">
                  <FiClock className="text-lg" /> Business Hours
                </p>
                <p className="mt-1 leading-6">
                  Monday–Saturday: 9:30 AM – 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL – FORM */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-300 p-8">
            <h2 className="text-2xl font-bold text-[#222] mb-5">Send us a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="text-sm text-neutral-700 font-semibold">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-1 border border-neutral-300 p-3 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-neutral-700 font-semibold">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 border border-neutral-300 p-3 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-neutral-700 font-semibold">Phone *</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full mt-1 border border-neutral-300 p-3 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                  placeholder="Your Contact Number"
                />
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-neutral-700 font-semibold">Message *</label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-1 border border-neutral-300 p-3 rounded-xl focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-[#D32F2F] text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-[#B71C1C] transition"
              >
                Send Message
              </button>

              {/* Privacy Disclaimer */}
              <p className="text-xs text-neutral-500 mt-3 text-center">
                We respect your privacy. Your information will only be used for business communication.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
