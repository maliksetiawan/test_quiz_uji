/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import menu from "../assets/images/fi_menu.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/images/logo.png";

const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button className="ms-4" variant="white" onClick={toggleShow}>
        <img src={menu} alt="" />
      </Button>

      <Offcanvas
        className="ms-5 ps-3"
        style={{ zIndex: "-1", width: "250px", margin: "65px", height: "100%" }}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header>
          <Offcanvas.Title style={{ margin: "-100px 0 0 -40px" }}>
            <a className="navbar-brand mx-5" href="https//">
              <img src={logo} alt="" />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <h5
          class="fw-bold ms-4"
          style={{ fontSize: "14px", margin: "-10px 0 15px 0" }}
        >
          DASHBOARD
        </h5>
        <div class="py-2 ps-4" style={{ backgroundColor: "#cfd4ed" }}>
          <p class="fw-bold m-0" style={{ fontSize: "14px" }}>
            Dashboard
          </p>
        </div>
      </Offcanvas>
    </>
  );
}

function OffCanvas() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default OffCanvas;
