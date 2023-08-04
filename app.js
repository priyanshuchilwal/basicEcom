const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

const authRoutes = require("./server/routes/authRoutes");
const homeRoutes = require("./server/routes/homeRoutes");
const connectDB = require("./server/config/db");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/auth", authRoutes);
app.use(homeRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
