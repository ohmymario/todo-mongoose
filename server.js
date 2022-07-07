const express = require("express");
const app = express();

// DATABASE CONNECTION FUNCTION
const connectDB = require("./config/database");

// ROUTES
// next step -> talk to controllers after routes match
const homeRoutes = require("./routes/home");
const todoRoutes = require("./routes/todos");

// local environment variables
require("dotenv").config({ path: "./config/.env" });

// Call function to Connect to Database
connectDB();

// Using ejs as html template
app.set("view engine", "ejs");
// serve files from public folder
app.use(express.static("public"));

// same functionality as body parser
// parses incoming requests with urlencoded payloads and is based on body-parser.
// available on req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This example shows a middleware function mounted on the "/"
// The function is executed for any type of HTTP request on the "/".
app.use("/", homeRoutes);
app.use("/todos", todoRoutes);

// Display on console "Server Running Message"
app.listen(process.env.PORT, () => {
  console.log(`Server Running on PORT: ${process.env.PORT}`);
});
