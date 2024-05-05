import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link, useParams } from "react-router-dom";
import { fetchSingleBloodBankApi } from "../../../apis/api";

const SingleBloodbank = () => {
  const { id } = useParams();
  const [bloodbank, setBloodbank] = useState("");

  useEffect(() => {
    fetchSingleBloodBankApi(id).then((res) => {
      setBloodbank(res.data.bloodbank);
    });
  }, [id]);

  if (!bloodbank) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="container-fluid p-5 mt-5">
          <section class="relative m-0 p-5">
            <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
                <div class="img">
                  <div class="img-box h-full max-lg:mx-auto ">
                    <img
                      src={bloodbank.bbImageUrl}
                      alt="Yellow Tropical Printed Shirt image"
                      class="max-lg:mx-auto lg:ml-auto h-full"
                    />
                  </div>
                </div>
                <div class="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                  <div class="data w-full max-w-xl">
                    <p class="text-lg font-medium leading-8 text-red-800 mb-4">
                      BloodBank&nbsp;🩸&nbsp;
                    </p>
                    <h2 class="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                      {bloodbank.bbName}
                    </h2>
                    <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                      <h6 class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                        Address : {bloodbank.bbAddress}
                      </h6>
                      <div class="flex items-center gap-2">
                        <span class=" font-bold leading-7 text-green-600 text-lg ">
                          Contact No. : {bloodbank.bbContact}
                        </span>
                      </div>
                    </div>
                    <p class="text-gray-700 text-base font-normal mb-4">
                      {bloodbank.specialInstructions}
                    </p>

                    <p class="text-gray-900 text-lg leading-8 font-medium mb-4">
                      Availbale Blood Groups :
                    </p>
                    <div class="w-full pb-8 border-b border-gray-100 flex-wrap">
                      {bloodbank?.availableBloodGroups ? (
                        <div class="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                          {bloodbank?.availableBloodGroups?.map(
                            (bloodGroup) => (
                              <button class="bg-red-800 text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-white border border-red-800 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-red-400 hover:!text-gray-900 hover:border-gray-3000">
                                {bloodGroup}
                              </button>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="w-full">No Available Blood Groups</p>
                      )}
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                      <p class="text-gray-900 text-lg leading-8 font-medium mb-4">
                        Operating Hours: {bloodbank.operatingHours}
                      </p>
                    </div>
                    <p class="text-gray-800 text-lg mb-4">
                      Our Services: {bloodbank.serviceOffered}
                    </p>
                    <div class="flex items-center gap-3">
                      <Link
                        class="text-center w-full px-4 py-4 rounded-lg bg-gray-900 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-red-800 hover:shadow-red-800"
                        to={`/req_for_bb/${bloodbank._id}`}
                      >
                        Request Blood
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <p class="text-gray-900 text-base font-normal mb-5">
            {bloodbank.additionalNotes}
          </p>
          <div className="row">
            <div className="col-12 p-0">
              <MapContainer
                className="req-map-container"
                center={[bloodbank.latitude, bloodbank.longitude]}
                zoom={25}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[bloodbank.latitude, bloodbank.longitude]}>
                  <Popup>
                    <div>
                      <h3>{bloodbank.bbName}</h3>
                      <p>{bloodbank.bbAddress}</p>
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

export default SingleBloodbank;
