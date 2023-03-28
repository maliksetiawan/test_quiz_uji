/* eslint-disable react/react-in-jsx-scope */
// import { BrowserRouter as Router } from "react-router-dom";
import { AppPrivateRoutes, AppPublicRoutes } from "./config/rooter.js";
import { useEffect, useState } from "react";
import { Fragment } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setLoggedIn(token);
  }, [isLoggedIn]);
  return (
    <Fragment>
      <div className="App">
        {!isLoggedIn && <AppPublicRoutes />}
        {isLoggedIn && <AppPrivateRoutes />}
      </div>
    </Fragment>
  );
}

export default App;
