import { useEffect, useState } from "react";
import { decodeJwt } from "../util/jwt";
import { Link } from "react-router-dom";

export default function VendorDashboard() {
  const [state, setState] = useState({ loading: true, decoded: null, error: null });

  useEffect(() => {
    const decodeToken = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setState({ loading: false, decoded: null, error: "Not authenticated" });
        return;
      }

      const decoded = decodeJwt(token);
      if (!decoded) {
        setState({ loading: false, decoded: null, error: "Invalid token" });
        return;
      }
      const expired = decoded.exp ? decoded.exp * 1000 < Date.now() : false;
      setState({ loading: false, decoded, error: expired ? "Token expired" : null });
    };

    decodeToken();
    window.addEventListener("storage", decodeToken);
    window.addEventListener("i2v:auth", decodeToken);
    return () => { window.removeEventListener("storage", decodeToken); window.removeEventListener("i2v:auth", decodeToken); };
  }, []);

  if (state.loading) return <div className="p-6">Loading dashboard…</div>;
  if (state.error)
    return (
      <div className="p-6">
        <p className="text-red-600">{state.error}</p>
        <Link to="/login" className="text-red-600 underline mt-2 block">Sign in</Link>
      </div>
    );

  const role = localStorage.getItem("role");
  const tokenRole = (state.decoded?.role || "").toString().toLowerCase();
  const roleMatch = role === tokenRole;

  const expiresMs = state.decoded?.exp ? Math.max(0, state.decoded.exp * 1000 - Date.now()) : 0;
  const expiresIn = state.decoded?.exp ? (expiresMs > 0 ? `${Math.round(expiresMs / 60000)} min` : "Expired") : "—";
  const issuedAt = state.decoded?.iat ? new Date(state.decoded.iat * 1000).toLocaleString() : "—";
  const expiresAt = state.decoded?.exp ? new Date(state.decoded.exp * 1000).toLocaleString() : "—";

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">Account overview</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold uppercase">{tokenRole}</span>
          <div className="text-sm text-gray-500">{state.decoded?.sub || '—'}</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <div className="text-xs text-gray-500">Expires in</div>
          <div className="mt-1 text-lg font-semibold">{expiresIn}</div>
          <div className="text-xs text-gray-400">{expiresAt}</div>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <div className="text-xs text-gray-500">Issued at</div>
          <div className="mt-1 text-lg font-semibold">{issuedAt}</div>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <div className="text-xs text-gray-500">User email ID</div>
          <div className="mt-1 text-lg font-semibold">{state.decoded.sub || '—'}</div>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <div className="text-xs text-gray-500">Role</div>
          <div className="mt-1 text-lg font-semibold uppercase">{tokenRole}</div>
        </div>
      </div>

      {/* <div className="mt-6 bg-white p-4 shadow rounded">
        <h2 className="text-sm font-semibold mb-2">Raw claims</h2>
        <pre className="bg-gray-50 p-3 rounded text-xs overflow-auto">{JSON.stringify(state.decoded, null, 2)}</pre>
      </div> */}
    </div>
  );
}
