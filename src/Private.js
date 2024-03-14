import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
  const isAuthenticated = !(
    localStorage.getItem("accessToken") && localStorage.getItem("user")
  );

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
export default Private;
