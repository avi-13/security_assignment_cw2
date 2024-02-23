const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const multiparty = require("connect-multiparty");
const cloudinary = require("cloudinary");
const connectDB = require("./database/db");

const app = express();
dotenv.config();

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running!! on ${PORT}`);
});

const corsPolicy = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsPolicy));
app.use(multiparty());

// user routes
app.use("/api/user", require("./routes/userRoutes"));
// app.use("/api/admin", require("./routes/"))

// bloodBank routes
app.use("/api/bloodbank", require("./routes/bloodBankRoutes"));

// bloodBank routes
app.use("/api/hospital", require("./routes/hospitalRoutes"));

// add request server
app.use("/api/blood_request", require("./routes/bloodRequestRoute"));

app.use("/api/contact", require("./routes/contactRoutes"));

module.exports = {
  connectDB,
};
module.exports = app;
