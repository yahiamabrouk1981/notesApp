const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRoutes = require("./routes/notes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/notes-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", noteRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
