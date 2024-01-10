import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { beADonorApi, getSingleUserApi } from "../../../apis/api";
import '../../../style/BeDonor.css';

const BeADonor = () => {
  const { id } = useParams()


  const navigate = useNavigate();
  // useState (setting input value)
  const [gender, setGender] = useState('')
  const [dob, setDOb] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [noPreviousDonation, setPrevDonation] = useState('')
  const [emergencyNumber, setEmergencyNumber] = useState('')


  // // use effect to fetch product details 
  // useEffect(() => {
  //   //API call
  //   getSingleUserApi(id).then((res) => {
  //     console.log(res.data)
  //     // s(res.data.product.productName)
  //     // setProductPrice(res.data.product.productPrice)
  //     // setProductCategory(res.data.product.productCategory)
  //     // setProductDescription(res.data.product.productDescription)
  //     // setOldImage(res.data.product.productImageUrl)
  //   })
  // }, [id])

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



  // function for button 
  const handleSubmit = (e) => {
    e.preventDefault();

    // making logical form data
    const formData = new FormData();
    formData.append("gender", gender);
    formData.append("emergencyNumber", emergencyNumber);
    formData.append("dob", dob);
    formData.append("bloodGroup", bloodGroup);
    formData.append("noPreviousDonation", noPreviousDonation);

    // making API call
    beADonorApi(formData).then((res) => {
      console.log(formData)
      if (res.data.success == false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
        navigate('/login')
        window.location.reload();

      }

    }).catch((err) => {
      toast.error("Server Error")
      console.log(err.message)
    });
  }

  return (
    <>
      <div className="body">
        <div class="donor-container">
          <div className="donor-image">
            <img
              src="../assets/images/donors.png"
              alt="image" />
          </div>
          <div class="donor-container-text">

            <form style={{ border: " grey solid 0.2rem", padding: "2rem" }}>
              <h1 className="">Register as Donor</h1>
              <input type="text" disabled placeholder="Full Name" />
              <input type="email" disabled placeholder="Email address" />
              <input type="text" disabled placeholder="Number" />
              <input type="text" disabled placeholder="Current Address" />
              <select onChange={changeGender} type="text" required >
                <option value="" disabled selected>Select your option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input onChange={changeDob} type="date" placeholder="Date Of Birth" />
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
