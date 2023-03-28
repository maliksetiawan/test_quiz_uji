/* eslint-disable react/react-in-jsx-scope */
import logoSmall from "../assets/images/logo-small.png";
import home from "../assets/images/fi_home.png";
// import truck from "../assets/images/fi_truck.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const toDashboard = () => {
    navigate("/dashboard");
    setIsActive((current) => !current);
  };

  const toCars = () => {
    navigate("/list-car");
    setIsActive((current) => !current);
  };
  return (
    <div>
      {/* Navbar */}
      <section>
        <nav
          className="position-fixed top-0 text-center text-light"
          style={{
            width: "70px",
            height: "100%",
            fontSize: "12px",
            backgroundColor: "#0d28a6",
            zIndex: "0",
          }}
        >
          <div className="p-3">
            <a href="https/">
              <img src={logoSmall} alt="" />
            </a>
          </div>
          <div
            className="btn p-0 py-2 rounded-0 w-100"
            style={{
              backgroundColor: isActive ? "rgba(255, 255, 255, 0.3)" : "",
              fontSize: "12px",
            }}
          >
            <button className="btn" onClick={toDashboard}>
              <img src={home} alt="" />
            </button>
            <p className="m-0 fw-bold text-white">Dashboard</p>
          </div>
          <div
            className="btn p-0 py-2 rounded-0 w-100"
            style={{ fontSize: "12px" }}
          >
            <button className="btn" onClick={toCars}>
              <img src={home} alt="" />
            </button>
            <br />
            <p className="m-0 text-white">pegawai</p>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default SideBar;
