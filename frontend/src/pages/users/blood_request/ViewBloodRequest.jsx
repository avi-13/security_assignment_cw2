import React, { useEffect, useState } from "react";
import { viewRequestApi } from "../../../apis/api";
import "../../../style/viewrequests.css";
import { Link } from "react-router-dom";

const ViewBloodRequest = () => {
  const [bloodRequest, setBloodRequest] = useState([]);
  useEffect(() => {
    viewRequestApi().then((res) => {
      console.log(res.data);
      setBloodRequest(res.data.requestblood);
    });
  }, []);

  return (
    <>
      <div style={{ marginTop: "4rem" }}>
        <header className="blood-request_header">
          <h1>Blood Requests</h1>
        </header>

        <section className="request-section">
          {bloodRequest.map((item) => (
            <div className="blood-request">
              <header>
                <h2>Urgent Request</h2>
              </header>
              <div className="blood-request-body">
                <p>
                  <strong>Patient:</strong> {item.patientName}
                </p>
                <p>
                  <strong>Blood Type Needed:</strong> {item.patientBloodType}
                </p>
                <p>
                  <strong>Units Required:</strong>
                  {item.quantity}
                </p>
                <p>
                  <strong>Urgency Level:</strong>
                  {item.urgency}
                </p>
                <p>
                  <strong>Additional Notes:</strong>
                  {item.reason}
                </p>
                <p>
                  <strong>Hospital:</strong>
                  {item.hospitalName}
                </p>
                <p>
                  <strong>Contact Person:</strong> {item.contactPerson}
                </p>
              </div>
              <div className="blood-request-footer">
                <p>Contact: {item.phoneNumber}</p>
                <p><Link className="text-danger" to={`/view_request/${item._id}`}>See more...</Link> </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default ViewBloodRequest;
