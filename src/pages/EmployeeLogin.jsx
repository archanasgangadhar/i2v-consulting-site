import Login from "./Login";
import RouteGuard from "../components/ProtectedRoute";
export default function EmployeeLogin() {
  return (
    <RouteGuard isPublic={true}>  
      <Login userType="EMPLOYEE"/>
    </RouteGuard>
  );
}
