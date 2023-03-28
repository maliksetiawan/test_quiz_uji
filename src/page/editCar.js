import Header from "../component/header";
import SideBar from "../component/sideBar";
import {
  requestApiGETById,
  requestPOST,
  requestPUT,
} from "../ex-redux/actions/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button, Input } from "reactstrap";

function EditCar() {
  const dispatch = useDispatch();
  const { formState } = useSelector((state) => state.dataList);
  const navigate = useNavigate();
  const [forms, setforms] = useState(formState);
  const { id } = useParams();
  const [, setImage] = useState(null);
  const [updateImg, setUpdateImg] = useState(false);
  const handleChange = (_) => {
    const { value, name } = _.target;
    setforms((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    id && dispatch(requestApiGETById({ id }));
  }, [id]);
  useEffect(() => {
    setTimeout(() => {
      setforms(formState);
      id && setImage(formState.image);
    }, 1000);
  }, [formState, id]);
  const fileUpload = (_) => {
    var file = _.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImage(reader.result);
      setforms((prev) => ({
        ...prev,
        image: file,
      }));
      id && setUpdateImg(true);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (_) => {
    _.preventDefault();
    if (id) {
      if (!updateImg) {
        delete forms.image;
      }
      dispatch(requestPUT({ id, value: forms, navigate }));
    } else {
      dispatch(requestPOST({ value: forms, navigate }));
    }
  };
  const cancelButton = () => {
    navigate("/list-car");
  };
  return (
    <div>
      <Header />
      <SideBar />
      {/* Content */}
      <div
        className="position-absolute"
        style={{
          zIndex: "-99",
          width: "100%",
          height: "100%",
          padding: "100px 30px 200px 320px",
          backgroundColor: "#F4F5F7",
          fontFamily: "Arial",
        }}
      >
        <div className="d-flex">
          <p className="fw-bold">pegawai</p>
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
          <p className="fw-bold">list pegawai</p>
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
          <p>Edit Data Pegawai</p>
        </div>
        <h4 className="fw-bold mt-2">Edit Data Pegawai</h4>
        <div
          className="mt-3 bg-white p-3 ps-4 position-absolute"
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "6rem",
            width: "73%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>Nama</td>
                <td>
                  <Input
                    className="ms-5 my-2"
                    onChange={handleChange}
                    name="name"
                    placeholder="Name..."
                    type="text"
                    value={forms.name}
                  />
                </td>
              </tr>
              <tr>
                <td>Gaji</td>
                <td>
                  <Input
                    className="ms-5 my-2"
                    onChange={handleChange}
                    name="price"
                    placeholder="Price..."
                    type="text"
                    value={forms.price}
                  />
                </td>
              </tr>
              <tr>
                <td>Foto</td>
                <td>
                  <Input
                    className="ms-5 my-2"
                    name="status"
                    type="file"
                    onChange={fileUpload}
                  />
                </td>
              </tr>
              <tr>
                <td>Divisi</td>
                <td>
                  <select
                    className="form-select ms-5 my-2"
                    name="category"
                    value={forms.category}
                    onChange={handleChange}
                  >
                    <option value="small">Manager</option>
                    <option value="medium">Staff</option>
                    <option value="large">Intern</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Created at</td>
                <td>
                  <p className="ms-5 my-2">-</p>
                </td>
              </tr>
              <tr>
                <td>Update</td>
                <td>
                  <p className="ms-5 my-2">-</p>
                </td>
              </tr>
            </table>
            <div
              className="position-absolute"
              style={{
                margin: "300px 0 0 0",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <button
                className="btn btn-outline-primary me-3 bg-white"
                onClick={cancelButton}
              >
                Cancel
              </button>
              <Button color="primary">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCar;
