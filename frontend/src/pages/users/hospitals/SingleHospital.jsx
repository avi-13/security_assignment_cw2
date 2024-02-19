import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import { fetchSingleHospitalApi } from "../../../apis/api";

const SingleHospital = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState("");

  useEffect(() => {
    fetchSingleHospitalApi(id).then((res) => {
      setHospital(res.data.hospital);
    });
  }, [id]);

  if (!hospital) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="container-fluid p-5 mt-5">
          <div className="row mb-4">
            <div className="col-md-6 p-0">
              <img
                src="https://focuscentralpa.org/wp-content/uploads/2023/02/Evan.jpg"
                className="img-fluid rounded-4 h-100"
                alt="Hospital Image"
              />
            </div>
            <div className="col-md-6 p-0">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{hospital.hospitalName}</h2>
                  <p className="card-text">{hospital.hospitalAddress}</p>
                  <p className="card-text">
                    Phone: {hospital.hospitalContactNumber}
                  </p>
                  <p className="card-text"> {hospital.hospitalType}</p>
                  <p className="card-text"> {hospital.hospitalServices}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <MapContainer
                className="req-map-container"
                center={[hospital.latitude, hospital.longitude]}
                zoom={25}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[hospital.latitude, hospital.longitude]}>
                  <Popup>
                    <div>
                      <h3>{hospital.hospitalName}</h3>
                      <p>{hospital.hospitalAddress}</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHospital;
