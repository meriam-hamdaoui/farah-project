const User = require("../models/user");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

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
      const saltRound = 8;
      const salt = bcrypt.genSaltSync(saltRound);
      const hash = bcrypt.hashSync(admin.password, salt);
      admin.password = hash;
      admin.passwordConfirm = hash;
      const payload = { id: admin._id };
      let token = jwt.sign(payload, process.env.secretOrKey);
      token && (await admin.save());
      console.log(`your admin is created => ${admin} 
      with token => ${token}`);
    } else if (isAdmin) {
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = setup;
