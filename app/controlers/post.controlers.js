const db = require("../models/");
const Post = db.posts;

const findAll = (req, res) => {
  Post.find()
    .then((result) => {
      res.status(200).send({
        status: "success",
        message: result,
      });
    })
    .catch(() => {
      res.status(500).send({
        status: "failed",
        message: "Some Error while retrieving posts.",
      });
    });
};

const create = (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    published: req.body.published ? req.body.published : false,
  });
  post
    .save(post)
    .then((result) => {
      res.status(200).send({
        status: "success",
        message: result,
      });
    })
    .catch(() => {
      res.status(409).send({
        status: "failed",
        message: "Some Error while create posts.",
      });
    });
};
const findOne = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((result) => {
      res.status(200).send({
        status: result === null ? "failed" : "success",
        message: result,
      });
    })
    .catch(() => {
      res.status(404).send({
        status: "failed",
        message: "Some Error while show posts.",
      });
    });
};
const update = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body)

    .then((result) => {
      if (!result) {
        res.status(404).send({
          status: "failed",
          message: "404 ID Not Found | Some Error while update posts.",
        });
      }
      res.status(200).send({
        status: "success",
        message: result,
      });
    })
    .catch(() => {
      res.status(409).send({
        status: "failed",
        message: "Some Error while update posts.",
      });
    });
};

const remove = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          status: "failed",
          message: "404 Not Found | Some Error while delete posts.",
        });
      }
      res.status(200).send({
        status: "success",
        message: result,
      });
    })
    .catch(() => {
      res.status(409).send({
        status: "failed",
        message: "Some Error while delete posts.",
      });
    });
};

module.exports = { findAll, create, findOne, update, remove };
