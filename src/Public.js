import { Outlet, useNavigate } from "react-router-dom";

const Public = () => {
  const navigate = useNavigate();
  const isAuthenticated =
    localStorage.getItem("accessToken") && localStorage.getItem("user");

  return isAuthenticated ? navigate("/admin/dashboard") : <Outlet />;
};
export default Public;
