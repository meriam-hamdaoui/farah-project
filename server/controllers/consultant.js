//consultant controllers
exports.getProfile = (req, res) => {
  res.send(req.user);
};

exports.updateProfile = async (req, res) => {};
