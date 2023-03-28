/* eslint-disable no-unused-vars */
import Header from "../component/header";
import SideBar from "../component/sideBar";
import { useNavigate } from "react-router-dom";
import CarCard from "../component/card";
import { requestApiGET } from "../ex-redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SvgComponent from "../component/loader";

function ListCar(props) {
  const navigate = useNavigate();
  const toAddNewCar = (e) => {
    navigate("/add-new-car");
    window.location.reload(false);
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestApiGET({ state: state.dataList.listOrders }));
  }, [dispatch, state.dataList.listOrders]);

  return (
    <div>
      <Header />
      <SideBar />
      {/* Content */}
      <div
        className="position-absolute "
        style={{
          zIndex: "-99",
          width: "100%",
          padding: "100px 120px 200px 320px",
          backgroundColor: "#F4F5F7",
          fontFamily: "Arial",
        }}
      >
        <div className="d-flex">
          <p className="fw-bold">Pegawai</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right mt-1"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p>List Pegawai</p>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="fw-bold">Nama Nama Pegawai</h5>
          <button onClick={toAddNewCar} className="btn btn-primary rounded-0">
            + Add New Pegawai
          </button>
        </div>
        <div className="d-flex gap-2 ">
          <button className="btn btn-primary mt-3 rounded-1 ">All</button>
          <button className="btn btn-light  border-primary text-primary mt-3 rounded-1 ">
            Divisi IT
          </button>
          <button className="btn btn-light border-primary text-primary mt-3 rounded-1 ">
            Divisi Finance
          </button>
          <button className="btn btn-light border-primary text-primary mt-3 rounded-1 ">
           Divisi Product
          </button>
        </div>
        <div className="mt-3">
    
        </div>
      </div>
    </div>
  );
}

export default ListCar;
