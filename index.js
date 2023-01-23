const express = require("express");
const cors = require("cors");
const app = express();

const { corsOptions } = require("./config/cors.config");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database Connect`);
  })
  .catch((err) => {
    console.log("no connect database", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    messege: "server on",
  });
});
require("./app/routes/post.routes")(app);
app.use((req, res, next) => {
  res.status(404).json({
    status: "failed",
    messege: "404 not found",
  });
});
app.listen(3000, () => console.log("server running http://localhost:3000"));
