import React, { useEffect, useState } from "react";
import { viewRequestApi } from "../../apis/api";

export default function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    viewRequestApi()
      .then((res) => {
        const formattedRequests = res.data.requestList.map((request) => {
          const dateOfBirth = new Date(request.dob);
          const formattedDateOfBirth = `${dateOfBirth.getDate()}/${
            dateOfBirth.getMonth() + 1
          }/${dateOfBirth.getFullYear()}`;
          return { ...request, dob: formattedDateOfBirth };
        });
        setRequests(formattedRequests);
      })
      .catch((error) => {
        console.error("Error fetching Requests:", error);
      });
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        className="container content"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <h2 className="text-center">All The Requests</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Patient Name</th>
                <th>Patient Blood Type</th>
                <th>Phone Number</th>
                <th>Hospital Name</th>
                <th>Hospital Address</th>
                <th>Quantity</th>
                <th>Urgency</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Contact Person</th>
                <th>Requested By</th>
              </tr>
            </thead>
            <tbody>
              {requests?.map((request) => (
                <tr key={request._id}>
                  <td>{request.patientName}</td>
                  <td>{request?.patientBloodType}</td>
                  <td>{request?.phoneNumber}</td>
                  <td>{request?.hospitalName}</td>
                  <td>{request?.hospitalAddress}</td>
                  <td>{request?.quantity}</td>
                  <td>{request?.urgency}</td>
                  <td>{request?.reason}</td>
                  <td>{request?.date}</td>
                  <td>{request?.contactPerson}</td>
                  <td>{request?.userId.fullName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
