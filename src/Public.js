import { Outlet, Navigate } from "react-router-dom";

const Public = () => {
  const isAuthenticated = false;
  // localStorage.getItem("accessToken") && localStorage.getItem("user");
  // localStorage.getItem("token") === process.env.REACT_APP_TOKEN;
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};
export default Public;
