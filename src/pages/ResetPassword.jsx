import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const focalpoint = "https://authi2v-cqf7hraecsceexhd.southindia-01.azurewebsites.net";
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const navigate = useNavigate();

  // Password strength calculation
  const checkPasswordStrength = (password) => {
    let strength = "";
    if (password.length >= 8) {
      const hasLower = /[a-z]/.test(password);
      const hasUpper = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecial = /[@$!%*?&]/.test(password);

      const passedChecks = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

      if (passedChecks === 4) strength = "Strong";
      else if (passedChecks >= 2) strength = "Medium";
      else strength = "Weak";
    } else if (password.length > 0) {
      strength = "Weak";
    }
    setPasswordStrength(strength);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError("Invalid or missing reset token.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      setError(
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        `${focalpoint}/api/auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, newPassword }),
        }
      );

      if (!response.ok) {
        let errorText = "Password reset failed";
        try {
          const err = await response.json();
          errorText = err.message || err.error || errorText;
          console.log("Failed to parse error response as JSON.");
        } catch {
          console.log("Failed to parse error response as JSON.");
          errorText = await response.text();
        }
        setError(errorText);
        return;
      }

      // Clear localStorage and notify Header
      localStorage.clear();
      window.dispatchEvent(new Event("i2v:auth"));

      setSubmitted(true);
      setNewPassword("");
      setConfirmPassword("");

      // Redirect to login after 2s
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch {
      setError("Server not responding. Please try again.");
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
        
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Set New Password
        </h3>

        {!token ? (
          <p className="text-red-600 text-center">Invalid password reset link.</p>
        ) : submitted ? (
          <p className="text-green-600 text-center">
            Password reset successful. Redirecting to login...
          </p>
        ) : (
          <>
            {error && (
              <p className="text-sm text-red-600 text-center mb-4" aria-live="polite">
                {error}
              </p>
            )}
            
            {/* New Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  checkPasswordStrength(e.target.value);
                }}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {newPassword && (
                <div className="mt-2 h-2 w-full bg-gray-200 rounded">
                  <div
                    className={`h-2 rounded transition-all duration-300 ${
                      passwordStrength === "Weak"
                        ? "w-1/3 bg-red-600"
                        : passwordStrength === "Medium"
                        ? "w-2/3 bg-yellow-500"
                        : "w-full bg-green-600"
                    }`}
                  />
                </div>
              )}
              {newPassword && (
                <p className="text-sm mt-1 text-gray-700">Strength: {passwordStrength}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        )}

        <p className="text-sm text-center mt-4">
          <Link to="/login" className="text-red-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </form>
    </div>
  );
}
