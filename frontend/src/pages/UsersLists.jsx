import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomCircularProgress from "../components/CustomCircularProgress";
import "../style/UsersLists.css";

const UsersLists = () => {
  const location = useLocation();
  const searchedUsers = location?.state?.searchedUsers;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    if (searchedUsers && searchedUsers?.length > 0) {
      const nonAdminUsers = searchedUsers.filter((user) => !user.isAdmin);
      setUsers(nonAdminUsers);
      console.log(searchedUsers);
      setLoading(false);
    } else {
      setTimeout(() => {}, 2000);
    }
  }, [searchedUsers]);

  useEffect(() => {
    if (searchedUsers && searchedUsers?.length > 0) {
      const filteredUsers = searchedUsers.filter((user) =>
        user.fullName.toLowerCase().includes(searchName.toLowerCase())
      );
      setUsers(filteredUsers);
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [searchedUsers, searchName]);

  return (
    <>
      <header className="bg-white py-4 px-6 mt-24">
        <h1 className="text-2xl font-bold">Available Users</h1>
      </header>
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="searchName">Search By Name:</label>
          <input
          className="border border-gray-300 rounded-md p-2"
            id="searchName"
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Enter name..."
          />
        </div>
      </div>
      <main className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <CustomCircularProgress />
          </div>
        ) : (
          <>
            {users?.length > 0 ? (
              users.map((user) => (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative group">
                    <div className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View User</span>
                    </div>
                    <img
                      src={user.userImageURL}
                      alt="User Avatar"
                      width="400"
                      height="400"
                      className="w-full h-48  group-hover:opacity-80 transition-opacity"
                      style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
                    />
                    <div className="p-6 space-y-2">
                      <h2 className="text-xl text-center font-semibold">
                        {user.fullName}
                      </h2>
                      <p className="text-gray-500">Email : {user.email}</p>
                      <p className="text-gray-500">
                        Contact Number: {user.number}
                      </p>
                      <p className="text-gray-500">Gender: {user.gender}</p>
                      <p className="text-gray-500">
                        BloodGroup: {user.bloodGroup}
                      </p>
                      {user.isAvailable ? (
                        <p className="text-green-500">Avaiable For Donation</p>
                      ) : (
                        <p className="text-red-500">
                          Not Available For Donation
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
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
      </main>
    </>
    // <div className="users-container">
    //   <h1>All Users</h1>
    //   {loading ? (
    //     <CustomCircularProgress />
    //   ) : (
    //     <>
    //       {users?.length > 0 ? (
    //         <ul className="users-list">
    //           {console.log(users.isAdmin)}
    //           {users?.map((user) => (
    //             <li key={user._id} className="user-card">
    //               <div
    //                 className={`user-image ${
    //                   user.isAvailable ? "green-border" : "red-border"
    //                 }`}
    //               >
    //                 <img
    //                   src={user.userImageURL}
    //                   alt={user.fullName}
    //                   className="user-image"
    //                 />
    //               </div>
    //               <div className="user-details">
    //                 <h3>{user.fullName}</h3>
    //                 <p>
    //                   <strong>Email:</strong> {user.email}
    //                 </p>
    //                 <p>
    //                   <strong>Phone Number:</strong> {user.number}
    //                 </p>
    //                 <p>
    //                   <strong>Address:</strong> {user.currentAddress}
    //                 </p>
    //                 <p>
    //                   <strong>Gender:</strong> {user.gender}
    //                 </p>
    //                 <p>
    //                   <strong>Blood Group:</strong> {user.bloodGroup}
    //                 </p>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       ) : (
    //         <div className="not-found">
    //           No Users Found{" "}
    //           <span role="img" aria-label="sad">
    //             😢
    //           </span>
    //         </div>
    //       )}
    //     </>
    //   )}
    // </div>
  );
};

export default UsersLists;
