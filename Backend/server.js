const express = require("express");

const app = express();

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");

const cors = require("cors");

// Middleware

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);


// Routes

app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});


app.listen(4500, () => {

  console.log("Server Running on Port 4500");

});