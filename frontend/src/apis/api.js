import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
});

// ======================================> user api <===============================

export const createUserApi = (data) => Api.post("/api/user/register", data);

export const sendOtpApi = (data) => Api.post("/api/user/send_otp", data);

export const loginUserApi = (data) => Api.post("/api/user/login", data);

export const updateUser = (id, data) =>
  Api.put(`/api/user/updateUser/${id}`, data);

export const fetchAllUsersApi = (data) =>
  Api.get("/api/user/getAllUsers", data);

export const getMyRequestApi = (id) =>
  Api.get(`/api/user/get_my_request/${id}`);

export const getSingleUserApi = (id) => Api.get(`/api/user/single_user/${id}`);

export const forgetPasswordApi = (data) =>
  Api.post("/api/user/forgetpassword", data);

export const searchUsersApi = (district, bloodGroup) =>
  Api.get(
    `/api/user/search_user?district=${district}&bloodGroup=${bloodGroup}`
  );

// ======================================> Hospitals api <===============================

export const createHospitalApi = (data) =>
  Api.post("/api/hospital/addHospital", data);

export const getallhospitalsApi = (
  addressSearch,
  bloodGroupsSearch,
  hospitalSearch,
  sortBy,
  sortOrder
) =>
  Api.get("/api/hospital/getallhospitals", {
    params: {
      addressSearch,
      bloodGroupsSearch,
      hospitalSearch,
      sortBy,
      sortOrder,
    },
  });

export const fetchSingleHospitalApi = (id) =>
  Api.get(`/api/hospital/single-hospital/${id}`);

// for users side
export const fetchHospitalsApi = (data) =>
  Api.get("/api/hospital/getallhospitals", data);

export const deletehospitalApi = (id) =>
  Api.delete(`/api/hospital/deletehospital/${id}`);

export const updatehospitalApi = (id, formData) =>
  Api.put(`/api/hospital/updatehospital/${id}`, formData);

// ======================================> BloodBank api <===============================

export const createBloodBankApi = (data) =>
  Api.post("/api/bloodbank/addbloodbank", data);

export const getallBloodBankApi = (
  bbAddressSearch,
  bloodGroupsSearch,
  bloodbankSearch,
  sortBy,
  sortOrder
) =>
  Api.get("/api/bloodbank/getallbloodbank", {
    params: {
      bbAddressSearch,
      bloodGroupsSearch,
      bloodbankSearch,
      sortBy,
      sortOrder,
    },
  });

export const fetchSingleBloodBankApi = (id) =>
  Api.get(`/api/bloodbank/single-bloodbank/${id}`);

export const deleteBloodBankApi = (id) =>
  Api.delete(`/api/bloodbank/deletebloodbank/${id}`);

  export const sendInfoApi = (id) =>
  Api.get(`/api/bloodbank/send-info/${id}`);

export const updateBloodBankApi = (id, formData) =>
  Api.put(`/api/bloodbank/updatebloodbank/${id}`, formData);

// ======================================> BloodBank api <===============================

export const beADonorApi = (id, formData) =>
  Api.put(`/api/user/beadonor/${id}`, formData);

// ======================================> Request Blood API <===============================
export const addRequestAPI = (data) =>
  Api.post("/api/blood_request/add_request", data);

export const viewRequestApi = (data) =>
  Api.get("/api/blood_request/all_requests", data);

export const getSingleRequestApi = (id) =>
  Api.get(`/api/blood_request/request/${id}`);

export const deleteRequestApi = (id) =>
  Api.delete(`/api/blood_request/delete_request/${id}`);

export const updateRequestApi = (id, data) =>
  Api.put(`/api/blood_request/update_request/${id}`, data);

export const updateShowRequestApi = (data) =>
  Api.put(`/api/blood_request/update_show_request`, data);

// ======================================> Contact US API <===============================

export const sendMessageApi = (data) =>
  Api.post("/api/contact/send-message", data);

export const getContactUsApi = (data) =>
  Api.get("/api/contact/getallcontact", data);

export const newsAPi = (data) =>
  Api.get(
    "https://newsdata.io/api/1/news?apikey=pub_3882905bc0f7ab80ee7df6334e62ac3b05d3a&q=health&country=np",
    data
  );


// ======================================> Request For Blood Bank API <===============================
export const addRequestBBApi = (formData) =>
  Api.post("/api/req_bb/add_request_bb", formData);   

export const viewRequestBBApi = (data) =>
  Api.get("/api/req_bb/all_requests_bb", data);

export const getSingleRequestBBApi = (id) =>
  Api.get(`/api/req_bb/request_bb/${id}`);

export const getReqOfUserApi = (id) =>
  Api.get(`/api/req_bb/get_user_request/${id}`);

export const deleteRequestBBApi = (id) =>
  Api.delete(`/api/req_bb/delete_request_bb/${id}`);

export const updateRequestBBApi = (id, data) =>
  Api.put(`/api/req_bb/update_request_bb/${id}`, data);

export const  updateStatusApi= (data) =>
  Api.put(`/api/req_bb/update_status`, data);

// export const getMyRequestBBApi = (id) =>
//   Api.get(`/api/requestForBB/get_my_request/${id}`);

// ======================================> Campaign API <===============================
export const addCampaignApi = (data) =>
  Api.post("/api/campaign/add_campaign", data);

export const viewCampaignApi = (data) =>
  Api.get("/api/campaign/get_all_campaign", data);

export const getSingleCampaignApi = (id) =>
  Api.get(`/api/campaign/single_campaign/${id}`);

export const getAllCampaignByBBApi = (id) =>
  Api.get(`/api/campaign/campaign_by_bb/${id}`);

export const deleteCampaignApi = (id) =>
  Api.delete(`/api/campaign/delete_campaign/${id}`);

export const updateCampaignApi = (id, data) =>
  Api.put(`/api/campaign/update_campaign/${id}`, data);


// ======================================> Registered Users For Campaigns API <===============================

export const registerForCampaignApi = (data) =>
  Api.post("/api/registered_users/register_for", data);

export const getRegisteredUsersApi = (id) =>
  Api.get(`/api/registered_users/registered_users/${id}`);