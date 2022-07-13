const Schema = require("mongoose");
const User = require("../models/user");
const Consultant = require("../models/consultant");

exports.updateProfile = async (req, res) => {
  //get the profil id from the req param
  const { id } = req.params;
  // console.log("updateProfile id =>", id);
  const userId = Schema.Types.ObjectId(id);
  const { user, ...rest } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, {
      $set: { ...user },
    });
    // console.log("updateUser =>", updateUser);
    const updateConsultant = await Consultant.findOneAndUpdate(
      { user: userId },
      { ...rest }
    );
    // console.log("updateParent =>", updateParent);

    if ((await updateUser.save()) && (await updateConsultant.save())) {
      const updatedProfile = await Consultant({ user: userId }).populate(
        "user"
      );
      if (updatedProfile)
        return res
          .status(200)
          .send({ msg: "your profile is updated", updatedProfile });
    }
  } catch (error) {
    console.error("updateProfile error=>", error);
    res.status(500).send({ msg: "updateProfile error", error });
  }
};
