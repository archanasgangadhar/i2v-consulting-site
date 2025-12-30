<<<<<<< HEAD
import Login from "./Login";
import RouteGuard from "../components/ProtectedRoute";
export default function EmployeeLogin() {
  return (
    <RouteGuard isPublic={true}>  
      <Login userType="EMPLOYEE"/>
    </RouteGuard>
=======
export default function EmployeeLogin() {
  return (
    <div style={{ padding: 40 }}>
      <h1 className="text-2xl font-bold">Employee Login</h1>
      <p className="mt-4">Employee access page coming soon.</p>
    </div>
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
  );
}
