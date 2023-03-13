import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthenticationStore from "src/store/authentication/authentication.store";

function PrivateRoute() {
  const jwtToken = useAuthenticationStore((state) => state.jwt);
  const location = useLocation();

  return jwtToken ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' state={{ from: location }} replace />
  );
}

export default PrivateRoute;
