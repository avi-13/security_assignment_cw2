import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleRequestApi } from "../../../apis/api";
import "../../../style/Hospitals.css";
import "../../../style/ViewSingleRequest.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const RequestDetails = () => {
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState("");

  useEffect(() => {
    // Fetch details based on the requestId
    getSingleRequestApi(id).then((res) => {
      console.log(res.data);
      setRequestDetails(res.data.requestblood);
    });
  }, [id]);

  if (!requestDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="viewreqContainer">
        <div className="w3-row-padding">
          <div className="w3-half">
            <div class="w3-display-container">
              <img
                className="hospital-img"
                src="https://th.bing.com/th/id/OIP.CRACOhG4JMd5LZFiPxwtMQHaFj?rs=1&pid=ImgDetMain"
                style={{ width: "100%", height: "420px" }}
                alt="hospital image"
              />
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2
                className="w3-text-grey w3-padding-16"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label>
                  <img
                    className="hospital-img"
                    src="../assets/icon/blood-bank.png"
                    alt=""
                    style={{ height: "5rem" }}
                    srcset=""
                  />
                </label>
                Hospital Information
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Hospital Name</b>
                </h5>
                <h6 className="w3-text text-primary">
                  <i className="fa fa-hospital fa-fw w3-margin-right"></i>
                  {requestDetails.hospitalName}
                </h6>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Hospital Address</b>
                </h5>
                <h6 className="w3-text text-primary ">
                  <i className="fa fa-map fa-fw w3-margin-right"></i>
                  {requestDetails.hospitalAddress}
                </h6>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Hospital Phone Number</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-phone fa-fw w3-margin-right"></i>
                  {requestDetails.phoneNumber}
                </h6>
                <hr />
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Person To Contact</b>
                </h5>
                <h6 className="w3-text-orange">
                  <i className="fa fa-user fa-fw w3-margin-right"></i>
                  {requestDetails.contactPerson}
                </h6>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Request Uploaded By: </b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-phone fa-fw w3-margin-right"></i>
                  {requestDetails.userId.fullName}
                </h6>
                <hr />
                <br />
              </div>
            </div>
          </div>
          <div class="w3-half">
            <div class="w3-white w3-text-grey w3-card-4">
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2
                  className="w3-text-red font-bold w3-padding-16"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <label>
                    <img
                      className="hospital-img"
                      src="../assets/icon/blood-bag.png"
                      alt="img"
                      style={{ height: "5rem" }}
                    />
                  </label>
                  <label className="ms-1">Blood Request Details</label>
                </h2>
                <div className="w3-container">
                  <h2 className="w3-opacity">
                    <b>Patient's Name</b>
                  </h2>
                  <h4 className="w3-text text-primary">
                    <i className="fa fa-user fa-fw"></i>
                    <label className="ms-2" htmlFor="">
                      {requestDetails.patientName}
                    </label>
                  </h4>
                  <hr />
                  <h2 className="w3-opacity">
                    <b>Required Blood</b>
                  </h2>
                  <h4 className="w3-text text-danger">
                    <i className="fa fa-water fa-fw"></i>
                    <label className="ms-2" htmlFor="">
                      {requestDetails.patientBloodType}
                    </label>
                  </h4>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Patient's Age</b>
                  </h5>
                  <h6 className="w3-text-orange">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    {requestDetails.patientAge}
                  </h6>
                  <hr />
                </div>

                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Date Required </b>
                  </h5>
                  <h6 className="w3-text-orange">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    {requestDetails.date}
                  </h6>
                  <hr />
                </div>

                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Amount Required</b>
                  </h5>
                  <h6 className="w3-text-orange">
                    <i className="fa fa-user fa-fw w3-margin-right"></i>
                    {requestDetails.quantity}
                  </h6>
                  <hr />
                </div>
              </div>
              <div class="w3-container">
                  <h2
                    className="w3-text-grey w3-padding-16 mb-0"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <label>
                      <img
                        className="hospital-img"
                        src="../assets/icon/info.png"
                        alt=""
                        style={{ height: "5rem" }}
                        srcset=""
                      />
                    </label>
                    Other Information
                  </h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Specific Components Required</b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-info fa-fw w3-margin-right"></i>
                      {requestDetails.components}
                    </h6>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Reasons for the necessity of the blood</b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-envelope fa-fw w3-margin-right"></i>
                      {requestDetails.reason}
                    </h6>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Precautions to be taken</b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-bolt fa-fw w3-margin-right"></i>
                      {requestDetails.anyPrecautions}
                    </h6>
                    <hr />
                  </div>
                  <br />
                
              </div>
            </div>
          </div>
          <div className=" w3-container req-map-wrapper mt-4 mb-8" key={requestDetails._id}>
            <h3 className="map-h3">Location of the {requestDetails.hospitalName} hospital</h3>
            <MapContainer
              className="req-map-container"
              center={[requestDetails.latitude, requestDetails.longitude]}
              zoom={25}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[requestDetails.longitude, requestDetails.latitude]}
              >
                <Popup>
                  <div>
                    <h3>{requestDetails.hospitalName}</h3>
                    <p>{requestDetails.hospitalAddress}</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetails;
