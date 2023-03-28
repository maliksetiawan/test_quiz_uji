import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ModalLogin = () => {
  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <Container
        className="text-center text-white p-5 rounded-3 w-50 mt-5"
        style={{ backgroundColor: "#0D28A6" }}
      >
        <h3>You Already Login,</h3>
        <h3>do you want to continue?</h3>
        <div className="mt-5 d-flex gap-3 justify-content-center">
          <button
            className="btn btn-outline-light w-25"
            onClick={() => {
              localStorage.removeItem("access_token");
              window.location.replace("/");
            }}
          >
            No
          </button>
          <button onClick={toDashboard} className="btn btn-light w-25">
            Yes
          </button>
        </div>
      </Container>
    </div>
  );
};
