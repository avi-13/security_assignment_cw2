import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { viewRequestApi } from "../../../apis/api";
import "../../../style/viewrequests.css";

const ViewBloodRequest = () => {
  const [bloodRequest, setBloodRequest] = useState({
    critical: [],
    urgent: [],
    normal: [],
  });
  useEffect(() => {
    viewRequestApi().then((res) => {
      console.log(res.data);
      setBloodRequest(res.data.categorizedData);
    });
  }, []);

  return (
    <>
      {/* for Critical Condition */}
      <div className="critical" style={{ marginTop: "6rem" }}>
        <h1 className="text-center">Critical Condition Requests</h1>
        <ul className="cards">
          {bloodRequest.critical ? (
            bloodRequest.critical.map((item) => (
              <li>
                <a href="" className="card">
                  <div className="card_details">
                    <p>
                      <strong>Patient:</strong> {item.patientName}
                    </p>
                    <p>
                      <strong>Blood Type Needed:</strong>
                      {item.patientBloodType}
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
                  <div
                    className="card__overlay"
                    style={{ backgroundColor: "rgb(128, 16, 16)" }}
                  >
                    <div
                      className="card__header text-white"
                      style={{ backgroundColor: "rgb(128, 16, 16)" }}
                    >
                      <div className="card__header-text">
                        <h3 className="card__title text-white">
                          <strong>Person To Contact:</strong>{" "}
                          {item.contactPerson}
                        </h3>
                        <span className="card__status text-white">
                          1 hour ago
                        </span>
                      </div>
                    </div>
                    <p className="card__description d-flex justify-content-between gap-2 text-white">
                      <Link className="btn btn-primary w-50" to={""}>
                        Share
                      </Link>
                      <Link className="btn btn-success w-50" to={""}>
                        Accept Request
                      </Link>
                    </p>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <>No Any Critical Blood Requests Found</>
          )}
        </ul>
      </div>

      {/* for Urgent Condition */}

      <div className="urgent">
        <h1 className="text-center">Urgent Condition Requests</h1>
        <ul className="cards">
          {bloodRequest.urgent ? (
            bloodRequest.urgent.map((item) => (
              <li>
                <a href="" className="card">
                  <div className="card_details">
                    <p>
                      <strong>Patient:</strong> {item.patientName}
                    </p>
                    <p>
                      <strong>Blood Type Needed:</strong>
                      {item.patientBloodType}
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
                  <div
                    className="card__overlay"
                    style={{ backgroundColor: "#134c79" }}
                  >
                    <div
                      className="card__header"
                      style={{ backgroundColor: "#134c79" }}
                    >
                      <div className="card__header-text">
                        <h3 className="card__title text-white">
                          Jessica Parker
                        </h3>
                        <span className="card__status text-white">
                          1 hour ago
                        </span>
                      </div>
                    </div>
                    <p className="card__description d-flex justify-content-between gap-2 text-white">
                      <Link className="btn btn-primary w-50" to={""}>
                        Share
                      </Link>
                      <Link className="btn btn-success w-50" to={""}>
                        Accept Request
                      </Link>
                    </p>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <>No Any Urgent Blood Requests Found</>
          )}
        </ul>
      </div>

      {/* for Normal Condition */}
      <div className="normal">
        <h1 className="text-center">Normal Condition Requests</h1>
        <ul className="cards">
          {bloodRequest.normal ? (
            bloodRequest.normal.map((item) => (
              <li>
                <a href="#" className="card">
                  <div className="card_details">
                    <p>
                      <strong>Patient:</strong> {item.patientName}
                    </p>
                    <p>
                      <strong>Blood Type Needed:</strong>
                      {item.patientBloodType}
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
                  <div
                    className="card__overlay text-white"
                    style={{ backgroundColor: "#c39715" }}
                  >
                    <div
                      className="card__header"
                      style={{ backgroundColor: "#c39715" }}
                    >
                      <div className="card__header-text">
                        <h3 className="card__title text-white">
                          Jessica Parker
                        </h3>
                        <span className="card__status text-white">
                          1 hour ago
                        </span>
                      </div>
                    </div>
                    <p className="card__description d-flex justify-content-between gap-2 text-white">
                      <Link className="btn btn-primary w-50" to={""}>
                        Share
                      </Link>
                      <Link className="btn btn-success w-50" to={""}>
                        Accept Request
                      </Link>
                    </p>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <>No Any Normal Blood Requests Found</>
          )}
        </ul>
      </div>
    </>
  );
};

export default ViewBloodRequest;
