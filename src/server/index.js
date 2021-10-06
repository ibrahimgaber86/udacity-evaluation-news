const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const mockAPIResponse = require("./mockAPI.js");
const PORT = 8000;

dotenv.config();

// declare server and middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("dist")));

console.log(path.join(__dirname, "dist"));

// home page
app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

// post request
app.post("/post", async (req, res) => {
  const {
    body: { url },
  } = req;
  console.log(url);
  const apiUrl = `${process.env.API_URL}?key=${process.env.API_KEY}&url=${url}&lang=en`;
  const response = await axios.post(apiUrl);
  const result = response.data;
  res.send(result);
});

// test
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server Listening On Port Number (${PORT})`);
});
