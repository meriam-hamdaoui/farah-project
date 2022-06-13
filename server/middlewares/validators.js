const { check, body, validationResult } = require("express-validator");

exports.parentValidator = [
  //name validation
  body("firstName").notEmpty().withMessage("please enter your first name"),
  body("lastName").notEmpty().withMessage("please enter your last name"),
  //email validation
  body("email")
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .withMessage("please enter a valid email"),
  body("email")
    .isLowercase()
    .withMessage("your email can not have capital letters"),
  //password
  body("password", "your password should have 8 acracters as minimum").isLength(
    { min: 8 }
  ),
  //phone validation
  body("phone").notEmpty().withMessage("phone number is required"),
  body("phone")
    .isLength({ min: 8 })
    .isNumeric()
    .withMessage("enter a valid phone number please"),

  //address fields validation
  body("address.street").notEmpty().withMessage("enter your street please"),
  body("address.city").notEmpty().withMessage("enter your city  please"),
  body("address.state").notEmpty().withMessage("enter your state  please"),
  body("address.postal")
    .notEmpty()
    .withMessage("enter your postal code please"),
  body("address.postal").isNumeric().withMessage("the postal code is a number"),
  //job
  body("job").notEmpty().withMessage("enter your current job please"),
  //family member
  body("familyMembers")
    .notEmpty()
    .withMessage("enter your the number of your family members"),
  body("familyMembers")
    .isNumeric()
    .withMessage("this is field must be numeric"),
  //children
  body("child")
    .notEmpty()
    .withMessage("you must have children with special needs to register"),
  //demandes
  body("demandes").notEmpty().withMessage("specify your demandes please"),
];

exports.childValidator = (req, res, next) => {
  const children = req.body.child;
  const err = children.map((child) => {
    const { childFName, childLName, birthDate, disorder, integration } = child;
    check(childFName).notEmpty();
    check(childLName).notEmpty();
    check(birthDate).notEmpty().isDate();
    check(disorder.disType).notEmpty();
    check(disorder.disEstablishment).notEmpty();
    check(disorder.disDate).notEmpty().isDate();
    check(integration.integrated).isBoolean();
  });
  if (!err.isEmpty) {
    return res.status(400).json({ msg: "child validation errors" });
  }
  next();
};
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
