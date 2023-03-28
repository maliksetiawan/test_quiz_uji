/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Table from "react-bootstrap/Table";
import sort_icon from "../assets/images/fi_sort.svg";
import moment from "moment";

function TableCar({ data }) {
  const formatNumeric = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  return (
    <div className="pe-3">
      <Table className="table mt-4">
        <thead>
          <tr className="table-primary">
            <th>No</th>
            <th>
              <div className="d-flex">
                <span className="flex-grow-1 ">User Email</span>
                <img src={sort_icon} alt="" />
              </div>
            </th>
            <th>
              <div className="d-flex">
                <span className="flex-grow-1 ">Car</span>
                <img src={sort_icon} alt="" />
              </div>
            </th>
            <th>
              <div className="d-flex">
                <span className="flex-grow-1 ">Start Rent</span>
                <img src={sort_icon} alt="" />
              </div>
            </th>
            <th>
              <div className="d-flex">
                <span className="flex-grow-1 ">Finish Rent</span>
                <img src={sort_icon} alt="" />
              </div>
            </th>
            <th>
              <div className="d-flex">
                <span className="flex-grow-1 ">Price</span>
                <img src={sort_icon} alt="" />
              </div>
            </th>
            <th>
              <div className="d-flex">
                <span className="flex-grow-1 ">Category</span>
                <img src={sort_icon} alt="" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index} className="bg-white">
                <td>{index + 1}</td>
                <td>{item.User.email}</td>
                <td>{!item.Car ? `car not found` : item.Car}</td>
                <td>
                  {moment(item.start_rent_at, `YYYY-MM-DD`).format(
                    `DD MMM YYYY`
                  )}
                </td>
                <td>
                  {moment(item.finish_rent_at, `YYYY-MM-DD`).format(
                    `DD MMM YYYY`
                  )}
                </td>
                <td>{formatNumeric(item.total_price)}</td>
                <td>{!item.category && `not found`}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableCar;
