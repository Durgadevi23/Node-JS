const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyparser.json());
let staffDetail = []
let studentDetail = []

app.post("/student", (req, res) => {
  studentDetail.push(req.body);
  res.json({ message: "student details created successfully!" })
});

app.get("/student", (req, res) => {
  res.send(studentDetail)
})

app.post("/staff", (req, res) => {
  staffDetail.push(req.body);
  res.json({ message: "staff details created successfully!" })
});

app.get("/staff", (req, res) => {
  let staff = staffDetail.map((data) => {
    let count = studentDetail.filter((entry) => entry.staffid === data.id);
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      studentCount: count.length
    }
  })
  res.json(staff)
})

app.put("/student/:id", (req, res) => {
  console.log(req.params.id);
  studentDetail.forEach((element) => {
    if (element.id == req.params.id) {
      element.name = req.body.name;
      res.status(200).send({ message: "updated" })
    }
  })
})

app.delete("/delete/:id", (req, res) => {
  let filtervalue = studentDetail.filter((element) => {
    if (element.id == req.params.id) {
      return element;
    }
  })[0];
  studentDetail = filtervalue;
  res.send(studentDetail);
});

app.listen(process.env.PORT || port, () => {
  console.log(`server is listening ${port}`);
});
