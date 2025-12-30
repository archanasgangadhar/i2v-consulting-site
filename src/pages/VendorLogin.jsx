<<<<<<< HEAD
import Login from "./Login";
import RouteGuard from "../components/ProtectedRoute";
export default function VendorLogin() {
  return (
    <RouteGuard isPublic={true}>
      <Login userType="VENDOR"/>
    </RouteGuard>
=======
export default function VendorLogin() {
  return (
    <div style={{ padding: 40 }}>
      <h1 className="text-2xl font-bold">Vendor Login</h1>
      <p className="mt-4">Vendor login portal coming soon.</p>
    </div>
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
  );
}
