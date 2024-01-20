import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleRequestApi } from "../../../apis/api";
import "../../../style/ViewSingleRequest.css";

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


          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2
                className="w3-text-grey w3-padding-16"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label>
                  <img
                    src="../assets/icon/blood-bag.png"
                    alt=""
                    style={{ height: "5rem" }}
                    srcset=""
                  />
                </label>
                Blood Request Details
              </h2>
              <div className="w3-container">
                <h2 className="w3-opacity">
                  <b>Patient's Name</b>
                </h2>
                <h4 className="w3-text-teal">
                  <i className="fa fa-user fa-fw"></i>
                  <label className="ms-2" htmlFor="">
                    {requestDetails.patientName}
                  </label>
                </h4>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Patient's Age</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  {requestDetails.patientAge}
                </h6>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Person To Contact</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-user fa-fw w3-margin-right"></i>
                  {requestDetails.contactPerson}
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <br />
              </div>
            </div>
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2
                className="w3-text-grey w3-padding-16"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label>
                  <img
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
                <h6 className="w3-text-teal">
                  <i className="fa fa-hospital fa-fw w3-margin-right"></i>
                  {requestDetails.hospitalName}
                </h6>
                <p>Web Development! All I need to know in one place</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Hospital Address</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
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
                <br />
              </div>
            </div>
            {/* Others div */}
            <div className="w3-container w3-card w3-white">
              <h2
                className="w3-text-grey w3-padding-16"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label>
                  <img
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
                  <i className="fa fa-hospital fa-fw w3-margin-right"></i>
                  {requestDetails.components}
                </h6>
                <p>Web Development! All I need to know in one place</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Reasons for the necessity of the blood</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  {requestDetails.reason}
                </h6>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Precautions to be taken</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  {requestDetails.anyPrecautions}
                </h6>
                <hr />
              </div>
              <br />
            </div>
          </div>

          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src="../assets/icon/blood-bag.png"
                  style={{ width: "20%",height: "20%"}}
                  alt="Avatar"
                />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Jane Doe</h2>
                </div>
              </div>
              <div className="w3-container">
                <p>
                  <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  Designer
                </p>
                <p>
                  <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  London, UK
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  ex@mail.com
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  1224435534
                </p>
                <hr />

                <p className="w3-large">
                  <b>
                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                    Skills
                  </b>
                </p>
                <p>Adobe Photoshop</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
                <p>Photography</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "80%" }}
                  >
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p>Illustrator</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
                <p>Media</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "50%" }}
                  >
                    50%
                  </div>
                </div>
                <br />

                <p className="w3-large w3-text-theme">
                  <b>
                    <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                    Languages
                  </b>
                </p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "100%" }}
                  ></div>
                </div>
                <p>Spanish</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "55%" }}
                  ></div>
                </div>
                <p>German</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "25%" }}
                  ></div>
                </div>
                <br />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetails;
