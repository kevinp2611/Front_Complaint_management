import { useNavigate } from "react-router";
import { POST_LOGIN_REQUEST } from "../api/Services/Auth/auth.services";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginData = { email: email.value, password: password.value };

    POST_LOGIN_REQUEST(loginData)
      .then((res) => {
        const { accessToken } = res.data.data.user;
        const { user } = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("accessToken", accessToken);

        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            console.log("handle user unauthenticated", err.response.data);
          } else if (err.response.status === 403) {
            console.log("handle user forbidden", err.response.data);
          } else if (err.response.status === 422) {
            console.log("handle server validation", err.response.data);
          } else {
            console.log("handle error", err.response.data);
          }
        }
      });
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <h1>Login</h1>
      </div>
      <div className="container mt-5">
        <form className="row g-3" id="tmp" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              aria-describedby="passwordHelp"
              name="password"
              required
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary m-1" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
