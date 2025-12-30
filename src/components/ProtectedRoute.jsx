import { Navigate } from "react-router-dom";

// Map roles to dashboards
const dashboardRedirects = {
  employee: "/employee/dashboard",
  vendor: "/vendor/dashboard",
  customer: "/customer/dashboard",
  general: "/user/dashboard",
  user: "/user/dashboard",
};

/**
 * RouteGuard handles both public and protected routes.
 * @param {ReactNode} children - Component to render
 * @param {Array} allowedRoles - Roles allowed to access this route (optional)
 * @param {boolean} isPublic - If true, route is public (like login)
 */
const RouteGuard = ({ children, allowedRoles = [], isPublic = false }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // Logged-in user normalized
  const roleLc = role ? role.toLowerCase() : "";

  // Check if role is valid
  const validRoles = Object.keys(dashboardRedirects);
  const isValidRole = validRoles.includes(roleLc);

  // PUBLIC ROUTE (like login)
  if (isPublic) {
    // Logged in → redirect to dashboard
    if (token && isValidRole) {
     
      return <Navigate to={dashboardRedirects[roleLc]} replace />;
    }
    // Not logged in → allow access
    return children;
  }

  // PROTECTED ROUTE
  // Not logged in or invalid role → redirect to login
  if (!token || !isValidRole) {
    return <Navigate to="/login" replace />;
  }

  // If allowedRoles is empty → allow access
  if (!allowedRoles.length || allowedRoles.includes(roleLc)) {
    return children;
  }

  // Role not allowed → redirect to dashboard
  return <Navigate to={dashboardRedirects[roleLc]} replace />;
};

export default RouteGuard;
export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  return (
    <RouteGuard allowedRoles={allowedRoles} isPublic={false}>
      
      {children}
    </RouteGuard>
  );
};