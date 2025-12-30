import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { decodeJwt } from "../util/jwt";
export default function ForgotPassword() {
  const focalpoint = "https://authi2v-cqf7hraecsceexhd.southindia-01.azurewebsites.net";
  const { state } = useLocation();
  const decodedToken = decodeJwt(localStorage.getItem("token"));
  const [email, setEmail] = useState(decodedToken?.sub || "");
  const [userRole, setUserRole] = useState("GENERAL");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const role = state?.role || localStorage.getItem("role") || "GENERAL";
    if (role) {
      setUserRole(role.toUpperCase());
    }else {
      setUserRole("GENERAL");
    }
  }, [state?.role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await fetch(`${focalpoint}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim()
        }),
      });

      // Always show success (security best practice)
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Server not responding. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
       
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8"
      ><img
          src="/assets/images/10aniversary.jpg"
          className="w-50 h-50 mx-auto mb-6 mix-blend-hard-light"
          alt="i2v Logo"
        />
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          {localStorage.getItem("token") ? "Change Password" : "Reset Password"}
        </h3>

        {submitted ? (
          <p className="text-green-600 text-center">
            If the email exists, a password reset link has been sent.
          </p>
        ) : (
          <>
            {error && (
              <p className="text-sm text-red-600 text-center mb-4">
                {error}
              </p>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address {': '} 
              {localStorage.getItem("token") ? ' '+email+' ?':( <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                className="w-70 rounded-lg border border-gray-300 px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-red-500"
              />)} </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white
                         font-medium py-2 rounded-lg transition"
            >
              Send Reset Link
            </button>
          </>
        )}

        <p className="text-sm text-center mt-4">
          <Link
            to="/login"
            state={{ role: userRole }}
            className="text-red-600 hover:underline"
          >
            {localStorage.getItem("token") ? "Back to Dashboard" : "Back to Login"}
          </Link>
        </p>
      </form>
    </div>
  );
}
