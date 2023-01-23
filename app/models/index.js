const dbconfig = require("../../config/db.config");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbconfig.url;
db.posts = require("./post.model")(mongoose);

module.exports = db;
