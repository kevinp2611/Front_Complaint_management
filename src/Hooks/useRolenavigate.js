const arrUrl = {
  1: "/admin/dashboard",
  2: "/maintenance/dashboard",
  3: "/faculty/dashboard",
  4: "/user/dashboard",
};

const roleNavigate = () => {
  let user = localStorage.getItem("user");
  const key = JSON.parse(user)?.role_id;

  return arrUrl[key];
};
export default roleNavigate;
