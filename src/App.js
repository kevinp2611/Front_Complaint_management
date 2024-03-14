// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Privateroutes } from "./Router/my_route";
// import { Publicroutes } from "./Router/my_route";
import Private from "./Private";
import Public from "./Public";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Private />}>
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
        <Route element={<Public />}>
          <Route element={<Login />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  /* <Routes>
        <Route element={<Private />}>
          {Privateroutes.map((route, index) => (
            <Route
              path={`${route.path}`}
              Component={route.component}
              key={index}
            />
          ))}
        </Route>
        <Route element={<Public />}>
          {Publicroutes.map((route, index) => (
            <Route
              path={`${route.path}`}
              Component={route.component}
              key={index}
            />
          ))}
        </Route> */
}

{
  /* <Route element={<Layout />}>
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
        </Route> */
}
