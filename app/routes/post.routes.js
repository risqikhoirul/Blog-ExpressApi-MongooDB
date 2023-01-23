const apps = (app) => {
  const posts = require("../controlers/post.controlers");
  const router = require("express").Router();

  router.get("/", posts.findAll);
  router.post("/", posts.create);
  router.get("/:id", posts.findOne);
  router.put("/:id", posts.update);
  router.delete("/:id", posts.remove);

  app.use("/api/posts", router);
};
module.exports = apps;
