// index.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const loanRoutes = require("./routes/loanRoutes");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://meghnatomar_db_user:<meghnatomar_db_user>@cluster0.bbap3ln.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", loanRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Rupeezy Backend is Running");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
