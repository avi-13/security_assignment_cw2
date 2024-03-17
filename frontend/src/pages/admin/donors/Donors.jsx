import React, { useEffect, useState } from "react";
import { fetchAllUsersApi } from "../../../apis/api";

export default function ViewDonors() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsersApi()
      .then((res) => {
        console.log(res.data.users);
        const formattedUsers = res.data.users.map((user) => {
          const dateOfBirth = new Date(user.dob);
          const formattedDateOfBirth = `${dateOfBirth.getDate()}/${
            dateOfBirth.getMonth() + 1
          }/${dateOfBirth.getFullYear()}`;
          return { ...user, dob: formattedDateOfBirth };
        });
        setUsers(formattedUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        className="container content"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <h2 className="text-center">All The Donors</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Current Address</th>
                <th>Is Admin</th>
                <th>Is Available</th>
                <th>Is A Donor</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Blood Group</th>
                <th>No Previous Donation</th>
                <th>Emergency Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item._id}>
                  <td>{item.fullName || "Null"}</td>
                  <td>{item.email || "Null"}</td>
                  <td>{item.number || "Null"}</td>
                  <td>{item.currentAddress || "Null"}</td>
                  <td>{item.isAdmin ? "Yes" : "No"}</td>
                  <td>{item.isAvailable ? "Yes" : "No"}</td>
                  <td>{item.isADonor ? "Yes" : "No"}</td>
                  <td>{item.gender || "Null"}</td>
                  <td>{item.dob || "Null"}</td>
                  <td>{item.bloodGroup || "Null"}</td>
                  <td>{item.noPreviousDonation || "Null"}</td>
                  <td>{item.emergencyNumber || "Null"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
