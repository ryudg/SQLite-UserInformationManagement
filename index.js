const express = require("express");
const ejs = require("ejs");
const { sequelize, User, Op } = require("./database");
const app = express();

sequelize.sync().then(function () {
  console.log("데이터 연결 완료");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// home
app.get("/", async function (req, res) {
  const userInfo = await User.findAll({ order: [["id", "DESC"]] });
  res.render("pages/index.ejs", { userInfo });
});

// create
app.post("/create", async (req, res) => {
  const newUser = await User.create({
    username: req.body.username,
    age: req.body.age,
    sex: req.body.sex,
    contact: req.body.contact,
  });
  res.redirect("/");
});

// search
app.post("/search", async (req, res) => {
  const searData = req.body.searchdata;
  const userInfo = await User.findAll({
    order: [["id", "DESC"]],
    where: { username: { [Op.like]: "%" + req.body.searchdata + "%" } },
  });
  res.render("pages/search.ejs", { userInfo, searData });
});

// delete
app.post("/delete/:id", async (req, res) => {
  const userDestroy = await User.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/");
});

const port = 3030;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
