import { useState } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { decodeJwt } from "../util/jwt";

const ROLE_LABELS = {
  GENERAL: "User",
  EMPLOYEE: "Employee",
  VENDOR: "Vendor",
  CUSTOMER: "Customer",
};

export default function Login({ userType }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const focalpoint = "https://authi2v-cqf7hraecsceexhd.southindia-01.azurewebsites.net";
  // UI-selected role (route → prop → default)
  const uiRole = state?.role || userType || "GENERAL";
  const roleLabel = ROLE_LABELS[uiRole] || "User";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ error: null, success: null });
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
  const redirectByRole = (role) => {
    const routes = {
      EMPLOYEE: "/employee/dashboard",
      VENDOR: "/vendor/dashboard",
      CUSTOMER: "/customer/dashboard",
      GENERAL: "/user/dashboard",
    };
    navigate(routes[role] || "/user/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ error: null, success: null });

    try {
      const response = await fetch(focalpoint+"/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setMessage({ error: parseTextToJSON(errorText).error || "Login failed", success: null });
        return;
      }

      const { token } = await response.json();
      const decoded = decodeJwt(token);
      if (!decoded || !decoded.role) {
        setMessage({ error: "Invalid token received", success: null });
        return;
      }
      const jwtRole = decoded.role.toUpperCase();
      // ✅ Role verification
      if (jwtRole !== uiRole) {
        setMessage({
          error: "Role mismatch. Please use the correct login page.",
          success: null,
        });
        return;
      }
      // ✅ Save auth data
      localStorage.setItem("token", token);
      // Store role in lowercase to match route permission checks
      localStorage.setItem("role", (decoded.role || "").toLowerCase());
      // Notify other components in same tab
      window.dispatchEvent(new Event('i2v:auth'));

      setMessage({
        error: null,
        success: "Login successful! Redirecting...",
      });
      
      setTimeout(() => redirectByRole(jwtRole), 800);
    } catch {
      setMessage({
        error: "Server Down Not Responding",
        success: null,
      });
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
          className="w-50 h-50 mx-auto mb-6 mix-blend-hard-light"
          alt="i2v Logo"
        />

        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In for {roleLabel}
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

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
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          Sign In
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account? {roleLabel}{" "}
          <Link
            to="/register"
            state={{ role: uiRole }}
            className="text-red-600"
          >
            Sign Up
          </Link>
        </p>
         <p className="text-sm text-center text-gray-600 mt-4">
          Forgot Password ? {roleLabel}{" "}
          <Link
            to="/forgot-password"
            state={{ role: uiRole }}
            className="text-red-600"
          >
            Reset Here
          </Link>
        </p>
      </form>
    </div>
  );
}
