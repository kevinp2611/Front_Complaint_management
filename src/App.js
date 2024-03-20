// import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Admin from "./Components/Admin";
import Maintenance from "./Components/Maintenance";
import Head from "./Components/facultyHead";
import Layout from "./Components/layout/Layout";

// import { Privateroutes } from "./Router/my_route";
// import { Publicroutes } from "./Router/my_route";
const Private = lazy(() => import("./Private"));
const Public = lazy(() => import("./Public"));
const Login = lazy(() => import("./Components/Login"));
const Dashboard = lazy(() => import("./Components/Dashboard"));
const Registration = lazy(() => import("./Components/Registration"));
const NotFoundPage = lazy(() => import("./Components/NotFoundPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route  element={<Layout />}>
            <Route element={<Private />}>
              <Route element={<Admin />} path="/admin/dashboard" />
              <Route element={<Dashboard />} path="/user/dashboard" />
              <Route element={<Maintenance />} path="/maintenance/dashboard" />
              <Route element={<Head />} path="/faculty/dashboard" />
            </Route>

            <Route element={<Public />}>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route element={<Registration />} path="/registration" />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
