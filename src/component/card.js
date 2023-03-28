/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Row, Col, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestDELETE } from "../ex-redux/actions/action";
import iconTrash from "../assets/images/icon_trash.svg";
import iconEdit from "../assets/images/icon_edit.svg";
import vehicle from "../assets/images/Vehicle.png";
import moment from "moment";
import icon_user from "../assets/images/fi_users.svg";
import icon_clock from "../assets/images/fi_clock.svg";
import img_car from "../assets/images/img-car.png";

const CarCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const formatNumeric = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setId(item.id);
  };
  const categoryCar = (car) => {
    switch (car) {
      case "small":
        return "2 - 4 people";
      case "medium":
        return "4 - 6 people";
      case "large":
        return "6 - 8 people";
      default:
        return car;
    }
  };
  console.log(id);
  return (
    <div className="">
      <Row className="row g-3 gy-4">
        {data.map((item, index) => {
          return (
            <Col key={index} className="col-4">
              <Card
                className="mobil-card p-3"
                style={{ height: "auto", width: "300px" }}
              >
                <Card.Img
                  src={item.image ? item.image : img_car}
                  alt="car-list"
                  className="card-img-top"
                  style={{ height: "200px", width: "100%", maxHeight: "300px" }}
                />
                <Card.Body className="card-body d-grid gap-2 p-0 pt-3">
                  <Card.Text
                    className="card-text"
                    style={{ fontSize: "18px " }}
                  >
                    {item.name}
                  </Card.Text>
                  <Card.Title
                    className="card-title fw-bold"
                    style={{ fontSize: "20px " }}
                  >
                    {formatNumeric(item.price)} / hari
                  </Card.Title>
                  <Card.Text className="card-text ">
                    <div className="d-flex">
                      <img src={icon_user} alt="" />
                      <p className="m-0 ms-2">{categoryCar(item.category)}</p>
                    </div>
                    <div className="d-flex mt-3">
                      <img src={icon_clock} alt="" />
                      <p className="m-0 ms-2">
                        Updated at
                        {moment(item.updatedAt, `YYYY-MM-DD HH:mm`).format(
                          ` DD MMM YYYY, HH:mm`
                        )}
                      </p>
                    </div>
                  </Card.Text>
                  <div className="d-flex gap-3">
                    <button
                      className="flex-fill btn rounded-1 btn-outline-danger"
                      type="button"
                      onClick={() => handleShow(item)}
                    >
                      <img className="me-2" src={iconTrash} alt="" />
                      Delete
                    </button>
                    <button
                      className="flex-fill btn rounded-1 btn-success"
                      type="button"
                      onClick={() => navigate(`/edit-car/${item.id}`)}
                    >
                      <img className="me-2" src={iconEdit} alt="" />
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Modal
        style={{ marginTop: "200px" }}
        className="text-center "
        show={show}
        onHide={handleClose}
      >
        <Modal.Body className="p-5">
          <img src={vehicle} alt="" />
          <h3 className="my-4">Menghapus Data Mobil</h3>
          <p>
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
          <div className="d-flex justify-content-center gap-3 mt-5">
            <button
              onClick={() => dispatch(requestDELETE({ id: id }))}
              className="btn btn-primary rounded-1 w-25"
            >
              Ya
            </button>
            <button
              onClick={handleClose}
              className="btn btn-outline-primary rounded-1 w-25"
            >
              Tidak
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CarCard;
