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
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    class="rounded-circle me-2"
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
      </nav>
      <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              Logo
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 link-dark">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 link-dark">
                  Roles
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 link-dark">
                  Users
                </a>
              </li>
            </ul>

            <div class="dropdown text-end">
              <a
                href="#"
                class="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
              <ul
                class="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div class="b-example-divider"></div>
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
