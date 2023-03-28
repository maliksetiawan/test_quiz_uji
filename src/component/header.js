/* eslint-disable react/react-in-jsx-scope */
import logoProfile from "../assets/images/logo-profile.png";
import { Dropdown } from "react-bootstrap";
import OffCanvas from "../component/offCanvas";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <section>
        <nav
          className="navbar navbar-expand-sm shadow-sm bg-white position-fixed w-100"
          style={{ zIndex: "-5", height: "62px" }}
        >
          <div className="container-fluid ms-5 ps-3">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-4">
                <li className="ms-5 ps-5">
                  <OffCanvas />
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control rounded-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-primary rounded-0 fw-bold"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <ul className="navbar-nav mb-2 mb-lg-0 ms-3">
                <li className="nav-item">
                  <a href="nav-Link">
                    <img src={logoProfile} alt="" />
                  </a>
                </li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="bg-white"
                    align="end"
                    id="dropdown-menu-align-end"
                    border="white"
                  >
                    Ridwan Malik
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-3 me-2">
                    <Dropdown.Item eventKey="1" className="text-end">
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => {
                          localStorage.removeItem("access_token");
                          window.location.replace("/");
                        }}
                      >
                        Log out
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
