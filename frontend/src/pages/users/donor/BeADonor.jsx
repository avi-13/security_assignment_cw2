import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { beADonorApi, getSingleUserApi } from "../../../apis/api";
import '../../../style/BeDonor.css';

const BeADonor = () => {
  const { id } = useParams()

  // const navigate = useNavigate();

  // useState (setting input value)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [currentAddress, setCurrentAddress] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDOb] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [noPreviousDonation, setPrevDonation] = useState('')
  const [emergencyNumber, setEmergencyNumber] = useState('')


  // use effect to fetch product details 
  useEffect(() => {
    //API call
    getSingleUserApi(id).then((res) => {
      console.log(res.data)
      setFullName(res.data.user.fullName)
      setEmail(res.data.user.email)
      setNumber(res.data.user.number)
      setCurrentAddress(res.data.user.currentAddress)
    })
  }, [id])

  // function for changing input value

  const changeGender = (e) => {
    setGender(e.target.value)
  }

  const changeDob = (e) => {
    setDOb(e.target.value)
  }
  const changeBg = (e) => {
    setBloodGroup(e.target.value)
  }
  const changePrevDonation = (e) => {
    setPrevDonation(e.target.value)
  }

  const changeEmergencyNumber = (e) => {
    setEmergencyNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      gender: gender,
      dob: dob,
      bloodGroup: bloodGroup,
      noPreviousDonation: noPreviousDonation,
      emergencyNumber: emergencyNumber,
      isADonor: true
    }

    // making API call
    beADonorApi(data).then((res) => {
      console.log(data)
      if (res.data.success == false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
        window.location.reload();

      }
    }).catch((err) => {
      toast.error("Server Error")
      console.log(err.message)
    });
  }

  return (
    <>
      <div className="donorBody">
        <div class="donor-container">
          <div className="donor-image">
            <img
              src="../assets/images/donors.png"
              alt="image" />
          </div>
          <div class="donor-container-text">

            <form style={{ border: " grey solid 0.2rem", padding: "2rem" }}>
              <h1 className="text-center">Register as Donor</h1>
              <input type="text" disabled placeholder={`${fullName}`} />
              <input type="email" disabled placeholder={`${email}`} />
              <input type="text" disabled placeholder={`${number}`} />
              <input type="text" disabled placeholder={`${currentAddress}`} />
              <select onChange={changeGender} type="text" required >
                <option value="" disabled selected>Select your option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input onChange={changeDob} type="text" placeholder="Date Of Birth" />
              <select onChange={changeBg} type="text" required >
                <option value="" disabled selected>Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="AB-">AB-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
              </select>
              <input onChange={changePrevDonation} type="number" placeholder="No. of PreviousDonation" />
              <input onChange={changeEmergencyNumber} type="number" placeholder="Emergency Number" />
              <button onClick={handleSubmit} type="submit" style={{ height: "60px" }}>Register as a Donor</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeADonor;
