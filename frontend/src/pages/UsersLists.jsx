import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomCircularProgress from "../components/CustomCircularProgress";
import "../style/UsersLists.css";

const UsersLists = () => {
  const location = useLocation();
  const searchedUsers = location?.state?.searchedUsers;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (searchedUsers && searchedUsers?.length > 0) {
      const nonAdminUsers = searchedUsers.filter(user => !user.isAdmin);
      setUsers(nonAdminUsers);
      console.log(searchedUsers);
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [searchedUsers]);

  return (
    <div className="users-container">
      <h1>All Users</h1>
      {loading ? (
        <CustomCircularProgress />
      ) : (
        <>
          {users?.length > 0 ? (
            <ul className="users-list">
              {console.log(users.isAdmin)}
              {users?.map((user) => (
                <li key={user._id} className="user-card">
                  <div
                    className={`user-image ${
                      user.isAvailable ? "green-border" : "red-border"
                    }`}
                  >
                    <img
                      src={user.userImageURL}
                      alt={user.fullName}
                      className="user-image"
                    />
                  </div>
                  <div className="user-details">
                    <h3>{user.fullName}</h3>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                      <strong>Phone Number:</strong> {user.number}
                    </p>
                    <p>
                      <strong>Address:</strong> {user.currentAddress}
                    </p>
                    <p>
                      <strong>Gender:</strong> {user.gender}
                    </p>
                    <p>
                      <strong>Blood Group:</strong> {user.bloodGroup}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="not-found">
              No Users Found{" "}
              <span role="img" aria-label="sad">
                😢
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UsersLists;
