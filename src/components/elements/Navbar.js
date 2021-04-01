export const NavBar = () => {
  return (
    <>
      <nav className="navbar shadow sticky-top  fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            React Redux Dashboard
          </a>
          <div>
            <a className="btn btn-light ml-auto">Create Contact</a>
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
