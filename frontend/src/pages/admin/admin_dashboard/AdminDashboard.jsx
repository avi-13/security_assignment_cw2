import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminDashboard = () => {
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

  const hospitalData = [
    { name: "Jan", hospitalsAdded: 5 },
    { name: "Feb", hospitalsAdded: 0 },
    { name: "Mar", hospitalsAdded: 2 },
    { name: "Apr", hospitalsAdded: 8 },
    { name: "May", hospitalsAdded: 2 },
    { name: "Jun", hospitalsAdded: 3 },
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

  const bloodBankData = [
    { name: "A+", value: 20 },
    { name: "B+", value: 25 },
    { name: "O+", value: 30 },
    { name: "AB+", value: 15 },
    { name: "A-", value: 10 },
    { name: "B-", value: 12 },
    { name: "O-", value: 18 },
    { name: "AB-", value: 8 },
  ];

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
          <h3 className="text-center">Hospital Data</h3>
          <LineChart width={500} height={300} data={hospitalData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="hospitalsAdded" stroke="#8884d8" />
          </LineChart>
        </div>
        {/* Blood Request Chart */}
        <div className="chart">
          <h3 className="text-center">Blood Requests Data</h3>
          <BarChart width={500} height={300} data={bloodRequestData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="requests" fill="#82ca9d" />
          </BarChart>
        </div>
        {/* Blood Bank Chart */}
        <div className="chart">
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
        </div>
        {/* Donor Chart */}
        <div className="chart">
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
