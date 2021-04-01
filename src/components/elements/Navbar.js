export const NavBar = () => {
  return (
    <>
      <nav className="navbar shadow sticky-top  fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            React Redux Dashboar
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
              <a class="navbar-brand" href="https://github.com/vinothsmart/">
                CopyRights
              </a>
            </center>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
