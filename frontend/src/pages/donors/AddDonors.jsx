import React, { useEffect, useState } from "react";
import { fetchAllUsersApi } from "../../apis/api";

export default function AddDonors() {

    // useEffect for fetching all the products and showing in table
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchAllUsersApi().then((res) => {
            console.log(res.data);
            setUsers(res.data.users);
        })
    }, [])

    return (
        <div className="container">
            <h2>Sample Table</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Current Address</th>
                        <th>Email</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => (<tr>
                            <td>{item.fullName}</td>
                            <td>{item.currentAddress}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>

                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}