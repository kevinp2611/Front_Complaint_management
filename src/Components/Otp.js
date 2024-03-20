import { useNavigate } from "react-router-dom";
import "./otp.css";

const Otp = () => {
  const navigate = useNavigate();
  return (
    <div className="otp container">
      <br />
      <br />
      <h1>OTP Verification</h1>

      <form>
        <label htmlFor="otp">Enter OTP:</label>
        <input type="text" id="otp" name="otp" required />
        <button type="submit" onClick={() => navigate("/dashboard")}>
          Verify
        </button>
      </form>
      <div className="resend-link">
        <form action="/resend" method="post">
          <button className="btn success">Resend</button>
        </form>
      </div>
    </div>
  );
};
export default Otp;
