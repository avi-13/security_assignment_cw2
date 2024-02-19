import React, { useEffect, useState } from "react";
import { fetchAllUsersApi } from "../../../apis/api";

export default function ViewDonors() {
  // useEffect for fetching all the products and showing in table
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchAllUsersApi().then((res) => {
      console.log(res.data);
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div className="container">
      <h2>ALL The Donors</h2>
      <table className="table table-striped">
        <thead className="table-danger">
          <tr>
            <th>Name</th>
            <th>Current Address</th>
            <th>Email</th>
            <th>Number</th>
            <th>BloodGroup</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item.fullName}</td>
              <td>{item.currentAddress}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.bloodGroup ? item.bloodGroup : "Null"}</td>
              <td>{item.isAvailable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
