const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const allRoutes = require("./Routes/auth.Routes");
const cors = require("cors");
const AuthRouter = require("./Routes/auth.Routes");
const taskRouter = require("./Routes/taskRoutes");
const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", AuthRouter);

console.log("DATABASE URI:", process.env.DATABASE);

// CONNECT DATABASE
mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.error("Could not connect to DB...", err));

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/v1", allRoutes);
