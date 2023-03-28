/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { fetchApi } from "../config/fetchApi.js";
import bg_img from "../assets/images/login_bg.png";
import logo from "../assets/images/logo.png";

function Login() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = (_) => {
    const { name, value } = _.target;
    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (_) => {
    _.preventDefault();
    const { data } = await fetchApi(state);
    localStorage.setItem("access_token", data.access_token);
    window.location.replace("/dashboard");
  };
  return (
    <div className="d-flex justify-content-end">
      <img
        className="w-100 h-100 position-absolute"
        src={bg_img}
        alt=""
        style={{ zIndex: "-99", objectFit: "cover" }}
      />
      <div
        className="w-100 h-100 position-absolute"
        alt=""
        style={{ zIndex: "-99", backgroundColor: "#0D28A6", opacity: "40%" }}
      ></div>
      <div
        className="bg-white h-100 position-absolute px-5"
        style={{ width: "35%", padding: "15% 0 0 0" }}
      >
        <img src={logo} alt="logo" />
        <h2 className="fw-bold mt-3">Welcome, Admin </h2>
        <form className="form mt-4" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control rounded-1"
              id="exampleInputEmail1"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control rounded-1"
              id="exampleInputPassword1"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" class="btn btn-primary rounded-1">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
