const User = require("../models/user");
let bcrypt = require("bcryptjs");

const setup = async () => {
  try {
    const isAdmin = await User.findOne({ role: 0 });
    if (!isAdmin) {
      const admin = new User({
        firstName: "Mariem",
        lastName: "Hamdaoui",
        email: "meriam.hamdaoui@gmail.com",
        password: "mariem2412",
        passwordConfirm: "mariem2412",
        category: "admin",
        role: 0,
      });
      await admin.save();
      console.log(`your admin is created => ${admin}`);
    } else if (isAdmin) {
      console.log("you can't have more then admin in your app");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = setup;
