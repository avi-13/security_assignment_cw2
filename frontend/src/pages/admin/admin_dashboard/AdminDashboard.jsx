import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchAllUsersApi, getallBloodBankApi, getallhospitalsApi, viewCampaignApi } from "../../../apis/api";

const AdminDashboard = () => {
  const [bloodBank, setBloodBank] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [bbLength, setBBlength] = useState("");
  const [usLength, setUsLength] = useState("");
  const [hospitalLength, setHospitalLength] = useState("");
  const [camLength, setCampLength] = useState("");

  const currentYear = new Date().getFullYear();
  const bloodBankByMonth = bloodBank.reduce((acc, app) => {
    const appDate = new Date(app.createdAt);
    if (appDate.getFullYear() === currentYear) {
      const month = appDate.getMonth();
      acc[month] = (acc[month] || 0) + 1;
    }
    return acc;
  }, {});

  const hospitalByMonth = hospital.reduce((acc, hos) => {
    const hosDate = new Date(hos.createdAt);
    if (hosDate.getFullYear() === currentYear) {
      const month = hosDate.getMonth();
      acc[month] = (acc[month] || 0) + 1;
    }
    return acc;
  }, {});

  useEffect(() => {
    getallBloodBankApi().then((res) => {
      setBloodBank(res.data.mobbank);
      setBBlength(bloodBank.length)
    });
  }, []);

  useEffect(() => {
    fetchAllUsersApi().then((res) => {
      setUsLength(res?.data?.users.length)
    });
  }, []);

  useEffect(() => {
    viewCampaignApi().then((res) => {
      setCampLength(res?.data?.allCampaigns.length)
    });
  }, []);


  useEffect(() => {
    getallBloodBankApi().then((res) => {
      setBloodBank(res.data.mobbank);
      setBBlength(bloodBank.length)
    });
  }, []);

  const bloodBankData = [
    { name: "Jan", bloodBanksAdded: bloodBankByMonth[0] || 0 },
    { name: "Feb", bloodBanksAdded: bloodBankByMonth[1] || 0 },
    { name: "Mar", bloodBanksAdded: bloodBankByMonth[2] || 0 },
    { name: "Apr", bloodBanksAdded: bloodBankByMonth[3] || 0 },
    { name: "May", bloodBanksAdded: bloodBankByMonth[4] || 0 },
    { name: "Jun", bloodBanksAdded: bloodBankByMonth[5] || 0 },
    { name: "July", bloodBanksAdded: bloodBankByMonth[6] || 0 },
    { name: "Aug", bloodBanksAdded: bloodBankByMonth[7] || 0 },
    { name: "Sep", bloodBanksAdded: bloodBankByMonth[8] || 0 },
    { name: "Oct", bloodBanksAdded: bloodBankByMonth[9] || 0 },
    { name: "Nov", bloodBanksAdded: bloodBankByMonth[10] || 0 },
    { name: "Dec", bloodBanksAdded: bloodBankByMonth[11] || 0 },
  ];

  useEffect(() => {
    getallhospitalsApi().then((res) => {
      setHospital(res.data.allHospitals);
      setHospitalLength(hospital.length);
    });
  }, []);

  const hospitalData = [
    { name: "Jan", hospitalsAdded: hospitalByMonth[0] || 0 },
    { name: "Feb", hospitalsAdded: hospitalByMonth[1] || 0 },
    { name: "Mar", hospitalsAdded: hospitalByMonth[2] || 0 },
    { name: "Apr", hospitalsAdded: hospitalByMonth[3] || 0 },
    { name: "May", hospitalsAdded: hospitalByMonth[4] || 0 },
    { name: "Jun", hospitalsAdded: hospitalByMonth[5] || 0 },
    { name: "July", hospitalsAdded: hospitalByMonth[6] || 0 },
    { name: "Aug", hospitalsAdded: hospitalByMonth[7] || 0 },
    { name: "Sep", hospitalsAdded: hospitalByMonth[8] || 0 },
    { name: "Oct", hospitalsAdded: hospitalByMonth[9] || 0 },
    { name: "Nov", hospitalsAdded: hospitalByMonth[10] || 0 },
    { name: "Dec", hospitalsAdded: hospitalByMonth[11] || 0 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF1919",
    "#33FF19",
    "#19FFDD",
  ];

  const bloodRequestData = [
    { name: "A+", requests: 10 },
    { name: "B+", requests: 15 },
    { name: "O+", requests: 20 },
    { name: "AB+", requests: 12 },
    { name: "A-", requests: 8 },
    { name: "B-", requests: 10 },
    { name: "O-", requests: 18 },
    { name: "AB-", requests: 5 },
  ];

  // const bloodBankData = [
  //   { name: "A+", value: 20 },
  //   { name: "B+", value: 25 },
  //   { name: "O+", value: 30 },
  //   { name: "AB+", value: 15 },
  //   { name: "A-", value: 10 },
  //   { name: "B-", value: 12 },
  //   { name: "O-", value: 18 },
  //   { name: "AB-", value: 8 },
  // ];

  const donorData = [
    { name: "Age Group 18-25", value: 30 },
    { name: "Age Group 26-35", value: 25 },
    { name: "Age Group 36-45", value: 20 },
    { name: "Age Group 46-55", value: 15 },
    { name: "Age Group 56-65", value: 10 },
  ];

  return (
    <div className="container">
      <h2 className="text-center">Dashboard</h2>
      <div className="charts d-flex flex-row flex-wrap justify-content-between">
        {/* Hospital Chart */}
        <div className="chart">
          <h3 className="text-center">
            BloodBank Data By Month {`(${currentYear})`}
          </h3>
          <LineChart width={500} height={300} data={bloodBankData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bloodBanksAdded" stroke="#8884d8" />
          </LineChart>
        </div>
        {/* Blood Request Chart */}
        <div className="chart">
          <h3 className="text-center">
            Hospitals Added By Month {`(${currentYear})`}
          </h3>
          <BarChart width={500} height={300} data={hospitalData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hospitalsAdded" fill="#82ca9d" />
          </BarChart>
        </div>
        {/* Blood Bank Chart */}
        {/* <div className="chart">
          <h3 className="text-center">Blood Bank Data</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={bloodBankData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {bloodBankData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div> */}
        {/* Donor Chart */}
        {/* <div className="chart">
          <h3>Donor Data</h3>
          <RadarChart
            outerRadius={90}
            width={500}
            height={300}
            data={donorData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar
              name="Donors"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Tooltip />
            <Legend />
          </RadarChart>
        </div> */}
      </div>

      <section className="bg-white dark:bg-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
            Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-red-500"
                >
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                  {hospitalLength}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Total Hospitals Registered
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-red-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                  {bbLength}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Total Blood Banks
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-red-500"
                >
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                  {usLength}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  All Registered Donors
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-red-500"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                  {camLength}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Upcoming Blood Drives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
