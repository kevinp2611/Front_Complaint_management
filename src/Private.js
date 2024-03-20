import { Outlet, useNavigate } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();
  const isAuthenticated = !(
    localStorage.getItem("accessToken") && localStorage.getItem("user")
  );
  console.log(isAuthenticated);
  return isAuthenticated ? navigate("/login") : <Outlet />;
};
export default Private;
