const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 4000;
app.use(bodyparser.json());
const Room = [];
const Customerdetails = [];
app.post("/Room", (req, res) => {
  Room.push(req.body);
  res.json({ message: "Room created" });
});
app.post("/Customerdetails", (req, res) => {
  Customerdetails.push(req.body);
  res.json({ message: "customerdetails" });
});
app.get("/bookedRoom", (req, res) => {
let room = Customerdetails.map((data) => {
    return {
      "Customer_Name": data.Customer_Name,
      "Date": data.Date,
      "Start_Time": data.Start_Time,
      "End_Time": data.End_Time,
      "Room_ID": data.Room_ID,
    };
  });
  res.json(room);
});
app.get("/bookedCustomers", (req, res) => {
  let customer = Customerdetails.map((data) => {
    return {
      "Customer_Name": data.Customer_Name,
      "Room_ID": data.Room_ID,
    };
  });
  res.json(customer);
});
app.listen(process.env.PORT || port, () => {
  console.log(`the server is listening ${port}`);
});
