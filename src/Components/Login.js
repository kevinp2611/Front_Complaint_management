import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5 text-center">
        {console.log("test")}
        <h1>Login</h1>
      </div>
      <div className="container mt-5">
        <form className="row g-3" id="tmp">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="Email"
              required
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary m-1"
              type="submit"
              onClick={() => {
                navigate("/otp");
              }}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
