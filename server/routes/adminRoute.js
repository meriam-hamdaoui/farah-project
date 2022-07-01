const { Router } = require("express");

Router.post("uggug", isAuth, isAdmin);

const isAdmin = (req, res, next) => {
  if (req.user.role === 0) {
  }
};
