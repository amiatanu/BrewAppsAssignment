const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes.js");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI_ATLAS || "mongodb://localhost:27017";
mongoose.set("strictQuery", false);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.use(bodyParser.json());

// Use the book routes
app.use("/api", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
