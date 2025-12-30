import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Register() {
  const focalpoint = "https://authi2v-cqf7hraecsceexhd.southindia-01.azurewebsites.net";
  const { state } = useLocation();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userRole, setUserRole] = useState("GENERAL");
  const [message, setMessage] = useState({ error: null, success: null });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {if (state?.role) setUserRole(state.role);}, [state?.role]);

  const roleLabelMap = {
    GENERAL: "User",
    EMPLOYEE: "Employee",
    VENDOR: "Vendor",
    CUSTOMER: "Customer",
  };
  const passwordsMatch =
    form.password && form.password === form.confirmPassword;

  const isStrongPassword = form.password.length >= 8;
  const roleLabel = roleLabelMap[userRole] || "User";

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearPasswords = () => {
    setForm((prev) => ({
      ...prev,
      password: "",
      confirmPassword: "",
    }));
  };
  // Converts a text that looks like JSON into a real JSON object
function parseTextToJSON(text) {
  try {
    return JSON.parse(text);
  } catch {
    try {
      let fixed = text.replace(/'/g, '"'); // single quotes → double quotes
      fixed = fixed.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":'); // quote keys
      return JSON.parse(fixed);
    } catch {
      return null;
    }
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    const password = form.password.trim();
    const confirmPassword = form.confirmPassword.trim();
    if (password !== confirmPassword) {
      setMessage({ error: "Passwords do not match", success: null });
      clearPasswords();
      return;
    }
    if (!isStrongPassword) {
      setMessage({
        error: "Password must be at least 8 characters",
        success: null,
      });
      return;
    }

    setLoading(true);
    setMessage({ error: null, success: null });
    console.log(JSON.stringify({
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          password,
          confirmPassword,
          role: userRole,
        }),)
    try {
      const response = await fetch(focalpoint+"/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          password,
          confirmPassword,
          role: userRole,
        }),
      });

      if (!response.ok) {
        const err = parseTextToJSON(await response.text());
        setMessage({
          error: err.error || "Registration failed",
          success: null,
        });
        return;
      }

      setMessage({
        error: null,
        success: "Registration successful! Please log in.",
      });

      setForm({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch {
      setMessage({
        error: "Server not responding",
        success: null,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8"
      >
        <img
          src="/assets/images/10aniversary.jpg"
          className="w-40 mx-auto mb-6 mix-blend-hard-light"
          alt="I2V Logo"
        />

        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create Account for {roleLabel}
        </h3>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            name="full_name"
            type="text"
            placeholder="Full Name"
            required
            value={form.full_name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            name="email"
            type="email"
            placeholder="email@domain.com"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-sm text-red-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
            value={form.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        {form.confirmPassword && (
          <p
            className={`text-xs mt-1 ${
              passwordsMatch ? "text-green-600" : "text-red-600"
            }`}
          >
            {passwordsMatch ? "Passwords match" : "Passwords do not match"}
          </p>
        )}
        {!isStrongPassword && form.password && (
          <p className="text-xs text-red-600 mt-1">
            Password must be at least 8 characters
          </p>
        )}

       
        {message.error && (
          <p className="text-sm text-red-600 text-center mb-4">
            {message.error}
          </p>
        )}

        {message.success && (
          <p className="text-sm text-green-600 text-center mb-4">
            {message.success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium
                     py-2 rounded-lg transition
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? {roleLabel}{" "}
          <Link
            to="/login"
            state={{ role: userRole }}
            className="text-red-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
