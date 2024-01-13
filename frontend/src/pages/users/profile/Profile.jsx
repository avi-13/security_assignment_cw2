import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactSwitch from "react-switch";
import { toast } from "react-toastify";
import { getSingleUserApi, updateUser } from "../../../apis/api";
import "../../../style/profile.css";

const Profile = () => {
  const { id } = useParams();

  const users = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  // useState (setting input value)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOb] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [noPreviousDonation, setPrevDonation] = useState("");
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  // use effect to fetch product details
  useEffect(() => {
    //API call
    getSingleUserApi(id).then((res) => {
      console.log(res.data);
      console.log(id);
      setFullName(res.data.user.fullName);
      setEmail(res.data.user.email);
      setNumber(res.data.user.number);
      setGender(res.data.user.gender);
      setCurrentAddress(res.data.user.currentAddress);
      setDOb(res.data.user.dob);
      setBloodGroup(res.data.user.bloodGroup);
      setEmergencyNumber(res.data.user.emergencyNumber);
      setIsAvailable(res.data.user.isAvailable);
      setPrevDonation(res.data.user.noPreviousDonation);
    });
  }, [id]);

  const handleSwitchChange = (checked) => {
    setIsAvailable(checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName,
      email: email,
      number: number,
      currentAddress: currentAddress,
      gender: gender,
      dob: dob,
      bloodGroup: bloodGroup,
      noPreviousDonation: noPreviousDonation,
      isAvailable: isAvailable|| false,
      emergencyNumber: emergencyNumber,
    };

    // making API call
    updateUser(id, data)
      .then((res) => {
        console.log(data);
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };

  return (
    <>
      <div id="profileContainer" class="container-xl px-4 mt-4">
        {/* <nav class="nav nav-borders">
          <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
          <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Billing</a>
          <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-security-page" target="__blank">Security</a>
          <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page" target="__blank">Notifications</a>
        </nav> */}
        <div class="row">
          <div class="col-xl-3">
            <div class="card mb-4 mb-xl-0">
              <div class="card-header text-center"> Profile Picture</div>
              <div
                class="card-body"
                style={{ display: "grid", justifyItems: "center" }}
              >
                <img
                  class="img-account-profile  rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <button class="btn btn-primary" type="button">
                  Upload new image
                </button>
                {users.isADonor ? (
                  <div
                    style={{ gap: "1rem", display: "flex", marginTop: "1rem" }}
                  >
                    <label className="font-weight-bold">
                      Available for donation: {isAvailable ? "Yes" : "No"}
                    </label>
                    <ReactSwitch
                      onChange={handleSwitchChange}
                      checked={isAvailable}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header">Account Details</div>
              <div class="card-body">
                <form>
                  {/* <div class="mb-3">
                    <label class="small mb-1" >Username (how your name will appear to other users on the site)</label>
                    <input class="form-control" type="text" placeholder="Enter your username" value={fullName} />
                  </div> */}
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Full Name
                      </label>
                      <input
                        onChange={(e) => setFullName(e.target.value)}
                        class="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={fullName}
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Gender
                      </label>
                      <select
                        style={{ height: "auto" }}
                        onChange={(e) => setGender(e.target.value)}
                        type="text"
                        class="form-control"
                        required
                      >
                        <option aria-disabled value={gender}>{gender}</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1">Phone Number</label>
                      <input class="form-control" type="text" value={number} />
                    </div>
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        Location
                      </label>
                      <input
                        onChange={(e) => setCurrentAddress(e.target.value)}
                        class="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        value={currentAddress}
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="small mb-1" for="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      class="form-control"
                      id="inputEmailAddress"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      value={email}
                    />
                  </div>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Emergency Number
                      </label>
                      <input
                        onChange={(e) => setEmergencyNumber(e.target.value)}
                        class="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your Emergency Number"
                        value={emergencyNumber}
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputBirthday">
                        Birthday
                      </label>
                      <input
                        type="text"
                        placeholder={dob}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = { dob })}
                        onChange={(e) => setDOb(e.target.value)}
                        class="form-control"
                        id="inputBirthday"
                        name="birthday"
                        value={dob}
                      />
                    </div>
                  </div>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        Select BloodGroup
                      </label>
                      <select
                        style={{ height: "auto" }}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        type="text"
                        class="form-control"
                        required
                      >
                        <option disabled value={bloodGroup}>{bloodGroup}</option>
                        <option value="A+">A+</option>
                        <option value="A+">B+</option>
                        <option value="A+">AB+</option>
                        <option value="A+">O+</option>
                        <option value="A+">A-</option>
                        <option value="A+">AB-</option>
                        <option value="A+">B-</option>
                        <option value="A+">O-</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        No. of Previous Donation 'Approx'
                      </label>
                      <input
                        onChange={(e) => setPrevDonation(e.target.value)}
                        class="form-control"
                        id="inputLocation"
                        type="number"
                        value={noPreviousDonation}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    class="btn btn-primary"
                    type="button"
                  >
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
