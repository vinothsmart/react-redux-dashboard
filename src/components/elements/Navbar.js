export const NavBar = () => {
  return (
    <>
      <nav className="navbar shadow sticky-top  fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand">React Redux Dashboard</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Roles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Users</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item">Profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Settings</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid">
          <div className="col-lg-12">
            <center>
              <p>
                © 2021 Copyright:
                <a
                  className="text-dark"
                  href="https://github.com/vinothsmart/"
                  target="_blank"
                >
                  vinothsmart
                </a>
              </p>
            </center>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
