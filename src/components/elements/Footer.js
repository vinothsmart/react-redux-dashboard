import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="navbar text-light bg-dark">
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
  );
};

export default Footer;
