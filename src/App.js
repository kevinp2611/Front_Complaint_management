// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Otp from "./Components/Otp";
import Login from "./Components/Login";
import Layout from "./Components/layout/Layout";
import Dashboard from "./Components/Dashboard";
import Complaint from "./Components/Complaint";
import Head from "./Components/Head";
import Admin from "./Components/Admin";
import Maintenance from "./Components/Maintenance";
import AdminLayout from "./Components/layout/AdminLayout";
import Adduser from "./Components/Adduser";
import RemoveUser from "./Components/RemoveUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/head" element={<Head />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/removeuser" element={<RemoveUser />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
