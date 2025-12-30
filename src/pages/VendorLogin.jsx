import Login from "./Login";
import RouteGuard from "../components/ProtectedRoute";
export default function VendorLogin() {
  return (
    <RouteGuard isPublic={true}>
      <Login userType="VENDOR"/>
    </RouteGuard>
  );
}
