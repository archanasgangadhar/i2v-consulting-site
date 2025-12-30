import Login from "./Login";
import RouteGuard from "../components/ProtectedRoute";
export default function ClientLogin() {
  return (
    <RouteGuard isPublic={true}>
      <Login userType="CUSTOMER"/>
    </RouteGuard>
  );
}
