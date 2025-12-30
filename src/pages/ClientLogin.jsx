<<<<<<< HEAD
import Login from "./Login";
import RouteGuard from "../components/ProtectedRoute";
export default function ClientLogin() {
  return (
    <RouteGuard isPublic={true}>
      <Login userType="CUSTOMER"/>
    </RouteGuard>
=======
export default function ClientLogin() {
  return (
    <div style={{ padding: 40 }}>
      <h1 className="text-2xl font-bold">Client Login</h1>
      <p className="mt-4">Client login portal coming soon.</p>
    </div>
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
  );
}
