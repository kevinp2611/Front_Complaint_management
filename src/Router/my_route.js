import Login from "../Components/Login";

import Dashboard from "../Components/Dashboard";

const Privateroutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
const Publicroutes = [
  {
    path: "/",
    component: Login,
  },
];

export { Privateroutes, Publicroutes };
