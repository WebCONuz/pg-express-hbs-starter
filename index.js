const config = require("config");
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/index.routes");
const exHbs = require("express-handlebars");
const sequelize = require("./config/db");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// express-handlebars
const hbs = exHbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "views")));

// routes
app.use("/", routes);

const start = async () => {
  try {
    // Connect to DB
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection to DB successfully.");

    // Listen to project
    const Port = config.get("port") || 5001;
    app.listen(Port, () => {
      console.log(`Project running on port: ${Port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

// run project
start();
