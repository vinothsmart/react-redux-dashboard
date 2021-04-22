import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      {/* <nav className="navbar shadow sticky-top  fixed-top navbar-expand-sm navbar-dark bg-primary">
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
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                  />
                  <strong>Vinoth</strong>
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
      </nav> */}
      <header className="p-3 mb-3 bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none text-light navbar-brand"
            >
              React Redux Dashboard
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Roles
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Users
                </Link>
              </li>
            </ul>

            <div className="dropdown text-end">
              <Link
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Link>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  {/* <a className="dropdown-item" href="#">
                    New project...
                  </a> */}
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="b-example-divider"></div>
      <nav className="navbar fixed-bottom text-light bg-dark">
        <div className="container-fluid">
          <div className="col-lg-12">
            <center>
              <p>
                © 2021 Copyright:
                <Link
                  className="text-light"
                  to={{
                    pathname: "https://github.com/vinothsmart/",
                  }}
                  target="_blank"
                >
                  vinothsmart
                </Link>
              </p>
            </center>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
