const AdminHeader = () => {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">
        <div class="container m-0">
          <img
            src="https://yt3.googleusercontent.com/ytc/AL5GRJVpc-UqWe3313B_Zaj2koPCPRHc-KViKXM2GcK_yw=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            width="80"
            height="80"
          />
        </div>
      </a>

      <a href="/admin">
        {" "}
        <button type="submit" class="btn btn-primary">
          all complaints
        </button>
      </a>
      <div class="dropdown">
        <button
          class="btn btn-success "
          type="button"
          id="addUser"
          aria-expanded="false"
        >
          <a className="navbar-brand h1" href="/adduser">
            Add User
          </a>
        </button>{" "}
        <button
          class="btn btn-success "
          type="button"
          id="removeUser"
          aria-expanded="false"
        >
          <a className="navbar-brand h1" href="/removeuser">
            Remove User
          </a>
        </button>
      </div>

      <form class="form-inline" action="/search" method="get">
        <input
          class="form-control mr-sm-2"
          type="text"
          name="dsearch"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};
export default AdminHeader;
