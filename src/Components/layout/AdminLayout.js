import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
};
export default AdminLayout;
