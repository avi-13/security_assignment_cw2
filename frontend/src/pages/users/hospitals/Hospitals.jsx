import "leaflet/dist/leaflet.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchHospitalsApi } from "../../../apis/api";
import "../../../style/Hospitals.css";

const Hospitals = () => {
  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    fetchHospitalsApi().then((res) => {
      if (res.data.success && res.data.hospital.length > 0) {
        setHospitalData(res.data.hospital);
      }
    });
  }, []);

  return (
    <>
      <div className="hospital-wrapper">
        <h1 className="text-center text-primary">List of all the Hospitals</h1>
        <div className="hospital-container">
          {hospitalData.map((hospital) => (
            <Link
              className="hospital-card text-decoration-none"
              key={hospital._id}
              to={`/single-hospital/${hospital._id}`}
            >
              <img
                className="image-container"
                src="https://cdn.onlyinyourstate.com/wp-content/uploads/2015/10/image15.jpeg"
                alt="Hospital 1"
              />
              <div className="d-flex flex-row gap-4 justify-content-between">
                <h3 className="map-h3">{hospital.hospitalName}</h3>
                <h3 className="map-h3">{hospital.hospitalAddress}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hospitals;
