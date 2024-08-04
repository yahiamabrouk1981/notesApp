const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRoutes = require("./routes/notes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://yahiamabrouk1981:lmD3ShPCAug2FqSY@cluster0.xg8hgn2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log("Connected to DB");

app.use("/api", noteRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
