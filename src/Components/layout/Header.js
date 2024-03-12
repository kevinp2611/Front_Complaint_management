import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container m-0">
        <img
          src="https://yt3.googleusercontent.com/ytc/AL5GRJVpc-UqWe3313B_Zaj2koPCPRHc-KViKXM2GcK_yw=s900-c-k-c0x00ffffff-no-rj"
          alt=""
          width="80"
          height="80"
        />
      </div>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="navbar-brand h1" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand h1" href="/head">
                Faculty I/c
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand h1" href="/complaint">
                RegisterComplaint
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand h1" href="/admin">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand h1" href="/maintenance">
                Maintenance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
