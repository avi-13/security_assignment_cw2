import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateStatusApi, viewRequestBBApi } from "../../apis/api";
import CustomCircularProgress from "../../components/CustomCircularProgress";

const BBRequests = () => {
  const [bloodRequests, setBloodRequest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    try {
      viewRequestBBApi().then((res) => {
        setIsLoading(true);
        // console.log(res.data);
        setBloodRequest(res.data.requestList);
        // console.log(res.data.requestList);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  }, []);

  const handleStatus = async (e, requestId) => {
    e.preventDefault();
    try {
      setStatus(true);
      updateStatusApi({
        id: requestId,
        isAccepted: true,
      });
      toast.success("Request updated successfully");
    } catch (error) {
      console.error("Error updating Request:", error);
    }
  };

  return (
    <div>
      {isLoading && <CustomCircularProgress />}
      {error && (
        <p className="text-center text-danger">
          Error: No News Available Right Now
        </p>
      )}
      {!isLoading && !error && (
        <div className="container">
          <h1 className="text-center">Blood Requests</h1>
          <div className="overflow-y-auto">
            <table className="table table-striped">
              <thead>
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bloodRequests?.map((requests, index) => (
                  <tr key={index}>
                    <td>{requests.patientName}</td>
                    <td>{requests?.patientBloodType}</td>
                    <td>{requests?.phoneNumber}</td>
                    <td>{requests?.hospitalName}</td>
                    <td>{requests?.hospitalAddress}</td>
                    <td>{requests?.quantity}</td>
                    <td>{requests?.urgency}</td>
                    <td>{requests?.reason}</td>
                    <td>{requests?.date}</td>
                    <td>{requests?.contactPerson}</td>
                    <td>{requests?.userId.fullName}</td>
                    <td>
                      {requests?.isAccepted === false? (
                        <button
                          onClick={(e) => {
                            handleStatus(e, requests?._id);
                          }}
                          className="bg-red-700 hover:bg-red-800 text-white font-bold text-sm py-2 px-4 rounded"
                        >
                          Accept Request
                        </button>
                      ) : (
                        <>Request Already Accepted</>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BBRequests;
