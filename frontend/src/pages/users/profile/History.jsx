import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMyRequestApi } from "../../../apis/api";

const History = () => {
  const { id } = useParams();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await getMyRequestApi(id);
        setRequests(response?.data?.userRequests);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, [id]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ marginTop: "6rem" }}>
        My Requests History
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Patient Name</th>
              <th scope="col">Patient Age</th>
              <th scope="col">Patient Blood Type</th>
              <th scope="col">Components</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Hospital Name</th>
              <th scope="col">Hospital Address</th>
              <th scope="col">Quantity</th>
              <th scope="col">Urgency</th>
              <th scope="col">Reason</th>
              <th scope="col">Date</th>
              <th scope="col">Instruction</th>
              <th scope="col">Any Precautions</th>
              <th scope="col">Contact Person</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request?._id}>
                <td>{request?.patientName}</td>
                <td>{request?.patientAge}</td>
                <td>{request?.patientBloodType}</td>
                <td>{request?.components}</td>
                <td>{request?.phoneNumber}</td>
                <td>{request?.hospitalName}</td>
                <td>{request?.hospitalAddress}</td>
                <td>{request?.quantity}</td>
                <td>{request?.urgency}</td>
                <td>{request?.reason}</td>
                <td>{request?.date}</td>
                <td>{request?.instruction}</td>
                <td>{request?.anyPrecautions}</td>
                <td>{request?.contactPerson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
