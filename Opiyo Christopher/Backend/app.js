const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true })

mongoose.connect("mongodb://localhost/myApp", { useNewUrlParser: true }, () =>
  console.log("connected to Database!")
);

const appModel = require("./models/model");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  console.log(req.body);

  const register = await req.body;

  await appModel.create(register).then(
    (register) => {
      res.status(200).send({
        register: register,
      });
    },
    (err) => {
      res.send(err);
    }
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
